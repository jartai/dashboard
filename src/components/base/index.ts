import type { App, Component } from 'vue'

const modules = import.meta.glob('./*.vue', { eager: true }) as Record<
  string,
  { default: Component }
>

export function toGlobalName(path: string): string {
  const base = path.replace(/^\.\//, '').replace(/\.vue$/, '')
  const pascal = base
    .split(/[-_/]/)
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
