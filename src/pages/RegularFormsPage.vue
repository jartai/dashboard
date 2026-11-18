<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const subscribed = ref(false);

const horizontalEmail = ref('');
const horizontalPassword = ref('');
const horizontalSubscribed = ref(false);

const withHelp = ref('');
const elementPassword = ref('');

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

const standard = ref(null);
const filled = ref(null);
const outlined = ref(null);
const solo = ref(null);

const volume = ref(30);
const alarm = ref(20);
const zoom = ref(0);

const textarea = ref(
  'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
);
const soloText = ref('');
const filledText = ref(
  'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
);
const outlinedText = ref(
  'The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
);

const items = ['Foo', 'Bar', 'Fizz', 'Buzz'];

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

function zoomOut() {
  zoom.value = Math.max(0, zoom.value - 10);
}

function zoomIn() {
  zoom.value = Math.min(100, zoom.value + 10);
}
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Forms</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
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
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-email-outline" color="positive" size="sm" />
            <span class="text-h6">Horizontal Form</span>

            <div class="row items-center q-col-gutter-sm q-mt-sm">
              <div class="col-12 col-sm-3 text-grey-7">Email</div>
              <div class="col-12 col-sm-9">
                <q-input v-model="horizontalEmail" />
              </div>

              <div class="col-12 col-sm-3 text-grey-7">Password</div>
              <div class="col-12 col-sm-9">
                <q-input v-model="horizontalPassword" type="password" />
              </div>

              <div class="col-sm-3 gt-xs" />
              <div class="col-12 col-sm-9">
                <q-checkbox v-model="horizontalSubscribed" label="Subscribe to newsletter" />
              </div>
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn color="positive" label="Sign In" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Form Elements</div>

            <div class="text-h6 q-mt-md">Text fields</div>
            <q-input v-model="withHelp" outlined label="With help" />
            <q-input v-model="elementPassword" outlined type="password" label="Password" />

            <div class="text-h6 q-mt-md">Checkboxes</div>
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <q-checkbox v-model="checks.on" label="On" />
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <q-checkbox v-model="checks.off" label="Off" />
              </div>
              <div class="col-12 col-sm-6 col-md-3">
                <q-checkbox
                  v-model="checks.indeterminate"
                  toggle-indeterminate
                  label="Indeterminate"
                />
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
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Input Variants</div>

            <div class="text-h6 q-mt-md">Selects</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-sm-6">
                <q-select v-model="standard" :options="items" label="Standard" />
              </div>
              <div class="col-12 col-sm-6">
                <q-select v-model="filled" :options="items" filled label="Filled style" />
              </div>
              <div class="col-12 col-sm-6">
                <q-select v-model="outlined" :options="items" outlined label="Outlined style" />
              </div>
              <div class="col-12 col-sm-6">
                <q-select v-model="solo" :options="items" standout label="Solo field" />
              </div>
            </div>

            <div class="text-h6 q-mt-md">Sliders</div>
            <div class="row items-center q-gutter-sm">
              <q-icon name="mdi-volume-plus" />
              <q-slider v-model="volume" color="secondary" class="col" />
            </div>
            <div class="row items-center q-gutter-sm">
              <q-slider v-model="alarm" class="col" />
              <q-icon name="mdi-alarm" />
            </div>
            <div class="row items-center q-gutter-sm">
              <q-btn flat round dense icon="mdi-magnify-minus-outline" @click="zoomOut" />
              <q-slider v-model="zoom" class="col" />
              <q-btn flat round dense icon="mdi-magnify-plus-outline" @click="zoomIn" />
            </div>

            <div class="text-h6 q-mt-md">Textareas</div>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="textarea"
                  type="textarea"
                  label="Default style"
                  hint="Hint text"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="soloText" type="textarea" standout label="Solo textarea" />
              </div>
              <div class="col-12 col-md-6">
                <q-input v-model="filledText" type="textarea" filled label="Filled textarea" />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="outlinedText"
                  type="textarea"
                  outlined
                  label="Outlined textarea"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
