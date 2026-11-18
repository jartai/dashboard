<script setup lang="ts">
import { ref } from 'vue';

const movie = ref<string | null>(null);
const moviesPicked = ref<string[]>([]);
const movies = [
  'Fight Club',
  'Godfather',
  'Godfather II',
  'Godfather III',
  'Goodfellas',
  'Pulp Fiction',
  'Scarface',
];

const dropdown = [
  {
    id: 1,
    text: 'Action',
  },
  {
    id: 2,
    text: 'Another Action',
  },
  {
    id: 3,
    text: 'A Third Action',
  },
];

const slider = ref(40);
const range = ref({
  min: 30,
  max: 70,
});
</script>

<template>
  <div>
    <div class="text-h6">Customizable Select</div>
    <q-select v-model="movie" :options="movies" label="Movie" color="secondary" />
    <q-select
      v-model="moviesPicked"
      class="q-mt-md"
      :options="movies"
      label="Movie"
      color="secondary"
      multiple
    />

    <div class="text-h6 q-mt-lg">Dropdown & Dropup</div>
    <div class="row q-gutter-sm q-mt-sm">
      <q-btn-dropdown color="positive" label="MultiLevel Dropdown">
        <q-list>
          <q-item v-for="item in dropdown" :key="item.id" clickable v-close-popup>
            <q-item-section>{{ item.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown color="positive" label="Dropdown">
        <q-list>
          <q-item v-for="item in dropdown" :key="`down-${item.id}`" clickable v-close-popup>
            <q-item-section>{{ item.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>

      <q-btn-dropdown
        color="positive"
        label="Dropup"
        menu-anchor="top middle"
        menu-self="bottom middle"
      >
        <q-list>
          <q-item v-for="item in dropdown" :key="`up-${item.id}`" clickable v-close-popup>
            <q-item-section>{{ item.text }}</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>

    <div class="text-h6 q-mt-lg">Sliders</div>
    <q-slider v-model="slider" :min="-50" :max="90" color="secondary" />
    <q-range v-model="range" color="info" />
  </div>
</template>
