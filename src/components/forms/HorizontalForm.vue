<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const subscribed = ref(false);
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-email-outline" color="positive" size="sm" />
      <span class="text-h6">Horizontal Form</span>

      <div class="row items-center q-col-gutter-sm q-mt-sm">
        <div class="col-12 col-sm-3 text-grey-7">Email</div>
        <div class="col-12 col-sm-9">
          <q-input v-model="email" />
        </div>

        <div class="col-12 col-sm-3 text-grey-7">Password</div>
        <div class="col-12 col-sm-9">
          <q-input v-model="password" type="password" />
        </div>

        <div class="col-sm-3 gt-xs" />
        <div class="col-12 col-sm-9">
          <q-checkbox v-model="subscribed" label="Subscribe to newsletter" />
        </div>
      </div>
    </q-card-section>

    <q-card-actions>
      <q-btn color="positive" label="Sign In" />
    </q-card-actions>
  </q-card>
</template>
