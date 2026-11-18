<script setup lang="ts">
import { ref } from 'vue';

const withHelp = ref('');
const password = ref('');

const checks = ref({
  on: true,
  off: false,
  indeterminate: null as boolean | null,
  onDisabled: true,
  offDisabled: false,
});

const columnRadio = ref('radio-1');
const rowRadio = ref('radio-1');

const switches = ref({
  on: true,
  off: false,
  onDisabled: true,
  disabled: false,
  loading: true,
});

const columnRadios = [
  {
    label: 'Column Option 1',
    value: 'radio-1',
  },
  {
    label: 'Column Option 2',
    value: 'radio-2',
  },
];

const rowRadios = [
  {
    label: 'Row Option 1',
    value: 'radio-1',
  },
  {
    label: 'Row Option 2',
    value: 'radio-2',
  },
];
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Form Elements</div>

      <div class="text-h6 q-mt-md">Text fields</div>
      <q-input v-model="withHelp" outlined label="With help" />
      <q-input v-model="password" outlined type="password" label="Password" />

      <div class="text-h6 q-mt-md">Checkboxes</div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-3">
          <q-checkbox v-model="checks.on" label="On" />
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-checkbox v-model="checks.off" label="Off" />
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-checkbox v-model="checks.indeterminate" toggle-indeterminate label="Indeterminate" />
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-checkbox v-model="checks.onDisabled" disable label="On Disabled" />
        </div>
        <div class="col-12 col-sm-6 col-md-3">
          <q-checkbox v-model="checks.offDisabled" disable label="Off Disabled" />
        </div>
      </div>

      <div class="row q-mt-md">
        <div class="col-12 col-lg-6">
          <div class="text-h6">Radios</div>
          <q-option-group v-model="columnRadio" :options="columnRadios" />
        </div>

        <div class="col-12 col-lg-6">
          <div class="text-h6">Inline Radios</div>
          <q-option-group v-model="rowRadio" :options="rowRadios" inline />
        </div>
      </div>

      <div class="text-h6 q-mt-md">Switches</div>
      <div class="row">
        <div class="col-12 col-sm-6 col-md-4">
          <q-toggle v-model="switches.on" label="On" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-toggle v-model="switches.off" label="Off" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-toggle v-model="switches.onDisabled" disable label="On Disabled" />
        </div>
        <div class="col-12 col-sm-6 col-md-4">
          <q-toggle v-model="switches.disabled" disable label="Disabled" />
        </div>
        <div class="col-12 col-sm-6 col-md-4 row items-center">
          <q-toggle v-model="switches.loading" label="Loading" />
          <q-spinner color="primary" size="1.5em" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
