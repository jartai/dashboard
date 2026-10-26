<script setup lang="ts">
import CoreDrawer from '@/components/core/Drawer.vue'
import CoreAppBar from '@/components/core/AppBar.vue'
import CoreView from '@/components/core/View.vue'
import CoreSettings from '@/components/core/Settings.vue'

defineOptions({ name: 'DashboardLayout' })
</script>

<template>
  <v-layout>
    <CoreDrawer />
    <CoreAppBar />
    <CoreView />
    <CoreSettings />
  </v-layout>
</template>
