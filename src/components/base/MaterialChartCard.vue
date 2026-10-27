<script setup lang="ts">
import MaterialCard from './MaterialCard.vue'

defineOptions({ name: 'MaterialChartCard', inheritAttrs: false })

withDefaults(
  defineProps<{
    data?: Record<string, unknown>
    eventHandlers?: unknown[]
    options?: Record<string, unknown>
    ratio?: string
    responsiveOptions?: unknown[]
    type: 'Bar' | 'Line' | 'Pie'
  }>(),
  {
    data: () => ({}),
    eventHandlers: () => [],
    options: () => ({}),
    responsiveOptions: () => [],
  },
)
</script>

<template>
  <MaterialCard
    v-bind="$attrs"
    class="v-card--material-chart"
  >
    <template #heading>
      <chartist
        :data="data"
        :event-handlers="eventHandlers"
        :options="options"
        :ratio="ratio"
        :responsive-options="responsiveOptions"
        :type="type"
        style="max-height: 150px"
      />
    </template>

    <template #reveal-actions>
      <slot name="reveal-actions" />
    </template>

    <slot />

    <template #actions>
      <slot name="actions" />
    </template>
  </MaterialCard>
</template>

<style lang="sass">
.v-card--material-chart
  p
    color: #999

  .v-card--material__heading
    max-height: 185px

    .ct-label
      color: inherit
      opacity: .7
      font-size: 0.975rem
      font-weight: 100

    .ct-grid
      stroke: rgba(255, 255, 255, 0.2)

    .ct-series-a .ct-point,
    .ct-series-a .ct-line,
    .ct-series-a .ct-bar,
    .ct-series-a .ct-slice-donut
      stroke: rgba(255, 255, 255, .8)

    .ct-series-a .ct-slice-pie,
    .ct-series-a .ct-area
      fill: rgba(255, 255, 255, .4)
</style>
