<template>
  <v-snackbar
    v-bind="$attrs"
    class="v-snackbar--material"
    :model-value="modelValue"
    color="transparent"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <MaterialAlert
      :color="color"
      :dismissible="dismissible"
      :type="type"
      class="ma-0"
    >
      <slot />
    </MaterialAlert>
  </v-snackbar>
</template>

<script setup lang="ts">
import MaterialAlert from './MaterialAlert.vue'
import type { AlertType } from './types'

defineOptions({ name: 'MaterialSnackbar', inheritAttrs: false })

withDefaults(
  defineProps<{
    color?: string
    dismissible?: boolean
    modelValue?: boolean
    type?: AlertType
  }>(),
  {
    dismissible: true,
    modelValue: false,
  },
)

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<style lang="sass">
.v-snackbar--material
  margin-top: 32px
  margin-bottom: 32px

  .v-alert--material,
  .v-snackbar__wrapper
    border-radius: 4px

  .v-snackbar__content
    overflow: visible
    padding: 0
</style>
