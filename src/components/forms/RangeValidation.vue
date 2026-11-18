<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const minText = ref('');
const maxText = ref('');

function submitted() {
  $q.notify({
    message: 'Form Submitted!',
    color: 'positive',
  });
}

function required(value: string) {
  return value.trim().length > 0 || 'Required';
}

function minRule(value: string) {
  return value.length >= 5 || 'At least 5 characters';
}

function maxRule(value: string) {
  return value.length <= 5 || 'At most 5 characters';
}
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Range Validation</div>

      <q-form greedy @submit.prevent="submitted">
        <div class="row items-center q-col-gutter-sm q-mt-sm">
          <div class="col-12 col-sm-3 text-grey-7">Min Length</div>
          <div class="col-12 col-sm-6">
            <q-input v-model="minText" color="secondary" lazy-rules :rules="[required, minRule]" />
          </div>
          <div class="col-12 col-sm-3"><code>minLength="5"</code></div>

          <div class="col-12 col-sm-3 text-grey-7">Max Length</div>
          <div class="col-12 col-sm-6">
            <q-input v-model="maxText" color="secondary" lazy-rules :rules="[required, maxRule]" />
          </div>
          <div class="col-12 col-sm-3"><code>maxLength="5"</code></div>
        </div>

        <div class="text-center q-mt-md">
          <q-btn type="submit" color="positive" label="Validate Inputs" />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>
