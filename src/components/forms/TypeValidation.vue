<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const requiredText = ref('');
const email = ref('');
const number = ref('');
const url = ref('');

function submitted() {
  $q.notify({
    message: 'Form Submitted!',
    color: 'positive',
  });
}

function required(value: string) {
  return value.trim().length > 0 || 'Required';
}

function emailRule(value: string) {
  return /.+@.+\..+/.test(value) || 'Enter a valid email';
}

function numberRule(value: string) {
  return /^\d+$/.test(value) || 'Enter a number';
}

function urlRule(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' || 'Enter a valid URL';
  } catch {
    return 'Enter a valid URL';
  }
}
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Type Validation</div>

      <q-form greedy @submit.prevent="submitted">
        <div class="row items-center q-col-gutter-sm q-mt-sm">
          <div class="col-12 col-sm-3 text-grey-7">Required Text</div>
          <div class="col-12 col-sm-6">
            <q-input v-model="requiredText" color="secondary" lazy-rules :rules="[required]" />
          </div>
          <div class="col-12 col-sm-3"><code>required</code></div>

          <div class="col-12 col-sm-3 text-grey-7">Email</div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="email"
              type="email"
              color="secondary"
              lazy-rules
              :rules="[required, emailRule]"
            />
          </div>
          <div class="col-12 col-sm-3"><code>type="email"</code></div>

          <div class="col-12 col-sm-3 text-grey-7">Number</div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="number"
              type="number"
              color="secondary"
              lazy-rules
              :rules="[required, numberRule]"
            />
          </div>
          <div class="col-12 col-sm-3"><code>type="number"</code></div>

          <div class="col-12 col-sm-3 text-grey-7">Url</div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="url"
              type="url"
              color="secondary"
              lazy-rules
              :rules="[required, urlRule]"
            />
          </div>
          <div class="col-12 col-sm-3"><code>type="url"</code></div>
        </div>

        <div class="text-center q-mt-md">
          <q-btn type="submit" color="positive" label="Validate Inputs" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
