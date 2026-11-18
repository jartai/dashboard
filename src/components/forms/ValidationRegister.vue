<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const subscribed = ref(false);
const showPassword = ref(false);
const showConfirm = ref(false);
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-mail" color="positive" size="sm" />
      <span class="text-h6">Register Form</span>

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

      <q-input
        v-model="confirmPassword"
        :type="showConfirm ? 'text' : 'password'"
        label="Confirm Password*"
        color="secondary"
      >
        <template #append>
          <q-icon
            :name="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
            class="cursor-pointer"
            @click="showConfirm = !showConfirm"
          />
        </template>
      </q-input>

      <div>* Required Fields</div>
    </q-card-section>

    <q-card-actions>
      <q-checkbox v-model="subscribed" label="Subscribe to newsletter" />
      <q-space />
      <q-btn color="positive" label="Register" />
    </q-card-actions>
  </q-card>
</template>
