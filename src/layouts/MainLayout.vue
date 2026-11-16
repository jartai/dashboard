<script setup lang="ts">
import { ref } from 'vue';

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
        <q-item to="/" exact clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>

          <q-item-section>Dashboard</q-item-section>
        </q-item>

        <q-item to="/pages/user" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>

          <q-item-section>User Profile</q-item-section>
        </q-item>

        <q-item to="/tables/regular-tables" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="table_chart" />
          </q-item-section>

          <q-item-section>Regular Tables</q-item-section>
        </q-item>

        <q-item to="/components/typography" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="text_fields" />
          </q-item-section>

          <q-item-section>Typography</q-item-section>
        </q-item>

        <q-item to="/components/icons" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="sentiment_satisfied" />
          </q-item-section>

          <q-item-section>Icons</q-item-section>
        </q-item>

        <q-item to="/maps/google-maps" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="map" />
          </q-item-section>

          <q-item-section>Google Maps</q-item-section>
        </q-item>

        <q-item to="/components/notifications" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="notifications" />
          </q-item-section>

          <q-item-section>Notifications</q-item-section>
        </q-item>

        <q-item to="/upgrade" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="upgrade" />
          </q-item-section>

          <q-item-section>Upgrade</q-item-section>
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
