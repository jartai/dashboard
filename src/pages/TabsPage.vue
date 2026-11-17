<script setup lang="ts">
import { ref } from 'vue';

const horizontal = ref('Profile');
const vertical = ref('Profile');
const iconTab = ref('Home');
const subcategory = ref('Description');

const panels = [
  {
    name: 'Profile',
    lines: [
      'Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
      'Dramatically visualize customer directed convergence without revolutionary ROI. Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits.',
    ],
    note: 'This is very nice.',
  },
  {
    name: 'Settings',
    lines: [
      'Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas.',
    ],
    note: 'Dramatically maintain clicks-and-mortar solutions without functional solutions.',
  },
  {
    name: 'Options',
    lines: [
      'Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas.',
    ],
    note: 'Dynamically innovate resource-leveling customer service for state of the art customer service.',
  },
];

const accordionText =
  "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";

const iconTabs = [
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

const subcategories = [
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
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Tabs</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Navigation Pills</div>
            <div>Horizontal Tabs</div>

            <q-tabs
              v-model="horizontal"
              align="left"
              active-color="warning"
              indicator-color="warning"
            >
              <q-tab
                v-for="panel in panels"
                :key="panel.name"
                :name="panel.name"
                :label="panel.name"
              />
            </q-tabs>

            <q-tab-panels v-model="horizontal">
              <q-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name">
                <p v-for="(line, index) in panel.lines" :key="index">{{ line }}</p>
                <div>{{ panel.note }}</div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Navigation Pills</div>
            <div>Vertical Tabs</div>

            <div class="row">
              <q-tabs
                v-model="vertical"
                vertical
                active-color="positive"
                indicator-color="positive"
                class="col-12 col-sm-auto"
              >
                <q-tab
                  v-for="panel in panels"
                  :key="panel.name"
                  :name="panel.name"
                  :label="panel.name"
                />
              </q-tabs>

              <q-tab-panels v-model="vertical" class="col-12 col-sm">
                <q-tab-panel v-for="panel in panels" :key="panel.name" :name="panel.name">
                  <p v-for="(line, index) in panel.lines" :key="index">{{ line }}</p>
                  <div>{{ panel.note }}</div>
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-sm">Collapsible Accordion</div>

            <q-list bordered>
              <q-expansion-item v-for="n in 5" :key="n" :label="`Collapsible Group Item #${n}`">
                <q-card>
                  <q-card-section>{{ accordionText }}</q-card-section>
                </q-card>
              </q-expansion-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Navigation Pills</div>
            <div>Vertical Tabs</div>

            <div class="row">
              <q-tabs
                v-model="iconTab"
                vertical
                active-color="positive"
                indicator-color="positive"
                class="col-12 col-sm-auto"
              >
                <q-tab
                  v-for="panel in iconTabs"
                  :key="panel.name"
                  :name="panel.name"
                  :icon="panel.icon"
                  :label="panel.name"
                />
              </q-tabs>

              <q-tab-panels v-model="iconTab" class="col-12 col-sm">
                <q-tab-panel v-for="panel in iconTabs" :key="panel.name" :name="panel.name">
                  <p v-for="(line, index) in panel.lines" :key="index">{{ line }}</p>
                  <div>{{ panel.note }}</div>
                </q-tab-panel>
              </q-tab-panels>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-8 q-mx-auto">
        <div class="text-h5 text-center q-mb-md">Page Subcategories</div>

        <q-tabs
          v-model="subcategory"
          align="center"
          active-color="warning"
          indicator-color="warning"
        >
          <q-tab
            v-for="panel in subcategories"
            :key="panel.name"
            :name="panel.name"
            :icon="panel.icon"
            :label="panel.name"
          />
        </q-tabs>

        <q-tab-panels v-model="subcategory">
          <q-tab-panel v-for="panel in subcategories" :key="panel.name" :name="panel.name">
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
    </div>
  </q-page>
</template>
