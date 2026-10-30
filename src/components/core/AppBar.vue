<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useUiStore } from '@/stores/ui'
import AppBarItem from './AppBarItem.vue'

defineOptions({ name: 'DashboardCoreAppBar' })

const route = useRoute()
const ui = useUiStore()
const { smAndDown, mdAndUp } = useDisplay()

const notifications = [
  'Mike John Responded to your email',
  'You have 5 new tasks',
  "You're now friends with Andrew",
  'Another Notification',
  'Another one',
]

const profile = [
  { title: 'Profile', to: '/pages/user' },
  { title: 'Settings', to: '/pages/user' },
  { divider: true },
  { title: 'Log out', to: '/' },
]

function toggle() {
  if (smAndDown.value) {
    ui.setDrawer(!ui.drawer)
  } else {
    ui.expandOnHover = !ui.expandOnHover
  }
}
</script>

<template>
  <v-app-bar
    absolute
    color="transparent"
    flat
    height="75"
    style="width: auto"
  >
    <v-btn
      icon
      size="small"
      @click="toggle"
    >
      <v-icon v-if="ui.expandOnHover">mdi-view-quilt</v-icon>
      <v-icon v-else>mdi-dots-vertical</v-icon>
    </v-btn>

    <v-toolbar-title class="d-none d-md-block">{{ route.name }}</v-toolbar-title>

    <v-spacer />

    <v-text-field
      :label="$t('search')"
      color="secondary"
      hide-details
      class="mb-2"
      style="max-width: 165px"
    >
      <template
        v-if="mdAndUp"
        #append-inner
      >
        <v-btn
          icon
          size="small"
          class="mt-n2"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>

    <div class="mx-3" />

    <v-btn
      min-width="0"
      variant="text"
    >
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-menu
      bottom
      left
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ props }">
        <v-btn
          min-width="0"
          variant="text"
          v-bind="props"
        >
          <v-badge
            color="red"
            overlap
          >
            <template #badge>
              <span class="text-body-small">5</span>
            </template>
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </v-btn>
      </template>

      <v-list nav>
        <AppBarItem
          v-for="(n, i) in notifications"
          :key="`item-${i}`"
          :title="n"
        />
      </v-list>
    </v-menu>

    <v-menu
      bottom
      left
      min-width="200"
      origin="top right"
      transition="scale-transition"
    >
      <template #activator="{ props }">
        <v-btn
          min-width="0"
          variant="text"
          v-bind="props"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list
        flat
        nav
      >
        <template
          v-for="(p, i) in profile"
          :key="`profile-${i}`"
        >
          <v-divider
            v-if="p.divider"
            class="mb-2 mt-2"
          />
          <AppBarItem
            v-else
            :title="p.title"
            :to="p.to"
          />
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
