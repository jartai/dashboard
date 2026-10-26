<script setup lang="ts">
import CoreFooter from './Footer.vue'

defineOptions({ name: 'DashboardCoreView' })
</script>

<template>
  <v-main>
    <router-view />

    <CoreFooter />
  </v-main>
</template>
