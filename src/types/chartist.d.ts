declare module 'chartist' {
  interface InterpolationFactory {
    cardinal: (options?: Record<string, unknown>) => unknown
    monone: (options?: Record<string, unknown>) => unknown
    simple: (options?: Record<string, unknown>) => unknown
    step: (options?: Record<string, unknown>) => unknown
  }

  const Chartist: {
    Interpolation: InterpolationFactory
  }

  export default Chartist
}
