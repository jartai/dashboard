import { ref } from 'vue'
import { defineStore } from 'pinia'

import barImageSrc from '@/assets/sidebar.jpg'

export const useUiStore = defineStore('ui', () => {
  // Sidebar gradient, mirrored from the original Vuex state.
  const barColor = ref('rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)')
  const barImage = ref(barImageSrc)
  const drawer = ref<boolean | null>(null)
  const expandOnHover = ref(false)

  function setBarColor(value: string) {
    barColor.value = value
  }

  function setBarImage(value: string) {
    barImage.value = value
  }

  function setDrawer(value: boolean | null) {
    drawer.value = value
  }

  return {
    barColor,
    barImage,
    drawer,
    expandOnHover,
    setBarColor,
    setBarImage,
    setDrawer,
  }
})
