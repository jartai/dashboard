<template>
  <div ref="el" />
</template>

<script setup lang="ts">
  import jsVectorMap from 'jsvectormap'
  import { onBeforeUnmount, onMounted, ref } from 'vue'
  import 'jsvectormap/dist/jsvectormap.css'
  import 'jsvectormap/dist/maps/world.js'

  const props = defineProps<{
    countryData: Record<string, number>
  }>()

  const el = ref<HTMLElement>()

  let map: { destroy: () => void } | undefined

  onMounted(() => {
    if (!el.value) return

    map = new jsVectorMap({
      selector: el.value,
      map: 'world',
      backgroundColor: 'transparent',
      regionStyle: {
        initial: { fill: '#BBBBBB' },
      },
      visualizeData: {
        scale: ['#BBBBBB', '#838383'],
        values: props.countryData,
      },
    })
  })

  onBeforeUnmount(() => map?.destroy())
</script>
