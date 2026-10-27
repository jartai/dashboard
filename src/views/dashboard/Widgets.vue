<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import PagesPlanCard from '@/views/pages/components/PlanCard.vue'

defineOptions({ name: 'Widgets' })

interface Task {
  text: string
  value: boolean
}

const tabs = ref(0)
const menu = ref(false)

const headers = [
  { sortable: false, title: 'ID', value: 'id' },
  { sortable: false, title: 'Name', value: 'name' },
  { align: 'end', sortable: false, title: 'Salary', value: 'salary' },
  { align: 'end', sortable: false, title: 'Country', value: 'country' },
  { align: 'end', sortable: false, title: 'City', value: 'city' },
]

const items = [
  { id: 1, name: 'Dakota Rice', country: 'Niger', city: 'Oud-Turnhout', salary: '$35,738' },
  { id: 2, name: 'Minerva Hooper', country: 'Curaçao', city: 'Sinaai-Waas', salary: '$23,738' },
  {
    id: 3,
    name: 'Sage Rodriguez',
    country: 'Netherlands',
    city: 'Overland Park',
    salary: '$56,142',
  },
  { id: 4, name: 'Philip Chanley', country: 'Korea, South', city: 'Gloucester', salary: '$38,735' },
  {
    id: 5,
    name: 'Doris Greene',
    country: 'Malawi',
    city: 'Feldkirchen in Kärnten',
    salary: '$63,542',
  },
]

const plans = [
  {
    best: true,
    heading: 'Small Company',
    icon: 'mdi-home',
    title: '29$',
    text: 'This is good if your company size is between 2 and 10 Persons.',
  },
  {
    heading: 'Freelancer',
    icon: 'mdi-sofa',
    title: 'Free',
    text: 'This is good if your company size is between 2 and 10 Persons.',
  },
]

const tasks = reactive<Record<number, Task[]>>({
  0: [
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: true,
    },
    {
      text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      value: false,
    },
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: false,
    },
    {
      text: 'Create 4 Invisible User Experiences you Never Knew About',
      value: true,
    },
  ],
  1: [
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: true,
    },
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: false,
    },
  ],
  2: [
    {
      text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
      value: false,
    },
    {
      text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
      value: true,
    },
    {
      text: 'Sign contract for "What are conference organizers afraid of?"',
      value: true,
    },
  ],
})

const currentTasks = computed(() => tasks[tabs.value] ?? [])

const timelines = [
  {
    chip: 'Some title',
    color: 'error',
    icon: 'mdi-briefcase',
    text: `Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making my family We just had fun with the "future" theme !!! It was a fun night all together ... The always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.`,
    subtext: '11 hours ago via twitter',
  },
  {
    chip: 'Another one',
    color: 'success',
    icon: 'mdi-puzzle',
    text: `Thank God for the support of my wife and real friends. I also wanted to point out that it's the first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule of anything I do from shoes to music to homes is that Kim has to like it....`,
  },
  {
    chip: 'Another title',
    color: 'info',
    icon: 'mdi-fingerprint',
    text: `Called I Miss the Old Kanye That's all it was Kanye And I love you like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown LA 11:10PM. What if Kanye made a song about Kanye Royère doesn't make a Polar bear bed but the Polar bear couch is my favorite piece of furniture we own It wasn't any Kanyes Set on his goals Kanye`,
    action: 'info',
    actionIcon: 'mdi-wrench',
    actions: ['Action', 'Another Action', 'Something else here'],
  },
]
</script>

<template>
  <v-container
    id="widgets"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Cards"
      link="components/cards"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          class="px-5 py-3"
          color="warning"
          inline
        >
          <template #heading>
            <div class="text-h3 font-weight-light">Employees Stats</div>

            <div class="text-subtitle-1 font-weight-light">
              New employees on 15th September, 2016
            </div>
          </template>

          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard class="px-5 py-3">
          <template #heading>
            <v-tabs
              v-model="tabs"
              bg-color="transparent"
              slider-color="white"
            >
              <span
                class="text-subtitle-1 font-weight-light mx-3"
                style="align-self: center"
                >Tasks:</span
              >
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>
                Server
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-window
            v-model="tabs"
            class="transparent"
          >
            <v-tabs-window-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template
                  v-for="(task, i) in currentTasks"
                  :key="i"
                >
                  <v-row align="center">
                    <v-col cols="1">
                      <v-checkbox
                        v-model="task.value"
                        color="secondary"
                      />
                    </v-col>

                    <v-col cols="9">
                      <div
                        class="font-weight-light"
                        v-text="task.text"
                      />
                    </v-col>

                    <v-col
                      class="text-right"
                      cols="2"
                    >
                      <v-icon class="mx-1">mdi-pencil</v-icon>
                      <v-icon
                        class="mx-1"
                        color="error"
                      >
                        mdi-close
                      </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tabs-window-item>
          </v-tabs-window>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-row>
          <template
            v-for="(plan, i) in plans"
            :key="i"
          >
            <v-col
              cols="12"
              md="6"
            >
              <PagesPlanCard :plan="plan" />
            </v-col>
          </template>

          <v-col cols="12">
            <BaseMaterialTestimony
              author="Alec Thompson"
              blurb="Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!"
              handle="@alecthompson"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-timeline
          align="start"
          density="compact"
        >
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            fill-dot
            :icon="timeline.icon"
            size="large"
          >
            <v-card class="pa-6">
              <v-chip
                class="text-overline mb-3"
                :color="timeline.color"
                size="small"
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="text-subtitle-1"
                v-text="timeline.text"
              />

              <div
                class="text-uppercase text-body-2"
                v-text="timeline.subtext"
              />

              <template v-if="timeline.action">
                <v-divider class="mb-3" />

                <v-menu
                  v-model="menu"
                  location="bottom end"
                  origin="top left"
                  transition="scale-transition"
                >
                  <template #activator="{ props: activatorProps }">
                    <v-btn
                      v-bind="activatorProps"
                      :color="timeline.action"
                      rounded
                    >
                      <v-icon start>{{ timeline.actionIcon }}</v-icon>
                      <v-icon end>
                        {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="a in timeline.actions"
                        :key="a"
                        link
                      >
                        <v-list-item-title>{{ a }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-menu>
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
