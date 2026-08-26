// <liquid-grid> — vanilla web-component port of the Originkit "Liquid Grid" canvas.
(function () {
  const DEFAULTS = {
    mode: 'dots', background: '#000000', lineColor: '#FFFFFF4D', glowColor: '#FFFFFF',
    cellSize: 16, lineWidth: 1, radius: 58, intensity: 100, collide: true, clickRipple: true
  };
  const DAMPING = 0.97, WAVE_HEIGHT = 14, STEP = 8, MAX_CELLS = 150, PAD = 20;
  const WAVE_C = Math.SQRT1_2, MUR_K = (WAVE_C - 1) / (WAVE_C + 1), ABSORB_MAX = 0.6;
  const BUCKETS = 4, GLOW_FULL = 4, TAU = Math.PI * 2;

  function parseColor(color) {
    const s = String(color || '').trim();
    const m = s.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
    if (m) return [+m[1], +m[2], +m[3]];
    const h = s.replace('#', '');
    const f = h.length === 3 ? h.split('').map(c => c + c).join('') : h.slice(0, 6);
    const n = parseInt(f, 16) || 0;
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function clamp(n, min, max, fallback) {
    const v = typeof n === 'number' ? n : parseFloat(n);
    if (!Number.isFinite(v)) return fallback;
    return Math.min(max, Math.max(min, v));
  }

  class LiquidGrid extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.setAttribute('aria-hidden', 'true');
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      if (this.parentElement && getComputedStyle(this.parentElement).position !== 'static') {
        this.style.position = 'absolute';
        this.style.inset = '0';
      }
      const canvas = document.createElement('canvas');
      canvas.style.cssText = 'display:block;width:100%;height:100%;pointer-events:none';
      this.appendChild(canvas);
      this._canvas = canvas;
      this._ctx = canvas.getContext('2d');
      this._rip = { cur: new Float32Array(0), prev: new Float32Array(0), W: 0, H: 0, rW: 0, rH: 0, gW: 0, gH: 0, live: false };
      this._px = new Float32Array(0); this._py = new Float32Array(0); this._pk = new Float32Array(0);
      this._lastCollide = null;
      this._queued = null;

      this._resize();
      this._ro = new ResizeObserver(() => this._resize());
      this._ro.observe(canvas);
      this._rect = canvas.getBoundingClientRect();

      this._onMove = (e) => { this._queued = this._toLocal(e.clientX, e.clientY); };
      this._onClick = (e) => {
        const S = this._settings();
        if (!S.click) return;
        const l = this._toLocal(e.clientX, e.clientY);
        if (l) this._addDrop(l.x, l.y, S.radius * 1.6, 2.5, S.collide);
      };
      window.addEventListener('mousemove', this._onMove, { passive: true });
      window.addEventListener('click', this._onClick);

      this._io = new IntersectionObserver((es) => {
        this._onScreen = es[0] ? es[0].isIntersecting : true;
      }, { threshold: 0 });
      this._io.observe(this);
      this._onScreen = true;

      this._draw(this._settings());
      const loop = () => {
        this._rect = this._canvas.getBoundingClientRect();
        const S = this._settings();
        const rip = this._rip;
        if (rip.W > 0 && rip.H > 0 && this._onScreen !== false) {
          if (this._queued) {
            this._addDrop(this._queued.x, this._queued.y, S.radius, S.hoverStrength, S.collide);
            this._queued = null;
          }
          if (rip.live) { this._update(S.collide); this._draw(S); }
        }
        this._raf = requestAnimationFrame(loop);
      };
      this._raf = requestAnimationFrame(loop);
    }

    disconnectedCallback() {
      cancelAnimationFrame(this._raf);
      if (this._ro) this._ro.disconnect();
      if (this._io) this._io.disconnect();
      window.removeEventListener('mousemove', this._onMove);
      window.removeEventListener('click', this._onClick);
    }

    _attr(name, fallback) {
      const v = this.getAttribute(name);
      return v === null ? fallback : v;
    }

    _settings() {
      const weight = clamp(this._attr('line-width', null), 1, 10, DEFAULTS.lineWidth);
      return {
        mode: this._attr('mode', DEFAULTS.mode) === 'lines' ? 'lines' : 'dots',
        background: this._attr('background', DEFAULTS.background),
        lineColor: this._attr('line-color', DEFAULTS.lineColor),
        glowColor: this._attr('glow-color', DEFAULTS.glowColor),
        cellSize: clamp(this._attr('cell-size', null), 8, 120, DEFAULTS.cellSize),
        lineWidth: weight / 2,
        dotRadius: weight,
        radius: clamp(this._attr('radius', null), 20, 600, DEFAULTS.radius),
        hoverStrength: (clamp(this._attr('intensity', null), 0, 100, DEFAULTS.intensity) / 100) * 0.6,
        collide: this._attr('collide', 'true') !== 'false',
        click: this._attr('click-ripple', 'true') !== 'false'
      };
    }

    _toLocal(cx, cy) {
      const r = this._rect;
      if (!r || cx < r.left || cx > r.right || cy < r.top || cy > r.bottom) return null;
      return { x: cx - r.left, y: cy - r.top };
    }

    _resize() {
      const canvas = this._canvas, ctx = this._ctx, rip = this._rip;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const W = Math.max(1, canvas.clientWidth), H = Math.max(1, canvas.clientHeight);
      const pw = Math.round(W * dpr), ph = Math.round(H * dpr);
      if (canvas.width !== pw || canvas.height !== ph) { canvas.width = pw; canvas.height = ph; }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (rip.W === W && rip.H === H) return;
      rip.W = W; rip.H = H;
      const scale = Math.min(1 / 3, MAX_CELLS / Math.max(W, H));
      rip.rW = Math.max(4, Math.floor(W * scale));
      rip.rH = Math.max(4, Math.floor(H * scale));
      rip.gW = rip.rW + PAD * 2; rip.gH = rip.rH + PAD * 2;
      rip.cur = new Float32Array(rip.gW * rip.gH);
      rip.prev = new Float32Array(rip.gW * rip.gH);
      rip.live = true;
      this._draw(this._settings());
    }

    _addDrop(cx, cy, radius, strength, collide) {
      const rip = this._rip;
      const { W, H, rW, rH, gW, gH, cur } = rip;
      if (!W || !gW) return;
      const gx = (cx / W) * rW + PAD, gy = (cy / H) * rH + PAD;
      const gr = Math.max(1, radius * (rW / W));
      const loX = collide ? PAD + 1 : 1, loY = collide ? PAD + 1 : 1;
      const hiX = collide ? PAD + rW - 2 : gW - 2, hiY = collide ? PAD + rH - 2 : gH - 2;
      for (let y = Math.max(loY, Math.floor(gy - gr)); y <= Math.min(hiY, Math.ceil(gy + gr)); y++)
        for (let x = Math.max(loX, Math.floor(gx - gr)); x <= Math.min(hiX, Math.ceil(gx + gr)); x++) {
          const d = Math.sqrt((x - gx) ** 2 + (y - gy) ** 2);
          if (d < gr) cur[y * gW + x] += (1 - d / gr) ** 2 * strength;
        }
      rip.live = true;
    }

    _openEdges() {
      const { gW, gH, cur, prev } = this._rip;
      const last = gH - 1, right = gW - 1;
      for (let x = 0; x < gW; x++) {
        const t = x, b = last * gW + x;
        cur[t] = prev[gW + x] + MUR_K * (cur[gW + x] - prev[t]);
        cur[b] = prev[(last - 1) * gW + x] + MUR_K * (cur[(last - 1) * gW + x] - prev[b]);
      }
      for (let y = 0; y < gH; y++) {
        const l = y * gW, r = l + right;
        cur[l] = prev[l + 1] + MUR_K * (cur[l + 1] - prev[l]);
        cur[r] = prev[r - 1] + MUR_K * (cur[r - 1] - prev[r]);
      }
      for (let y = 0; y < gH; y++) {
        const dy = Math.min(y, last - y);
        for (let x = 0; x < gW; x++) {
          const d = Math.min(dy, x, right - x);
          if (d >= PAD) { if (right - PAD <= x) break; x = right - PAD; continue; }
          const t = 1 - d / PAD, f = 1 - ABSORB_MAX * t * t, i = y * gW + x;
          cur[i] *= f; prev[i] *= f;
        }
      }
    }

    _update(collide) {
      const rip = this._rip;
      const { gW, rW, rH, cur, prev } = rip;
      if (this._lastCollide !== null && this._lastCollide !== collide) {
        cur.fill(0); prev.fill(0); this._lastCollide = collide; rip.live = false; return;
      }
      this._lastCollide = collide;
      const x0 = collide ? PAD + 1 : 1, y0 = collide ? PAD + 1 : 1;
      const x1 = collide ? PAD + rW - 1 : gW - 1, y1 = collide ? PAD + rH - 1 : rip.gH - 1;
      let energy = 0, n = 0;
      for (let y = y0; y < y1; y++)
        for (let x = x0; x < x1; x++) {
          const i = y * gW + x;
          const v = ((cur[(y - 1) * gW + x] + cur[(y + 1) * gW + x] + cur[y * gW + x - 1] + cur[y * gW + x + 1]) * 0.5 - prev[i]) * DAMPING;
          prev[i] = v; energy += v * v; n++;
        }
      rip.cur = prev; rip.prev = cur;
      if (!collide) this._openEdges();
      if (energy < n * 2e-6) { rip.live = false; rip.cur.fill(0); rip.prev.fill(0); }
    }

    _sample(cx, cy) {
      const rip = this._rip;
      const { W, rW, gW, gH, cur } = rip;
      if (!rW || !W) return 0;
      const gx = (cx / W) * rW + PAD, gy = (cy / rip.H) * rip.rH + PAD;
      const ix = Math.floor(gx), iy = Math.floor(gy);
      if (ix < 0 || ix >= gW - 1 || iy < 0 || iy >= gH - 1) return 0;
      const fx = gx - ix, fy = gy - iy;
      return cur[iy * gW + ix] * (1 - fx) * (1 - fy) + cur[iy * gW + ix + 1] * fx * (1 - fy)
        + cur[(iy + 1) * gW + ix] * (1 - fx) * fy + cur[(iy + 1) * gW + ix + 1] * fx * fy;
    }

    _fitScratch(n) {
      if (this._px.length >= n) return;
      this._px = new Float32Array(n); this._py = new Float32Array(n); this._pk = new Float32Array(n);
    }

    _draw(S) {
      const ctx = this._ctx, rip = this._rip;
      const { W, H } = rip;
      if (!W || !H) return;
      ctx.clearRect(0, 0, W, H);
      if (S.background && S.background !== 'rgba(0,0,0,0)' && S.background !== 'transparent') {
        ctx.fillStyle = S.background;
        ctx.fillRect(0, 0, W, H);
      }
      const cs = S.cellSize;
      const base = new Path2D();
      const glow = [];
      for (let b = 0; b < BUCKETS; b++) glow.push(new Path2D());
      const [gr, gg, gb] = parseColor(S.glowColor);

      if (S.mode === 'dots') {
        const numH = Math.ceil(H / cs), offY = (H - numH * cs) / 2;
        const numV = Math.ceil(W / cs), offX = (W - numV * cs) / 2;
        const rad = S.dotRadius;
        for (let iy = 0; iy <= numH; iy++) {
          const baseY = offY + iy * cs;
          for (let ix = 0; ix <= numV; ix++) {
            const cx = offX + ix * cs;
            const d = this._sample(cx, baseY) * WAVE_HEIGHT;
            const cy = baseY + d;
            base.moveTo(cx + rad, cy);
            base.arc(cx, cy, rad, 0, TAU);
            const k = Math.min(1, Math.abs(d) / GLOW_FULL);
            if (k < 0.06) continue;
            const bi = Math.min(BUCKETS - 1, Math.floor(k * BUCKETS));
            const lit = rad * (1 + k * 0.6);
            glow[bi].moveTo(cx + lit, cy);
            glow[bi].arc(cx, cy, lit, 0, TAU);
          }
        }
        ctx.fillStyle = S.lineColor;
        ctx.fill(base);
        for (let i = 0; i < BUCKETS; i++) {
          const t = (i + 1) / BUCKETS;
          ctx.fillStyle = t >= 1 ? `rgb(${gr},${gg},${gb})` : `rgba(${gr},${gg},${gb},${t.toFixed(2)})`;
          ctx.fill(glow[i]);
        }
        return;
      }

      this._fitScratch(Math.floor(Math.max(W, H) / STEP) + 2);
      const px = this._px, py = this._py, pk = this._pk;
      const emit = (n) => {
        base.moveTo(px[0], py[0]);
        for (let i = 1; i < n; i++) base.lineTo(px[i], py[i]);
        for (let i = 1; i < n; i++) {
          const k = pk[i] > pk[i - 1] ? pk[i] : pk[i - 1];
          if (k < 0.06) continue;
          const b = Math.min(BUCKETS - 1, Math.floor(k * BUCKETS));
          glow[b].moveTo(px[i - 1], py[i - 1]);
          glow[b].lineTo(px[i], py[i]);
        }
      };

      const numH = Math.ceil(H / cs), offY = (H - numH * cs) / 2;
      for (let li = 0; li <= numH; li++) {
        const baseY = offY + li * cs;
        let n = 0;
        for (let x = 0; x <= W; x += STEP) {
          const cx = x > W ? W : x;
          const d = this._sample(cx, baseY) * WAVE_HEIGHT;
          px[n] = cx; py[n] = baseY + d; pk[n] = Math.min(1, Math.abs(d) / GLOW_FULL); n++;
        }
        emit(n);
      }
      const numV = Math.ceil(W / cs), offX = (W - numV * cs) / 2;
      for (let li = 0; li <= numV; li++) {
        const baseX = offX + li * cs;
        let n = 0;
        for (let y = 0; y <= H; y += STEP) {
          const cy = y > H ? H : y;
          const d = this._sample(baseX, cy) * WAVE_HEIGHT;
          px[n] = baseX + d; py[n] = cy; pk[n] = Math.min(1, Math.abs(d) / GLOW_FULL); n++;
        }
        emit(n);
      }
      ctx.lineWidth = S.lineWidth;
      ctx.strokeStyle = S.lineColor;
      ctx.stroke(base);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      for (let i = 0; i < BUCKETS; i++) {
        const t = (i + 1) / BUCKETS;
        ctx.strokeStyle = t >= 1 ? `rgb(${gr},${gg},${gb})` : `rgba(${gr},${gg},${gb},${t.toFixed(2)})`;
        ctx.lineWidth = S.lineWidth * (1 + t * 0.9);
        ctx.stroke(glow[i]);
      }
      ctx.lineCap = 'butt'; ctx.lineJoin = 'miter';
    }
  }

  if (!customElements.get('liquid-grid')) customElements.define('liquid-grid', LiquidGrid);
})();
