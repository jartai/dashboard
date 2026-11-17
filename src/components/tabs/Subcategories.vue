<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('Description');

const panels = [
  {
    name: 'Description',
    icon: 'mdi-information',
    title: 'Description about product',
    lines: [
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
    ],
    note: 'Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
  },
  {
    name: 'Location',
    icon: 'mdi-map-marker',
    title: 'Location of the product product',
    lines: [
      'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
    ],
    note: 'Dramatically maintain clicks-and-mortar solutions without functional solutions',
  },
  {
    name: 'Legal Info',
    icon: 'mdi-gavel',
    title: 'Legal info of the product product',
    lines: [
      'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.',
    ],
    note: 'Dynamically innovate resource-leveling customer service for state of the art customer service.',
  },
  {
    name: 'Help Center',
    icon: 'mdi-help-circle-outline',
    title: 'Help center',
    lines: [
      'From the seamless transition of glass and metal to the streamlined profile, every detail was carefully considered to enhance your experience. So while its display is larger, the phone feels just right.',
    ],
    note: 'Another Text. The first thing you notice when you hold the phone is how great it feels in your hand. The cover glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable, simplified design.',
  },
];
</script>

<template>
  <div>
    <div class="text-h5 text-center q-mb-md">Page Subcategories</div>

    <q-tabs v-model="tab" align="center" active-color="warning" indicator-color="warning">
      <q-tab
        v-for="panel in panels"
        :key="panel.name"
        :name="panel.name"
        :icon="panel.icon"
        :label="panel.name"
      />
    </q-tabs>

    <q-tab-panels v-model="tab">
      <q-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name">
        <q-card>
          <q-card-section>
            <div class="text-h6">{{ panel.title }}</div>
            <div class="text-grey-7">More Information here</div>
            <p v-for="(line, index) in panel.lines" :key="index">{{ line }}</p>
            <div>{{ panel.note }}</div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>
