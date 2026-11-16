<script setup lang="ts">
defineProps<{
  title: string;
  value: string;
  icon: string;
  color: string;
  subIcon: string;
  subColor: string;
  subText: string;
}>();
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon :name="icon" :color="color" size="md" />
      <div class="text-caption">{{ title }}</div>
      <div class="text-h6">{{ value }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-icon :name="subIcon" :color="subColor" size="xs" />
      {{ subText }}
    </q-card-section>
  </q-card>
</template>
