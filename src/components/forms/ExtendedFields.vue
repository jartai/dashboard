<script setup lang="ts">
import { ref } from 'vue';

const toggleOn = ref(true);
const toggleOff = ref(false);

const tags = ref(['Amsterdam', 'Washington', 'Sydney', 'Beijing']);

const files = ref<File[] | null>(null);
</script>

<template>
  <div>
    <div class="text-h6">Switches</div>
    <q-toggle v-model="toggleOn" label="Toggle is on" />
    <q-toggle v-model="toggleOff" label="Toggle is off" />

    <div class="text-h6 q-mt-lg">Tags</div>
    <q-select
      v-model="tags"
      multiple
      use-chips
      use-input
      hide-dropdown-icon
      new-value-mode="add-unique"
      color="secondary"
    />

    <div class="text-h6 q-mt-lg">Progress Bar</div>
    <q-linear-progress :value="0.3" color="secondary" class="q-mt-md" />
    <q-linear-progress :value="0.6" color="info" class="q-mt-lg" />
    <q-linear-progress :value="0.4" color="warning" stripe class="q-mt-lg" />

    <div class="text-h6 q-mt-lg">File Input</div>
    <q-file
      v-model="files"
      multiple
      outlined
      use-chips
      counter
      color="deep-purple"
      label="File input"
      class="q-mt-md"
    >
      <template #prepend>
        <q-icon name="mdi-paperclip" />
      </template>
    </q-file>
  </div>
</template>
