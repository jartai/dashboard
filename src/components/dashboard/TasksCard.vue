<script setup lang="ts">
import { ref } from 'vue';

interface Task {
  text: string;
  value: boolean;
}

const tab = ref<'bugs' | 'website' | 'server'>('bugs');

const tasks = ref<Record<'bugs' | 'website' | 'server', Task[]>>({
  bugs: [
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: true,
    },
    {
      text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      value: false,
    },
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: false,
    },
    {
      text: 'Create 4 Invisible User Experiences you Never Knew About',
      value: true,
    },
  ],
  website: [
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: true,
    },
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: false,
    },
  ],
  server: [
    {
      text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      value: false,
    },
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: true,
    },
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: true,
    },
  ],
});
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-subtitle1">Tasks:</div>

      <q-tabs v-model="tab" align="left" dense>
        <q-tab name="bugs" icon="bug_report" label="Bugs" />
        <q-tab name="website" icon="code" label="Website" />
        <q-tab name="server" icon="cloud" label="Server" />
      </q-tabs>
    </q-card-section>

    <q-separator />

    <q-list>
      <q-item v-for="task in tasks[tab]" :key="task.text">
        <q-item-section side>
          <q-checkbox v-model="task.value" />
        </q-item-section>

        <q-item-section>{{ task.text }}</q-item-section>

        <q-item-section side>
          <q-btn flat round dense icon="edit" />
          <q-btn flat round dense icon="close" color="negative" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-card>
</template>
