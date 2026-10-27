<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

import clintMckoy from '@/assets/clint-mckoy.jpg'
import lock from '@/assets/lock.jpg'
import login from '@/assets/login.jpg'
import pricing from '@/assets/pricing.jpg'
import register from '@/assets/register.jpg'

defineOptions({ name: 'PagesCoreView' })

const route = useRoute()
const theme = useTheme()

const srcs: Record<string, string> = {
  '/pages/lock': lock,
  '/pages/login': login,
  '/pages/pricing': pricing,
  '/pages/register': register,
}

const src = computed(() => srcs[route.path] ?? clintMckoy)
</script>

<template>
  <v-main
    id="pages"
    :class="theme.global.current.value.dark ? undefined : 'grey-lighten-3'"
  >
    <v-img
      class="page-bg"
      :src="src"
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
}

#pages .page-content {
  position: relative;
  padding: 64px 0 88px;
}

#pages .page-bg {
  position: absolute;
  inset: 0;

  .v-responsive,
  .v-responsive__content {
    height: 100%;
  }
}
</style>
