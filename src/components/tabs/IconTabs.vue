<script setup lang="ts">
import { ref } from 'vue';

const tab = ref('Home');

const panels = [
  {
    name: 'Home',
    icon: 'mdi-view-dashboard',
    lines: [
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
      'Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
    ],
    note: 'Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
  },
  {
    name: 'Settings',
    icon: 'mdi-clock-outline',
    lines: [
      'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
    ],
    note: 'Dramatically maintain clicks-and-mortar solutions without functional solutions.',
  },
];
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Navigation Pills</div>
      <div>Vertical Tabs</div>

      <div class="row">
        <q-tabs
          v-model="tab"
          vertical
          active-color="positive"
          indicator-color="positive"
          class="col-12 col-sm-auto"
        >
          <q-tab
            v-for="panel in panels"
            :key="panel.name"
            :name="panel.name"
            :icon="panel.icon"
            :label="panel.name"
          />
        </q-tabs>

        <q-tab-panels v-model="tab" class="col-12 col-sm">
          <q-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name">
            <p v-for="(line, index) in panel.lines" :key="index">{{ line }}</p>
            <div>{{ panel.note }}</div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </q-card-section>
  </q-card>
</template>
