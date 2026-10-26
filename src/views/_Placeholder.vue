<script setup lang="ts">
import { useRoute } from 'vue-router'
// TEMP until P5.7/P6.4 — the layouts will replace these.
import CoreAppBar from '@/components/core/AppBar.vue'
import CoreFooter from '@/components/core/Footer.vue'
import CoreDrawer from '@/components/core/Drawer.vue'

const route = useRoute()
</script>

<template>
  <v-container>
    <v-alert
      type="info"
      variant="tonal"
    >
      Placeholder — <strong>{{ route.name }}</strong> ({{ route.path }})
    </v-alert>

    <CoreDrawer />

    <CoreAppBar />

    <router-view />

    <CoreFooter />
  </v-container>
</template>
