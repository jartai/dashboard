<script setup lang="ts">
defineProps<{
  title: string;
  text: string;
  image: string;
  price: string;
  place: string;
}>();
</script>

<template>
  <q-card>
    <q-img :src="image" :alt="title" ratio="16/9" />

    <q-card-section class="text-center">
      <div class="text-h6">{{ title }}</div>
      <div>{{ text }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <div class="text-h6">{{ price }}</div>
      <q-space />
      <q-icon name="mdi-map-marker" size="xs" />
      <span>{{ place }}</span>
    </q-card-actions>

    <q-card-actions align="center">
      <q-btn flat round dense icon="mdi-view-split-vertical">
        <q-tooltip>View</q-tooltip>
      </q-btn>

      <q-btn flat round dense icon="mdi-pencil" color="positive">
        <q-tooltip>Edit</q-tooltip>
      </q-btn>

      <q-btn flat round dense icon="mdi-close" color="negative">
        <q-tooltip>Remove</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
