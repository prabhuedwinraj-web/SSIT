// Parse an inline CSS string into a React style object (camelCased keys).
export function st(cssText) {
  const out = {}
  String(cssText).split(';').forEach((decl) => {
    const i = decl.indexOf(':')
    if (i === -1) return
    const prop = decl.slice(0, i).trim()
    const val = decl.slice(i + 1).trim()
    if (!prop) return
    out[prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val
  })
  return out
}

export const LOGO = '/assets/sechpoint-logo.svg'
