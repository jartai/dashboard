<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import CoreAppBar from '@/components/auth/AppBar.vue'
import CoreFooter from '@/components/auth/Footer.vue'
import CoreView from '@/components/auth/View.vue'

defineOptions({ name: 'AuthLayout' })

const theme = useTheme()
const previousTheme = theme.global.name.value

// The original forced dark on the auth pages and reset on leave.
onMounted(() => {
  theme.change('dark')
})

onBeforeUnmount(() => {
  theme.change(previousTheme)
})
</script>

<template>
  <v-layout class="flex-column">
    <CoreAppBar />

    <CoreView>
      <slot>
        <router-view />
      </slot>
    </CoreView>

    <CoreFooter />
  </v-layout>
</template>
