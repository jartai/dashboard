<script setup lang="ts">
import { ref } from 'vue';

const pageOne = ref(1);
const pageTwo = ref(2);
const edges = ref('left');
const count = ref('1');
const more = ref('5');

const colors = [
  {
    label: 'default',
    color: 'grey-7',
  },
  {
    label: 'secondary',
    color: 'secondary',
  },
  {
    label: 'info',
    color: 'info',
  },
  {
    label: 'success',
    color: 'positive',
  },
  {
    label: 'warning',
    color: 'warning',
  },
  {
    label: 'error',
    color: 'negative',
  },
];

const labeled = [
  {
    label: 'left',
    icon: 'mdi-chevron-left',
  },
  {
    label: 'right',
    icon: 'mdi-chevron-right',
  },
  {
    label: 'info',
    icon: 'mdi-exclamation',
    color: 'info',
  },
  {
    label: 'success',
    icon: 'mdi-check',
    color: 'positive',
  },
  {
    label: 'warning',
    icon: 'mdi-alert',
    color: 'warning',
  },
  {
    label: 'error',
    icon: 'mdi-close',
    color: 'negative',
  },
];

const social = [
  {
    color: '#55ACEE',
    icon: 'mdi-twitter',
    text: 'Connect with Twitter',
  },
  {
    color: '#3B5998',
    icon: 'mdi-facebook',
    text: 'Share - 2.2K',
  },
  {
    color: '#DD4b39',
    icon: 'mdi-google-plus',
    text: 'Share on Google+',
  },
  {
    color: '#0976B4',
    icon: 'mdi-linkedin',
    text: 'Connect with LinkedIn',
  },
  {
    color: '#CC2127',
    icon: 'mdi-pinterest',
    text: 'Pint It - 212',
  },
  {
    color: '#E52D27',
    icon: 'mdi-youtube',
    text: 'View on Youtube',
  },
  {
    color: '#35465C',
    icon: 'mdi-tumblr',
    text: 'Repost',
  },
  {
    color: '#333333',
    icon: 'mdi-github',
    text: 'Connect with Github',
  },
  {
    color: '#1769FF',
    icon: 'mdi-behance',
    text: 'Follow Us',
  },
  {
    color: '#EA4C89',
    icon: 'mdi-dribbble',
    text: 'Follow us on Dribbble',
  },
  {
    color: '#FF4500',
    icon: 'mdi-reddit',
    text: 'Repost - 232',
  },
];

const edgeOptions = [
  {
    label: 'left',
    value: 'left',
  },
  {
    label: 'middle',
    value: 'middle',
  },
  {
    label: 'right',
    value: 'right',
  },
];

const countOptions = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
];

const moreOptions = [
  {
    label: '5',
    value: '5',
  },
  {
    label: '6',
    value: '6',
  },
  {
    label: '7',
    value: '7',
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Buttons</h1>

    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Pick your Color</div>
            <q-btn
              v-for="color in colors"
              :key="color.label"
              class="q-ma-xs"
              :color="color.color"
              :label="color.label"
            />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Buttons with Label</div>
            <q-btn
              v-for="button in labeled"
              :key="button.label"
              class="q-ma-xs"
              :color="button.color"
              :icon="button.icon"
              :label="button.label"
            />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Pick your Size</div>
            <q-btn class="q-ma-xs" color="secondary" size="sm" label="small" />
            <q-btn class="q-ma-xs" color="secondary" label="regular" />
            <q-btn class="q-ma-xs" color="secondary" size="lg" label="large" />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Pick your Style</div>
            <q-btn class="q-ma-xs" color="secondary" label="Default" />
            <q-btn class="q-ma-xs" color="secondary" rounded label="Rounded" />
            <q-btn class="q-ma-xs" color="secondary" rounded icon="mdi-heart" label="With Icon" />
            <q-btn class="q-ma-xs" color="secondary" round icon="mdi-heart" />
            <q-btn class="q-ma-xs" color="secondary" flat label="Simple" />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Pagination</div>
            <q-pagination v-model="pageOne" :max="5" direction-links />
            <q-pagination
              v-model="pageTwo"
              class="q-mt-md"
              :max="3"
              direction-links
              icon-prev="mdi-menu-left"
              icon-next="mdi-menu-right"
            />
          </div>

          <div class="col-12 col-md-6">
            <div class="text-h6 q-mb-sm">Button Group</div>
            <q-btn-toggle v-model="edges" toggle-color="teal" :options="edgeOptions" />
            <q-btn-toggle
              v-model="count"
              class="q-mt-md"
              rounded
              toggle-color="teal"
              :options="countOptions"
            />

            <q-btn-toggle
              v-model="more"
              class="q-mt-sm"
              rounded
              toggle-color="teal"
              :options="moreOptions"
            />
          </div>

          <div class="col-12">
            <div class="text-h6 q-mb-sm">Social buttons</div>

            <div
              v-for="item in social"
              :key="item.text"
              class="row items-center q-gutter-sm q-mb-sm"
            >
              <q-btn
                no-caps
                unelevated
                :icon="item.icon"
                :label="item.text"
                :style="{ backgroundColor: item.color, color: '#fff' }"
              />

              <q-btn
                unelevated
                :icon="item.icon"
                :style="{ backgroundColor: item.color, color: '#fff' }"
              />

              <q-btn
                round
                unelevated
                :icon="item.icon"
                :style="{ backgroundColor: item.color, color: '#fff' }"
              />
              <q-btn flat round :icon="item.icon" :style="{ color: item.color }" />
              <q-btn
                flat
                no-caps
                :icon="item.icon"
                :label="item.text"
                :style="{ color: item.color }"
              />
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
