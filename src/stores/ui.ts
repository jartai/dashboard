import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  // Sidebar gradient, mirrored from the original Vuex state.
  const barColor = ref('rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)')
  // TODO P11.1: replace with a local asset.
  const barImage = ref(
    'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
  )
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
