<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'PagesBtn', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    color?: string
    depressed?: boolean
    rounded?: boolean
    variant?: 'elevated' | 'flat' | 'text' | 'outlined' | 'plain' | 'tonal'
  }>(),
  {
    color: 'success',
    depressed: false,
    rounded: true,
  },
)

const resolvedVariant = computed(() => props.variant ?? (props.depressed ? 'flat' : 'elevated'))
</script>

<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :rounded="rounded ? 'pill' : undefined"
    :variant="resolvedVariant"
  >
    <slot />
  </v-btn>
</template>
