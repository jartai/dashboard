<script setup lang="ts">
import { ref } from 'vue';
import BannerCard from '@/components/notifications/BannerCard.vue';
import type { Note } from '@/components/notifications/BannerCard.vue';

const notes = ref<Note[]>([
  {
    id: 'info',
    color: 'info',
    text: 'INFO — This is a regular alert made with the color of "info"',
    dismiss: true,
  },
  {
    id: 'success',
    color: 'positive',
    text: 'SUCCESS — This is a regular alert made with the color of "success"',
    dismiss: true,
  },
  {
    id: 'warning',
    color: 'warning',
    text: 'WARNING — This is a regular alert made with the color of "warning"',
    dismiss: true,
  },
  {
    id: 'error',
    color: 'negative',
    text: 'ERROR — This is a regular alert made with the color of "error"',
    dismiss: true,
  },
  {
    id: 'secondary',
    color: 'secondary',
    text: 'PRIMARY — This is a regular alert made with the color "secondary"',
    dismiss: true,
  },
  {
    id: 'pink',
    color: 'pink',
    text: 'PINK DARKEN-1 — This is a regular alert made with the color "pink darken-1"',
    dismiss: true,
  },
]);

function dismiss(id: string) {
  const index = notes.value.findIndex((note) => note.id === id);
  if (index !== -1) {
    notes.value.splice(index, 1);
  }
}
</script>

<template>
  <BannerCard title="Notification states" :notes="notes" @dismiss="dismiss" />
</template>
