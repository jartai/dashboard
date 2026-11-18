<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-account-box" color="positive" size="sm" />
      <span class="text-h6">Login Form</span>

      <q-input v-model="email" class="q-mt-md" label="Email Address*" color="secondary" />

      <q-input
        v-model="password"
        :type="showPassword ? 'text' : 'password'"
        label="Password*"
        color="secondary"
      >
        <template #append>
          <q-icon
            :name="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            class="cursor-pointer"
            @click="showPassword = !showPassword"
          />
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions>
      <q-space />
      <q-btn color="positive" label="Login" />
    </q-card-actions>
  </q-card>
</template>
