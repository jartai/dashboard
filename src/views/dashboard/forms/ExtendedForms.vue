<script setup lang="ts">
import { ref } from 'vue'
import { VDatePicker } from 'vuetify/components'

defineOptions({ name: 'ExtendedForms' })

interface DropdownItem {
  id: number
  text: string
}

const date = ref('')
const date2 = ref('2019-09-26')
const date3 = ref('')

const menu = ref(false)
const menu2 = ref(false)
const menu3 = ref(false)

const min = ref(-50)
const max = ref(90)

const slider = ref(40)
const slider2 = ref<number[]>([30, 70])

const swOn = ref(true)
const swOff = ref(false)

const items = ref<string[]>(['Amsterdam', 'Washington', 'Sydney', 'Beijing'])
const files = ref<File[]>([])

const movie = ref<string>()
const selectedMovies = ref<string[]>([])

const movies = [
  'Fight Club',
  'Godfather',
  'Godfather II',
  'Godfather III',
  'Goodfellas',
  'Pulp Fiction',
  'Scarface',
]

const dropdown: DropdownItem[] = [
  { id: 1, text: 'Action' },
  { id: 2, text: 'Another Action' },
  { id: 3, text: 'A Third Action' },
]

function removeItem(item: string) {
  items.value = items.value.filter((i) => i !== item)
}
</script>

<template>
  <v-container
    id="extended-forms"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Date Pickers"
      link="components/date-pickers"
    />

    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-calendar-today"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Date Picker <span class="text-body-1">— labeled</span>
            </div>
          </template>

          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            location="bottom start"
            transition="scale-transition"
            min-width="290px"
          >
            <template #activator="{ props: activatorProps }">
              <v-text-field
                v-model="date"
                color="secondary"
                label="Select date"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-bind="activatorProps"
              />
            </template>

            <VDatePicker
              v-model="date"
              color="secondary"
              landscape
              scrollable
            >
              <template #actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  size="large"
                  @click="menu = false"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="secondary"
                  size="large"
                  @click="menu = false"
                >
                  OK
                </v-btn>
              </template>
            </VDatePicker>
          </v-menu>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-calendar-today"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Date Picker <span class="text-body-1">— date selected</span>
            </div>
          </template>

          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            location="bottom start"
            transition="scale-transition"
            min-width="290px"
          >
            <template #activator="{ props: activatorProps }">
              <v-text-field
                v-model="date2"
                color="secondary"
                label="Select date"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-bind="activatorProps"
              />
            </template>

            <VDatePicker
              v-model="date"
              color="secondary"
              landscape
              scrollable
            >
              <template #actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  size="large"
                  @click="menu2 = false"
                >
                  Cancel
                </v-btn>
              </template>
            </VDatePicker>
          </v-menu>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        md="4"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-calendar-today"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Date Picker <span class="text-body-1">— close on select</span>
            </div>
          </template>

          <v-menu
            v-model="menu3"
            :close-on-content-click="false"
            location="bottom start"
            transition="scale-transition"
            min-width="290px"
          >
            <template #activator="{ props: activatorProps }">
              <v-text-field
                v-model="date3"
                color="secondary"
                prepend-icon="mdi-calendar-outline"
                readonly
                v-bind="activatorProps"
              />
            </template>

            <VDatePicker
              v-model="date3"
              color="secondary"
              landscape
              scrollable
              @update:model-value="menu3 = false"
            >
              <template #actions>
                <v-spacer />
                <v-btn
                  color="secondary"
                  size="large"
                  @click="menu3 = false"
                >
                  Cancel
                </v-btn>
              </template>
            </VDatePicker>
          </v-menu>
        </BaseMaterialCard>
      </v-col>

      <v-col cols="12">
        <v-card class="pa-6">
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <BaseSubheading> Switches </BaseSubheading>

              <v-switch
                v-model="swOn"
                hide-details
                label="Toggle is on"
              />

              <v-switch
                v-model="swOff"
                hide-details
                label="Toggle is off"
              />

              <div class="my-6" />

              <BaseSubheading> Tags </BaseSubheading>

              <v-combobox
                v-model="items"
                color="secondary"
                multiple
              >
                <template #selection="{ item, index }">
                  <v-chip
                    :key="index"
                    color="secondary"
                    closable
                    size="small"
                    @click:close="removeItem(item)"
                  >
                    {{ item }}
                  </v-chip>
                </template>
              </v-combobox>

              <div class="my-6" />

              <BaseSubheading class="mb-6"> Progress Bar </BaseSubheading>

              <v-progress-linear
                color="secondary"
                :model-value="30"
              />

              <div class="my-6" />

              <v-progress-linear
                color="info"
                :model-value="60"
              />

              <div class="my-6" />

              <v-progress-linear
                :model-value="40"
                color="warning"
                buffer-value="0"
                stream
              />

              <div class="my-6" />

              <BaseSubheading class="mb-6"> File Input </BaseSubheading>

              <v-file-input
                v-model="files"
                color="deep-purple-accent-4"
                counter
                label="File input"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                variant="outlined"
                :display-size="1000"
              >
                <template #selection="{ fileNames }">
                  <v-chip
                    v-for="(name, index) in fileNames.slice(0, 2)"
                    :key="index"
                    color="deep-purple-accent-4"
                    label
                    size="small"
                  >
                    {{ name }}
                  </v-chip>

                  <span
                    v-if="fileNames.length > 2"
                    class="text-overline text-grey-darken-3 mx-2"
                  >
                    +{{ fileNames.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <BaseSubheading> Customizable Select </BaseSubheading>

              <v-select
                v-model="movie"
                color="secondary"
                item-color="secondary"
                label="Movie"
                :items="movies"
              >
                <template #item="{ item, props }">
                  <v-list-item
                    v-bind="props"
                    active-class="secondary elevation-4 text-white"
                    class="mx-3 mb-3 v-sheet"
                    elevation="0"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </template>
              </v-select>

              <v-select
                v-model="selectedMovies"
                color="secondary"
                item-color="secondary"
                label="Movie"
                multiple
                :items="movies"
              >
                <template #item="{ item, props }">
                  <v-list-item
                    v-bind="props"
                    active-class="secondary elevation-4 text-white"
                    class="mx-3 mb-2 v-sheet"
                    elevation="0"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>

                    <v-scale-transition>
                      <v-icon
                        v-if="selectedMovies.includes(item)"
                        class="my-3"
                      >
                        mdi-check
                      </v-icon>
                    </v-scale-transition>
                  </v-list-item>
                </template>
              </v-select>

              <div class="my-3" />

              <BaseSubheading class="mb-6"> Dropdown & Dropup </BaseSubheading>

              <v-row
                class="mb-6"
                density="compact"
              >
                <v-col cols="auto">
                  <BaseMaterialDropdown
                    :items="dropdown"
                    color="success"
                  >
                    MultiLevel Dropdown
                  </BaseMaterialDropdown>
                </v-col>

                <v-col cols="auto">
                  <BaseMaterialDropdown
                    :items="dropdown"
                    color="success"
                    origin="top right"
                  >
                    Dropdown
                  </BaseMaterialDropdown>
                </v-col>

                <v-col cols="auto">
                  <BaseMaterialDropdown
                    :items="dropdown"
                    color="success"
                    origin="bottom right"
                    location="top"
                  >
                    Dropup
                  </BaseMaterialDropdown>
                </v-col>
              </v-row>

              <BaseSubheading> Sliders </BaseSubheading>

              <v-slider
                v-model="slider"
                :max="max"
                :min="min"
                color="secondary"
              />

              <v-range-slider
                v-model="slider2"
                color="info"
                track-color="info-lighten-4"
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
