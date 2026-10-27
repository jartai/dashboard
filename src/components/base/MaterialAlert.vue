<script setup lang="ts">
import type { AlertType } from '@/types/alert'

defineOptions({ name: 'MaterialAlert', inheritAttrs: false })

const ICONS: Record<AlertType, string> = {
  success: 'mdi-check-circle',
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
}

withDefaults(
  defineProps<{
    dismissible?: boolean
    type?: AlertType
  }>(),
  {
    dismissible: false,
  },
)
</script>

<template>
  <v-alert
    v-bind="$attrs"
    class="v-alert--material"
    :type="type"
    :closable="dismissible"
  >
    <template
      v-if="type"
      #prepend
    >
      <v-icon :color="type">{{ ICONS[type] }}</v-icon>
    </template>

    <slot />
  </v-alert>
</template>

<style lang="sass">
.v-alert--material
  margin-top: 32px

  .v-alert__prepend
    position: relative
    top: -36px
    background-color: #FFFFFF
    border-radius: 4px
    height: 44px
    min-width: 44px

  .v-alert__close
    align-self: flex-start
    margin: 0 !important
    padding: 0 !important
</style>
