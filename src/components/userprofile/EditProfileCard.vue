<script setup lang="ts">
import { ref } from 'vue';

const company = ref('');
const userName = ref('');
const email = ref('');
const firstName = ref('');
const lastName = ref('');
const address = ref('');
const city = ref('');
const country = ref('');
const postalCode = ref<number | null>(null);
const aboutMe = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Edit Profile</div>
      <div>Complete your profile</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-4">
          <q-input v-model="company" label="Company (disabled)" disable />
        </div>

        <div class="col-12 col-md-4">
          <q-input v-model="userName" label="User Name" />
        </div>

        <div class="col-12 col-md-4">
          <q-input v-model="email" label="Email Address" type="email" />
        </div>

        <div class="col-12 col-md-6">
          <q-input v-model="firstName" label="First Name" />
        </div>

        <div class="col-12 col-md-6">
          <q-input v-model="lastName" label="Last Name" />
        </div>

        <div class="col-12">
          <q-input v-model="address" label="Address" />
        </div>

        <div class="col-12 col-md-4">
          <q-input v-model="city" label="City" />
        </div>

        <div class="col-12 col-md-4">
          <q-input v-model="country" label="Country" />
        </div>

        <div class="col-12 col-md-4">
          <q-input v-model.number="postalCode" label="Postal Code" type="number" />
        </div>

        <div class="col-12">
          <q-input v-model="aboutMe" label="About Me" type="textarea" />
        </div>

        <div class="col-12 text-right">
          <q-btn color="positive" label="Update Profile" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
