<script setup lang="ts">
import { ref } from 'vue';

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

function zoomOut() {
  zoom.value = Math.max(0, zoom.value - 10);
}

function zoomIn() {
  zoom.value = Math.min(100, zoom.value + 10);
}
</script>

<template>
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
          <q-input v-model="textarea" type="textarea" label="Default style" hint="Hint text" />
        </div>
        <div class="col-12 col-md-6">
          <q-input v-model="soloText" type="textarea" standout label="Solo textarea" />
        </div>
        <div class="col-12 col-md-6">
          <q-input v-model="filledText" type="textarea" filled label="Filled textarea" />
        </div>
        <div class="col-12 col-md-6">
          <q-input v-model="outlinedText" type="textarea" outlined label="Outlined textarea" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
