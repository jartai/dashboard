<script setup lang="ts">
import { ref } from 'vue';

interface TimelineItem {
  chip: string;
  color: string;
  icon: string;
  text: string;
  subtext?: string;
  action?: string;
  actionIcon?: string;
  actions?: string[];
}

const menu = ref(false);

const timelines: TimelineItem[] = [
  {
    chip: 'Some title',
    color: 'negative',
    icon: 'mdi-briefcase',
    text: "Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the “future” theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.",
    subtext: '11 hours ago via twitter',
  },
  {
    chip: 'Another one',
    color: 'positive',
    icon: 'mdi-puzzle',
    text: 'Thank God for the support of my wife and real friends. I also wanted to point out that it’s the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....',
  },
  {
    chip: 'Another title',
    color: 'info',
    icon: 'mdi-fingerprint',
    text: "Called I Miss the Old Kanye That’s all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn’t any Kanyes Set on his goals Kanye",
    action: 'info',
    actionIcon: 'mdi-wrench',
    actions: ['Action', 'Another Action', 'Something else here'],
  },
  {
    chip: 'Another one',
    color: 'warning',
    icon: 'mdi-airplane-landing',
    text: "Tune into Big Boy's 92.3 I'm about to play the first single from Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the whole style squad at Balmain and the Yeezy team. Thank you Anna for the invite thank you to the whole Vogue team",
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Timelines</h1>

    <q-timeline>
      <q-timeline-entry
        v-for="(timeline, index) in timelines"
        :key="index"
        :icon="timeline.icon"
        :color="timeline.color"
      >
        <q-card>
          <q-card-section>
            <q-chip :color="timeline.color" text-color="white" dense>
              {{ timeline.chip }}
            </q-chip>

            <p class="q-mt-md q-mb-sm">{{ timeline.text }}</p>
            <div v-if="timeline.subtext" class="text-uppercase text-caption">
              {{ timeline.subtext }}
            </div>

            <template v-if="timeline.action && timeline.actions">
              <q-separator class="q-my-md" />

              <q-btn-dropdown
                v-model="menu"
                rounded
                :color="timeline.action"
                :icon="timeline.actionIcon"
                :dropdown-icon="menu ? 'mdi-menu-up' : 'mdi-menu-down'"
              >
                <q-list>
                  <q-item v-for="action in timeline.actions" :key="action" clickable v-close-popup>
                    <q-item-section>{{ action }}</q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>
          </q-card-section>
        </q-card>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>
