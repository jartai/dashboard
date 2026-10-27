import type { Component } from 'vue'

declare module 'vue' {
  export interface GlobalComponents {
    BaseItem: (typeof import('../components/base/Item.vue'))['default']
    BaseItemGroup: (typeof import('../components/base/ItemGroup.vue'))['default']
    BaseItemSubGroup: (typeof import('../components/base/ItemSubGroup.vue'))['default']
    BaseMaterialAlert: (typeof import('../components/base/MaterialAlert.vue'))['default']
    BaseMaterialCard: (typeof import('../components/base/MaterialCard.vue'))['default']
    BaseMaterialChartCard: (typeof import('../components/base/MaterialChartCard.vue'))['default']
    BaseMaterialDropdown: (typeof import('../components/base/MaterialDropdown.vue'))['default']
    BaseMaterialSnackbar: (typeof import('../components/base/MaterialSnackbar.vue'))['default']
    BaseMaterialStatsCard: (typeof import('../components/base/MaterialStatsCard.vue'))['default']
    BaseMaterialTabs: (typeof import('../components/base/MaterialTabs.vue'))['default']
    BaseMaterialTestimony: (typeof import('../components/base/MaterialTestimony.vue'))['default']
    BaseMaterialWizard: (typeof import('../components/base/MaterialWizard.vue'))['default']
    BaseSubheading: (typeof import('../components/base/Subheading.vue'))['default']
    BaseVComponent: (typeof import('../components/base/VComponent.vue'))['default']
    chartist: Component
  }
}
