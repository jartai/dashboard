<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

import lockBg from '@/assets/lock.jpg'
import loginBg from '@/assets/login.jpg'
import pricingBg from '@/assets/pricing.jpg'
import registerBg from '@/assets/register.jpg'

defineOptions({ name: 'PagesCoreView' })

const route = useRoute()
const theme = useTheme()

const backgrounds: Record<string, string> = {
  Lock: lockBg,
  Login: loginBg,
  Pricing: pricingBg,
  Register: registerBg,
}

const src = computed(() => backgrounds[String(route.name)] ?? loginBg)
</script>

<template>
  <v-main
    id="pages"
    :class="theme.global.current.value.dark ? undefined : 'grey-lighten-3'"
  >
    <v-img
      class="page-bg"
      :src="src"
      cover
      alt=""
      aria-hidden="true"
      gradient="to top, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)"
    />

    <div class="page-content">
      <slot>
        <router-view />
      </slot>
    </div>
  </v-main>
</template>

<style lang="scss">
#pages {
  position: relative;
}

#pages .page-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

/* The image and the gradient layer are absolutely positioned by Vuetify with no
   width or height of their own, so both collapse. */
#pages .page-bg .v-img__img,
#pages .page-bg .v-img__gradient {
  width: 100%;
  height: 100%;
}

#pages .page-content {
  position: relative;
}
</style>
