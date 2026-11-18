<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const subscribed = ref(false);
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-email" color="positive" size="sm" />
      <span class="text-h6">Stacked Form</span>

      <q-input v-model="email" class="q-mt-md" label="Email Address" />
      <q-input v-model="password" type="password" label="Password" />
      <q-checkbox v-model="subscribed" label="Subscribe to newsletter" />
    </q-card-section>

    <q-card-actions>
      <q-btn color="positive" label="Submit" />
    </q-card-actions>
  </q-card>
</template>
