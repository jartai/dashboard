<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify'

defineOptions({ name: 'PagesCoreView' })

const route = useRoute()
const theme = useTheme()

// The local `src/assets/*.jpg` files are webpack module stubs, not images, and the
// creative-tim demo host is unreachable. Interim source until the assets are
// re-exported at P11.1.
const seed = computed(() => route.path.replace(/^\//, '').replace(/\//g, '-'))

const src = computed(() => `https://picsum.photos/seed/md-pro-${seed.value}/1600/1200`)
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
  padding: 64px 0 88px;
}
</style>
