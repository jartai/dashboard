<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'

defineOptions({ name: 'MaterialTabs', inheritAttrs: false })

const props = withDefaults(defineProps<{ modelValue?: number | string | null; color?: string }>(), {
  modelValue: null,
  color: 'primary',
})

const emit = defineEmits<{ 'update:modelValue': [value: number | string | null] }>()

const theme = useTheme()

const internalValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})
</script>

<template>
  <v-tabs
    v-model="internalValue"
    :active-class="`${color} ${theme.global.current.value.dark ? 'text-black' : 'text-white'}`"
    class="v-tabs--pill"
    hide-slider
    v-bind="$attrs"
  >
    <slot />
    <slot name="items" />
  </v-tabs>
</template>

<style lang="scss">
.v-tabs--pill {
  .v-tab,
  .v-tab:before {
    border-radius: 24px;
  }

  &.v-tabs--icons-and-text {
    .v-tab,
    .v-tab:before {
      border-radius: 4px;
    }
  }
}
</style>
