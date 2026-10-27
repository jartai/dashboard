declare module 'vue-chartist' {
  import type { Plugin } from 'vue'

  const vueChartist: Plugin
  export default vueChartist
}

declare module 'vue' {
  export interface GlobalComponents {
    chartist: import('vue').Component
  }
}
