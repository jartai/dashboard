<script setup lang="ts">
defineProps<{
  title: string;
  updated: string;
}>();
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ title }}</div>

      <div>
        <slot />
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-icon name="mdi-clock-outline" size="xs" />
      <span class="text-caption">{{ updated }}</span>
      <q-space />

      <q-btn flat round dense icon="mdi-refresh" color="info">
        <q-tooltip>Refresh</q-tooltip>
      </q-btn>

      <q-btn flat round dense icon="mdi-pencil">
        <q-tooltip>Change Date</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
