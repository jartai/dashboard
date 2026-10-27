declare module 'chartist' {
  export const Interpolation: {
    cardinal: (options?: Record<string, unknown>) => unknown
    monotone: (options?: Record<string, unknown>) => unknown
    none: (options?: Record<string, unknown>) => unknown
    simple: (options?: Record<string, unknown>) => unknown
    step: (options?: Record<string, unknown>) => unknown
  }
}
