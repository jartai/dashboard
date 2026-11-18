<script setup lang="ts">
import { ref } from 'vue';

const date = ref('');
const date2 = ref('2019-09-26');
const date3 = ref('');
const closeProxy = ref<{
  hide: () => void;
} | null>(null);

const toggleOn = ref(true);
const toggleOff = ref(false);

const tags = ref(['Amsterdam', 'Washington', 'Sydney', 'Beijing']);

const files = ref<File[] | null>(null);

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

function closeDatePicker() {
  closeProxy.value?.hide();
}
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Date Pickers</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-calendar-today" color="positive" size="sm" />
            <span class="text-h6">Date Picker</span>
            <span> — labeled</span>

            <q-input v-model="date" class="q-mt-md" label="Select date" readonly>
              <template #prepend>
                <q-icon name="mdi-calendar-outline" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date" mask="YYYY-MM-DD" color="secondary">
                      <div class="row items-center justify-end q-gutter-sm">
                        <q-btn v-close-popup flat color="secondary" label="Cancel" />
                        <q-btn v-close-popup flat color="secondary" label="OK" />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-calendar-today" color="positive" size="sm" />
            <span class="text-h6">Date Picker</span>
            <span> — date selected</span>

            <q-input v-model="date2" class="q-mt-md" label="Select date" readonly>
              <template #prepend>
                <q-icon name="mdi-calendar-outline" class="cursor-pointer">
                  <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                    <q-date v-model="date2" mask="YYYY-MM-DD" color="secondary">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup flat color="secondary" label="Cancel" />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-calendar-today" color="positive" size="sm" />
            <span class="text-h6">Date Picker</span>
            <span> — close on select</span>

            <q-input v-model="date3" class="q-mt-md" readonly>
              <template #prepend>
                <q-icon name="mdi-calendar-outline" class="cursor-pointer">
                  <q-popup-proxy
                    ref="closeProxy"
                    cover
                    transition-show="scale"
                    transition-hide="scale"
                  >
                    <q-date
                      v-model="date3"
                      mask="YYYY-MM-DD"
                      color="secondary"
                      @update:model-value="closeDatePicker"
                    >
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup flat color="secondary" label="Cancel" />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <div class="text-h6">Switches</div>
                <q-toggle v-model="toggleOn" label="Toggle is on" />
                <q-toggle v-model="toggleOff" label="Toggle is off" />

                <div class="text-h6 q-mt-lg">Tags</div>
                <q-select
                  v-model="tags"
                  multiple
                  use-chips
                  use-input
                  hide-dropdown-icon
                  new-value-mode="add-unique"
                  color="secondary"
                />

                <div class="text-h6 q-mt-lg">Progress Bar</div>
                <q-linear-progress :value="0.3" color="secondary" class="q-mt-md" />
                <q-linear-progress :value="0.6" color="info" class="q-mt-lg" />
                <q-linear-progress :value="0.4" color="warning" stripe class="q-mt-lg" />

                <div class="text-h6 q-mt-lg">File Input</div>
                <q-file
                  v-model="files"
                  multiple
                  outlined
                  use-chips
                  counter
                  color="deep-purple"
                  label="File input"
                  class="q-mt-md"
                >
                  <template #prepend>
                    <q-icon name="mdi-paperclip" />
                  </template>
                </q-file>
              </div>

              <div class="col-12 col-md-6">
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
                      <q-item
                        v-for="item in dropdown"
                        :key="`down-${item.id}`"
                        clickable
                        v-close-popup
                      >
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
                      <q-item
                        v-for="item in dropdown"
                        :key="`up-${item.id}`"
                        clickable
                        v-close-popup
                      >
                        <q-item-section>{{ item.text }}</q-item-section>
                      </q-item>
                    </q-list>
                  </q-btn-dropdown>
                </div>

                <div class="text-h6 q-mt-lg">Sliders</div>
                <q-slider v-model="slider" :min="-50" :max="90" color="secondary" />
                <q-range v-model="range" color="info" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
