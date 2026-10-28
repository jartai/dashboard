<script setup lang="ts">
// Map geometry: @svg-maps/world — https://github.com/VictorCazanave/svg-maps — CC-BY-4.0.
import { computed } from 'vue'
import world from '@svg-maps/world'

defineOptions({ name: 'WorldMap' })

const props = withDefaults(
  defineProps<{
    countryData?: Record<string, number>
    highColor?: string
    lowColor?: string
    strokeColor?: string
  }>(),
  {
    countryData: () => ({}),
    highColor: '#838383',
    lowColor: '#bbbbbb',
    strokeColor: '#ffffff',
  },
)

const peak = computed(() => {
  const values = Object.values(props.countryData)

  return values.length ? Math.max(...values) : 0
})

function toRgb(hex: string) {
  const value = hex.replace('#', '')
  const full =
    value.length === 3
      ? value
          .split('')
          .map((c) => c + c)
          .join('')
      : value
  const int = Number.parseInt(full, 16)

  return { b: int & 255, g: (int >> 8) & 255, r: (int >> 16) & 255 }
}

function fillFor(id: string) {
  const value = props.countryData[id]

  if (!value || !peak.value) return props.lowColor

  const low = toRgb(props.lowColor)
  const high = toRgb(props.highColor)
  const ratio = Math.min(value / peak.value, 1)
  const mix = (from: number, to: number) => Math.round(from + (to - from) * ratio)

  return `rgb(${mix(low.r, high.r)}, ${mix(low.g, high.g)}, ${mix(low.b, high.b)})`
}
</script>

<template>
  <svg
    class="world-map"
    role="img"
    :aria-label="world.label"
    :viewBox="world.viewBox"
  >
    <path
      v-for="location in world.locations"
      :key="location.id"
      :d="location.path"
      :fill="fillFor(location.id)"
      :stroke="strokeColor"
      stroke-width="0.5"
    >
      <title>{{ location.name }}</title>
    </path>
  </svg>
</template>

<style lang="scss">
.world-map {
  display: block;
  width: 100%;
  height: auto;
}
</style>
