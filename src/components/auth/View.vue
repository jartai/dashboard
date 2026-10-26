<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay, useTheme } from 'vuetify'

import clintMckoy from '@/assets/clint-mckoy.jpg'
import lock from '@/assets/lock.jpg'
import login from '@/assets/login.jpg'
import pricing from '@/assets/pricing.jpg'
import register from '@/assets/register.jpg'

defineOptions({ name: 'PagesCoreView' })

const route = useRoute()
const theme = useTheme()
const { smAndDown, mdAndDown } = useDisplay()

const srcs: Record<string, string> = {
  '/pages/lock': lock,
  '/pages/login': login,
  '/pages/pricing': pricing,
  '/pages/register': register,
}

const src = computed(() => srcs[route.path] ?? clintMckoy)

const imageClass = computed(() => ({
  'v-image--sm': smAndDown.value,
  'v-image--md': mdAndDown.value,
}))
</script>

<template>
  <v-main
    id="pages"
    :class="theme.global.current.value.dark ? undefined : 'grey-lighten-3'"
  >
    <v-img
      :class="imageClass"
      :src="src"
      gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)"
      min-height="100%"
    >
      <router-view />
    </v-img>
  </v-main>
</template>

<style>
#pages > .v-main__wrap > .v-image {
  padding-top: 64px;
  padding-bottom: 88px;
}

#pages .v-responsive__sizer {
  display: none;
}

#pages .v-image--md {
  padding: 188px 0;
}

#pages .v-image--sm {
  padding: 96px 0 188px;
}
</style>
