<script setup lang="ts">
import TableCard from '@/components/regulartables/TableCard.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Simple Tables</h1>

    <TableCard title="Simple Table" icon="content_paste" />

    <TableCard class="q-mt-md" title="Table on Dark Background" icon="note_add" dark />
  </q-page>
</template>
