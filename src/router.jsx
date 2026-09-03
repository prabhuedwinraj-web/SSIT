import { useEffect, useState } from 'react'

const currentPath = () => window.location.pathname.replace(/\/+$/, '') || '/'

export function navigate(to) {
  const hashIndex = to.indexOf('#')
  window.history.pushState({}, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  requestAnimationFrame(() => {
    if (hashIndex !== -1) {
      const el = document.getElementById(to.slice(hashIndex + 1))
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return }
    }
    window.scrollTo(0, 0)
  })
}

export function useRoute() {
  const [path, setPath] = useState(currentPath())
  useEffect(() => {
    const on = () => setPath(currentPath())
    window.addEventListener('popstate', on)
    return () => window.removeEventListener('popstate', on)
  }, [])
  return path
}

// Cross-page link using the history API (in-page #anchors use plain <a>).
export function Link({ to, children, ...rest }) {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    navigate(to)
  }
  return <a href={to} onClick={onClick} {...rest}>{children}</a>
}
