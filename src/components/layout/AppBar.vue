<template>
  <v-app-bar
    color="primary"
    flat
  >
    <v-app-bar-nav-icon @click="app.toggleDrawer()" />

    <v-app-bar-title>{{ route.name }}</v-app-bar-title>

    <v-spacer />

    <v-text-field
      class="mx-4"
      density="compact"
      hide-details
      label="Search"
      prepend-inner-icon="mdi-magnify"
      variant="solo"
    />

    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-bell"
        />
      </template>

      <v-list>
        <v-list-item
          v-for="(n, i) in notifications"
          :key="i"
          :title="n"
        />
      </v-list>
    </v-menu>

    <v-menu>
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-account"
        />
      </template>

      <v-list>
        <v-list-item
          title="Profile"
          to="/profile"
        />

        <v-list-item
          title="Settings"
          to="/"
        />

        <v-divider />

        <v-list-item
          title="Log out"
          to="/auth/login"
        />
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup lang="ts">
  // Composables
  import { useRoute } from 'vue-router'

  // Utilities
  import { useAppStore } from '@/stores/app'

  const route = useRoute()
  const app = useAppStore()

  const notifications = [
    'Mike John responded to your email',
    'You have 5 new tasks',
    'You are now friends with Andrew',
    'Another notification',
    'Another one',
  ]
</script>
