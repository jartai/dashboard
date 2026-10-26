<script setup lang="ts">
import { useRoute } from 'vue-router'

import CoreFooter from '@/components/core/Footer.vue'

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
    <router-view />

    <CoreFooter />
  </v-container>
</template>
