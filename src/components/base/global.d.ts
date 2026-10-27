import type { Component } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    BaseMaterialAlert: (typeof import('./MaterialAlert.vue'))['default']
    BaseMaterialCard: (typeof import('./MaterialCard.vue'))['default']
    BaseMaterialChartCard: (typeof import('./MaterialChartCard.vue'))['default']
    BaseMaterialDropdown: (typeof import('./MaterialDropdown.vue'))['default']
    BaseMaterialSnackbar: (typeof import('./MaterialSnackbar.vue'))['default']
    BaseMaterialStatsCard: (typeof import('./MaterialStatsCard.vue'))['default']
    BaseMaterialTabs: (typeof import('./MaterialTabs.vue'))['default']
    BaseMaterialTestimony: (typeof import('./MaterialTestimony.vue'))['default']
    BaseMaterialWizard: (typeof import('./MaterialWizard.vue'))['default']
    BaseSubheading: (typeof import('./Subheading.vue'))['default']
    BaseVComponent: (typeof import('./VComponent.vue'))['default']
    chartist: Component
  }
}
