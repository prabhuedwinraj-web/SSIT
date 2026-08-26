// <wave-arcs> — vanilla web-component port of the Originkit "Wave Arcs" hero canvas.
(function () {
  const TWO_PI = Math.PI * 2;
  const map = (v, a, b, c, d) => ((v - a) / (b - a)) * (d - c) + c;

  function parseRGB(str) {
    if (!str) return { r: 255, g: 255, b: 255 };
    const m = str.match(/rgba?\(([^)]+)\)/i);
    if (m) {
      const [r, g, b] = m[1].split(',').map(n => parseInt(n.trim(), 10));
      return { r, g, b };
    }
    let hex = str.replace(/^#/, '');
    if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    if (hex.length >= 6) return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16)
    };
    return { r: 255, g: 255, b: 255 };
  }

  class WaveArcs extends HTMLElement {
    connectedCallback() {
      if (this._canvas) return;
      this.setAttribute('aria-hidden', 'true');
      this.style.display = 'block';
      this.style.width = '100%';
      this.style.height = '100%';
      this.style.position = this.style.position || 'relative';
      this.style.overflow = 'hidden';
      const c = document.createElement('canvas');
      c.style.cssText = 'width:100%;height:100%;display:block';
      this.appendChild(c);
      this._canvas = c;
      this._ctx = c.getContext('2d', { alpha: false });
      this._frame = 0;
      this._mouse = { y: 0, targetY: 0 };
      this._visible = true;
      this._pageVisible = document.visibilityState === 'visible';
      this._id = 0;

      this._setup();
      this._mouse.y = this._mouse.targetY = this._h / 2;

      this._onResize = () => {
        clearTimeout(this._rt);
        this._rt = setTimeout(() => this._setup(), 100);
      };
      this._onVis = () => {
        this._pageVisible = document.visibilityState === 'visible';
        this._pageVisible && this._visible ? this._start() : this._stop();
      };
      this._onMove = (e) => {
        if (!this._visible || this.getAttribute('interactive') === 'false') return;
        this._mouse.targetY = e.clientY - this._rect.top;
      };
      this._onScroll = () => {
        if (this._sr) return;
        this._sr = requestAnimationFrame(() => { this._rect = this.getBoundingClientRect(); this._sr = 0; });
      };
      this._rect = this.getBoundingClientRect();

      this._io = new IntersectionObserver((es) => {
        this._visible = es[0] ? es[0].isIntersecting : true;
        this._visible && this._pageVisible ? this._start() : this._stop();
      }, { threshold: 0 });
      this._io.observe(this);
      if (window.ResizeObserver) {
        this._ro = new ResizeObserver(() => this._setup());
        this._ro.observe(this);
      }

      window.addEventListener('resize', this._onResize, { passive: true });
      window.addEventListener('scroll', this._onScroll, { passive: true });
      document.addEventListener('visibilitychange', this._onVis);
      document.addEventListener('mousemove', this._onMove, { passive: true });
      this._start();
    }

    disconnectedCallback() {
      this._stop();
      clearTimeout(this._rt);
      if (this._io) this._io.disconnect();
      if (this._ro) this._ro.disconnect();
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('scroll', this._onScroll);
      document.removeEventListener('visibilitychange', this._onVis);
      document.removeEventListener('mousemove', this._onMove);
    }

    _num(name, fallback) {
      const v = parseFloat(this.getAttribute(name));
      return isNaN(v) ? fallback : v;
    }

    _setup() {
      const dpr = window.devicePixelRatio || 1;
      const r = this.getBoundingClientRect();
      if (!r.width || !r.height) return;
      this._w = r.width; this._h = r.height; this._rect = r;
      this._canvas.width = Math.round(r.width * dpr);
      this._canvas.height = Math.round(r.height * dpr);
      this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      this._draw();
    }

    _start() {
      if (this._id || !this._visible || !this._pageVisible) return;
      const loop = () => { this._frame++; this._draw(); this._id = requestAnimationFrame(loop); };
      this._id = requestAnimationFrame(loop);
    }
    _stop() { if (this._id) { cancelAnimationFrame(this._id); this._id = 0; } }

    _draw() {
      const e = this._ctx, r = this._w, i = this._h;
      if (!e || !r || !i) return;
      const bg = this.getAttribute('background-color') || '#00081C';
      const lineColor = this.getAttribute('line-color') || '#018CC6';
      const lineWidth = this._num('line-width', 1.5);
      const glow = this._num('glow', 10);
      const speed = this._num('speed', 6);
      const interactive = this.getAttribute('interactive') !== 'false';
      const lineCount = this._num('line-count', 76);
      const mouse = this._mouse;

      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      e.fillStyle = bg;
      e.fillRect(0, 0, r, i);

      const isMobile = r < 768;
      const u = 55000 / glow;
      const { r: cr, g: cg, b: cb } = parseRGB(lineColor);

      e.save();
      e.lineWidth = lineWidth;
      e.translate(r / 2, i + (isMobile ? 60 : 40));

      const f = interactive ? map(mouse.y, 0, i, 1.2, -1.2) : 0;
      const m = Math.max(320, Math.min(1440, r));
      const rate = map(m, 320, 1440, 0.002, 5e-4) * (speed / 5);
      const p = this._frame * rate;
      const h = r / 2;
      const x = isMobile ? Math.round(lineCount * 0.6) : lineCount;

      for (let k = 0; k < x; k++) {
        let ang = (map(k, 0, x, 0, Math.PI) + p) % Math.PI;
        const l = (Math.tan(ang) - f) * i;
        const a = Math.abs(l) / 2;
        const yCenter = -i / 2 + l / 2;
        const bright = Math.max(0, Math.min(255, map(Math.abs(l), 0, u, -20, 255))) / 255;
        if (bright <= 0) continue;
        e.strokeStyle = 'rgba(' + cr + ',' + cg + ',' + cb + ',' + bright + ')';

        if (a > 499999.5) {
          e.beginPath();
          e.moveTo(-h, -i / 2);
          e.lineTo(h, -i / 2);
          e.stroke();
          continue;
        }

        const c2 = Math.acos(Math.min(1, (h + 50) / a));
        const segTotal = Math.max(Math.ceil(a / 120), 200);
        const spans = [[c2, Math.PI - c2], [Math.PI + c2, TWO_PI - c2]];
        for (const [start, end] of spans) {
          const span = end - start;
          const n3 = Math.max(Math.ceil((span / TWO_PI) * segTotal), 60);
          const step = span / n3;
          e.beginPath();
          for (let s = 0; s <= n3; s++) {
            const aa = start + step * s;
            const xx = Math.cos(aa) * a;
            const yy = yCenter + Math.sin(aa) * a;
            s === 0 ? e.moveTo(xx, yy) : e.lineTo(xx, yy);
          }
          e.stroke();
        }
      }
      e.restore();
    }
  }

  if (!customElements.get('wave-arcs')) customElements.define('wave-arcs', WaveArcs);
})();
