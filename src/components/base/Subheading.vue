<script setup lang="ts">
defineOptions({ name: 'Subheading' })

withDefaults(defineProps<{ subheading?: string; text?: string }>(), {
  subheading: '',
  text: '',
})
</script>

<template>
  <div class="text-display-medium font-weight-light v-col-12 text-start text-primary pa-0 mb-8">
    <h5 class="font-weight-light">
      {{ subheading }}
      <template v-if="text">
        <span
          class="text-body-large"
          v-text="text"
        />
      </template>
    </h5>

    <div class="pt-2">
      <slot />
    </div>
  </div>
</template>
