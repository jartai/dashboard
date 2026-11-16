<script setup lang="ts">
import { ref } from 'vue';
import BannerCard from '@/components/notifications/BannerCard.vue';
import type { Note } from '@/components/notifications/BannerCard.vue';

const notes = ref<Note[]>([
  {
    id: 'plain',
    color: 'info',
    text: 'This is a plain notification.',
  },
  {
    id: 'close',
    color: 'info',
    text: 'This is a notification with close button.',
    dismiss: true,
  },
  {
    id: 'icon',
    color: 'info',
    text: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
    icon: true,
    dismiss: true,
  },
  {
    id: 'primary',
    color: 'primary',
    text: "You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
    icon: true,
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
  <BannerCard title="Notification Style" :notes="notes" @dismiss="dismiss" />
</template>
