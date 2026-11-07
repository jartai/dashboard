<template>
  <AppBar />
  <Drawer />

  <v-main>
    <v-container fluid>
      <slot />
    </v-container>
  </v-main>

  <Footer />
</template>

<script setup lang="ts">
  // Components
  import AppBar from '@/components/layout/AppBar.vue'
  import Drawer from '@/components/layout/Drawer.vue'
  import Footer from '@/components/layout/Footer.vue'
</script>
