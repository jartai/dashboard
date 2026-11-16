<script setup lang="ts">
import { ref } from 'vue';

const links = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
    to: '/',
    exact: true,
  },
  {
    label: 'User Profile',
    icon: 'person',
    to: '/pages/user',
  },
  {
    label: 'Regular Tables',
    icon: 'table_chart',
    to: '/tables/regular-tables',
  },
  {
    label: 'Typography',
    icon: 'text_fields',
    to: '/components/typography',
  },
  {
    label: 'Icons',
    icon: 'sentiment_satisfied',
    to: '/components/icons',
  },
  {
    label: 'Google Maps',
    icon: 'map',
    to: '/maps/google-maps',
  },
  {
    label: 'Notifications',
    icon: 'notifications',
    to: '/components/notifications',
  },
  {
    label: 'Upgrade',
    icon: 'upgrade',
    to: '/upgrade',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>Dashboard</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          :exact="link.exact"
          clickable
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>{{ link.label }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered>
      <q-toolbar>
        <q-toolbar-title>Dashboard</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
