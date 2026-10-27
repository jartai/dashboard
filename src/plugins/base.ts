import type { App, Component } from 'vue'

const modules = import.meta.glob('../components/base/*.vue', {
  eager: true,
}) as Record<string, { default: Component }>

export function toGlobalName(path: string): string {
  const file = path.slice(path.lastIndexOf('/') + 1).replace(/\.vue$/, '')
  const pascal = file
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return `Base${pascal}`
}

export default {
  install(app: App) {
    for (const [path, mod] of Object.entries(modules)) {
      app.component(toGlobalName(path), mod.default)
    }
  },
}
