<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

defineOptions({ name: 'PagesCoreAppBar' })

const route = useRoute()

const items = [
  { icon: 'mdi-view-dashboard', text: 'Dashboard', to: '/' },
  { icon: 'mdi-currency-usd', text: 'Pricing', to: '/pages/pricing' },
  { icon: 'mdi-account-multiple-plus', text: 'Register', to: '/pages/register' },
  { icon: 'mdi-fingerprint', text: 'Login', to: '/pages/login' },
  { icon: 'mdi-lock-open-outline', text: 'Lock', to: '/pages/lock' },
]

const titles: Record<string, string> = {
  '/pages/lock': 'Lock Page',
  '/pages/login': 'Login Page',
  '/pages/pricing': 'Pricing Page',
  '/pages/register': 'Register Page',
}

const title = computed(() => titles[route.path])
</script>

<template>
  <v-app-bar
    absolute
    color="transparent"
    flat
    height="85"
  >
    <v-container>
      <v-row class="align-center">
        <v-toolbar-title class="font-weight-light">{{ title }}</v-toolbar-title>

        <v-spacer />

        <v-btn
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="d-none d-md-block"
          min-height="48"
          variant="text"
        >
          <v-icon
            start
            size="20"
            :icon="item.icon"
          />
          <span v-text="item.text" />
        </v-btn>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
