<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <v-container>
    <v-alert type="info" variant="tonal">
      Placeholder — <strong>{{ route.name }}</strong> ({{ route.path }})
    </v-alert>
    <router-view />
  </v-container>
</template>
