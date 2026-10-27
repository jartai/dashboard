<script setup lang="ts">
defineOptions({ name: 'PagesBtn', inheritAttrs: false })

withDefaults(
  defineProps<{
    color?: string
    depressed?: boolean
    rounded?: boolean
  }>(),
  {
    color: 'success',
    depressed: false,
    rounded: true,
  },
)
</script>

<template>
  <v-btn
    v-bind="$attrs"
    :color="color"
    :rounded="rounded ? 'pill' : undefined"
    :variant="depressed ? 'flat' : 'elevated'"
  >
    <slot />
  </v-btn>
</template>
