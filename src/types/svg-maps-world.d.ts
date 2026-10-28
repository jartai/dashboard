declare module '@svg-maps/world' {
  interface SvgMapLocation {
    id: string
    name: string
    path: string
  }

  interface SvgMap {
    label: string
    locations: SvgMapLocation[]
    viewBox: string
  }

  const world: SvgMap
  export default world
}
