<script setup lang="ts">
defineOptions({ name: 'VComponent' })

withDefaults(defineProps<{ heading?: string; link?: string }>(), {
  heading: '',
  link: '',
})
</script>

<template>
  <section class="mb-12 text-center">
    <h1
      class="font-weight-light mb-2"
      style="color: #3c4858; font-size: 24px"
      v-text="`Vuetify ${heading}`"
    />

    <span
      class="font-weight-light"
      style="font-size: 16px; color: #3c4858"
    >
      Please checkout the
      <a
        :href="`https://vuetifyjs.com/${link}`"
        rel="noopener"
        target="_blank"
        class="text-secondary"
        style="text-decoration: none"
      >
        full documentation
      </a>
    </span>
  </section>
</template>
