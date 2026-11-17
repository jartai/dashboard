<script setup lang="ts">
import { ref } from 'vue';

const pageOne = ref(1);
const pageTwo = ref(2);

const colors = [
  {
    label: 'default',
    color: 'grey-7',
  },
  {
    label: 'secondary',
    color: 'secondary',
  },
  {
    label: 'info',
    color: 'info',
  },
  {
    label: 'success',
    color: 'positive',
  },
  {
    label: 'warning',
    color: 'warning',
  },
  {
    label: 'error',
    color: 'negative',
  },
];
</script>

<template>
  <div>
    <div class="text-h6 q-mb-sm">Pick your Color</div>
    <q-btn
      v-for="color in colors"
      :key="color.label"
      class="q-ma-xs"
      :color="color.color"
      :label="color.label"
    />

    <div class="text-h6 q-mt-lg q-mb-sm">Pick your Size</div>
    <q-btn class="q-ma-xs" color="secondary" size="sm" label="small" />
    <q-btn class="q-ma-xs" color="secondary" label="regular" />
    <q-btn class="q-ma-xs" color="secondary" size="lg" label="large" />

    <div class="text-h6 q-mt-lg q-mb-sm">Pagination</div>
    <q-pagination v-model="pageOne" :max="5" direction-links />
    <q-pagination
      v-model="pageTwo"
      class="q-mt-md"
      :max="3"
      direction-links
      icon-prev="mdi-menu-left"
      icon-next="mdi-menu-right"
    />
  </div>
</template>
