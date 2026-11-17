<script setup lang="ts">
import { ref } from 'vue';

const edges = ref('left');
const count = ref('1');
const more = ref('5');

const labeled = [
  {
    label: 'left',
    icon: 'mdi-chevron-left',
  },
  {
    label: 'right',
    icon: 'mdi-chevron-right',
  },
  {
    label: 'info',
    icon: 'mdi-exclamation',
    color: 'info',
  },
  {
    label: 'success',
    icon: 'mdi-check',
    color: 'positive',
  },
  {
    label: 'warning',
    icon: 'mdi-alert',
    color: 'warning',
  },
  {
    label: 'error',
    icon: 'mdi-close',
    color: 'negative',
  },
];

const edgeOptions = [
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'middle',
    value: 'middle',
  },
  {
    label: 'right',
    value: 'right',
  },
];

const countOptions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
];

const moreOptions = [
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
];
</script>

<template>
  <div>
    <div class="text-h6 q-mb-sm">Buttons with Label</div>
    <q-btn
      v-for="button in labeled"
      :key="button.label"
      class="q-ma-xs"
      :color="button.color"
      :icon="button.icon"
      :label="button.label"
    />

    <div class="text-h6 q-mt-lg q-mb-sm">Pick your Style</div>
    <q-btn class="q-ma-xs" color="secondary" label="Default" />
    <q-btn class="q-ma-xs" color="secondary" rounded label="Rounded" />
    <q-btn class="q-ma-xs" color="secondary" rounded icon="mdi-heart" label="With Icon" />
    <q-btn class="q-ma-xs" color="secondary" round icon="mdi-heart" />
    <q-btn class="q-ma-xs" color="secondary" flat label="Simple" />

    <div class="text-h6 q-mt-lg q-mb-sm">Button Group</div>
    <q-btn-toggle v-model="edges" toggle-color="teal" :options="edgeOptions" />
    <q-btn-toggle
      v-model="count"
      class="q-mt-md"
      rounded
      toggle-color="teal"
      :options="countOptions"
    />
    <q-btn-toggle
      v-model="more"
      class="q-mt-sm"
      rounded
      toggle-color="teal"
      :options="moreOptions"
    />
  </div>
</template>
