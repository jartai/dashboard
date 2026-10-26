<script setup lang="ts">
import { useRoute } from 'vue-router'

import CoreView from '@/components/core/View.vue'

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

    <CoreView />
  </v-container>
</template>
