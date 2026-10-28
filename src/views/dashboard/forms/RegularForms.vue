<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'RegularForms' })

const items = ['Foo', 'Bar', 'Fizz', 'Buzz']

const zoom = ref(0)

const cbOn = ref(true)
const cbOff = ref(false)
const cbIndeterminate = ref<boolean | null>(null)
const cbOnDisabled = ref(true)
const cbOffDisabled = ref(false)

const swOn = ref(true)
const swOff = ref(false)
const swOnDisabled = ref(true)
const swDisabled = ref(false)
const swLoading = ref(true)

function zoomOut() {
  zoom.value = zoom.value - 10 || 0
}

function zoomIn() {
  zoom.value = zoom.value + 10 || 100
}
</script>

<template>
  <v-container
    id="regular-forms"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Forms"
      link="components/forms"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-email"
          title="Stacked Form"
          class="px-5 py-3"
        >
          <v-form class="mt-5">
            <v-text-field label="Email Address" />

            <v-text-field
              type="password"
              label="Password"
              class="pt-0"
            />

            <v-checkbox
              label="Subscribe to newsletter"
              class="mt-0"
            />
          </v-form>

          <v-card-actions class="pl-0">
            <v-btn
              color="success"
              min-width="100"
            >
              Submit
            </v-btn>
          </v-card-actions>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-email-outline"
          title="Horizontal Form"
          class="px-5 py-3"
        >
          <v-form>
            <v-container fluid>
              <v-row
                align="center"
                no-wrap
              >
                <v-col
                  cols="3"
                  class="text-end text-grey"
                >
                  Email
                </v-col>

                <v-col>
                  <v-text-field />
                </v-col>
              </v-row>

              <v-row
                align="center"
                no-wrap
              >
                <v-col
                  class="text-end text-grey"
                  cols="3"
                >
                  Password
                </v-col>

                <v-col>
                  <v-text-field
                    type="password"
                    class="pt-0"
                  />
                </v-col>
              </v-row>

              <v-row
                align="center"
                no-wrap
                gap="0"
              >
                <v-col cols="3" />

                <v-col>
                  <v-checkbox
                    label="Subscribe to newsletter"
                    class="mt-0"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-form>

          <v-card-actions>
            <v-btn
              color="success"
              min-width="100"
              class="pl-0"
            >
              Sign In
            </v-btn>
          </v-card-actions>
        </BaseMaterialCard>
      </v-col>

      <v-col cols="12">
        <BaseMaterialCard
          color="success"
          inline
          title="Form Elements"
          class="px-5 py-3"
        >
          <div class="text-h4 mt-3">Text fields</div>

          <v-form class="pt-1">
            <v-text-field
              label="With help"
              variant="outlined"
              class="ml-4"
            />

            <v-text-field
              label="Password"
              variant="outlined"
              type="password"
              class="ml-4"
            />

            <div class="text-h4 mt-3">Checkboxes</div>

            <v-row gap="0">
              <v-col cols="2">
                <v-checkbox
                  v-model="cbOn"
                  label="On"
                  value
                  class="mt-0 ml-4"
                />
              </v-col>

              <v-col cols="2">
                <v-checkbox
                  v-model="cbOff"
                  label="Off"
                  class="mt-0 ml-4"
                />
              </v-col>

              <v-col cols="4">
                <v-checkbox
                  v-model="cbIndeterminate"
                  indeterminate
                  label="Indeterminate"
                  value
                  class="mt-0 ml-4"
                />
              </v-col>
            </v-row>

            <v-row gap="0">
              <v-col cols="2">
                <v-checkbox
                  v-model="cbOnDisabled"
                  disabled
                  label="On Disabled"
                  class="mt-0 ml-4"
                />
              </v-col>

              <v-col cols="4">
                <v-checkbox
                  v-model="cbOffDisabled"
                  disabled
                  label="Off Disabled"
                  value
                  class="mt-0 ml-4"
                />
              </v-col>
            </v-row>

            <v-row>
              <v-col
                cols="12"
                lg="3"
              >
                <div class="text-h4 mt-3">Radios</div>

                <v-radio-group class="ml-4 mt-0">
                  <v-radio
                    label="Column Option 1"
                    value="radio-1"
                  />

                  <v-radio
                    label="Column Option 2"
                    value="radio-2"
                  />
                </v-radio-group>
              </v-col>

              <v-col
                cols="12"
                lg="3"
              >
                <div class="text-h4 mt-3">Inline Radios</div>

                <v-radio-group
                  inline
                  class="ml-4 mt-0"
                >
                  <v-radio
                    label="Row Option 1"
                    value="radio-1"
                  />

                  <v-radio
                    label="Row Option 2"
                    value="radio-2"
                  />
                </v-radio-group>
              </v-col>
            </v-row>

            <div class="text-h4 mt-3">Switches</div>

            <v-row
              gap="0"
              class="ml-4"
            >
              <v-col cols="2">
                <v-switch
                  v-model="swOn"
                  label="On"
                  value
                />
              </v-col>

              <v-col cols="2">
                <v-switch
                  v-model="swOff"
                  label="Off"
                />
              </v-col>

              <v-col cols="2">
                <v-switch
                  v-model="swOnDisabled"
                  disabled
                  label="On Disabled"
                  value
                />
              </v-col>

              <v-col cols="2">
                <v-switch
                  v-model="swDisabled"
                  disabled
                  label="Disabled"
                />
              </v-col>

              <v-col cols="2">
                <v-switch
                  v-model="swLoading"
                  label="Loading"
                  loading="primary"
                  value
                />
              </v-col>
            </v-row>
          </v-form>
        </BaseMaterialCard>
      </v-col>

      <v-col cols="12">
        <BaseMaterialCard
          color="success"
          inline
          title="Input Variants"
          class="px-5 py-3"
        >
          <div class="text-h4 mt-3">Selects</div>

          <v-row
            align="center"
            class="ml-1"
          >
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="items"
                label="Standard"
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="items"
                variant="filled"
                label="Filled style"
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="items"
                label="Outlined style"
                variant="outlined"
              />
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="items"
                label="Solo field"
                variant="solo"
              />
            </v-col>
          </v-row>

          <div class="text-h4 mt-3">Sliders</div>

          <v-slider
            color="secondary"
            prepend-icon="mdi-volume-plus"
            track-color="secondary-lighten-3"
            class="ml-4"
          />

          <v-slider
            append-icon="mdi-alarm"
            class="ml-4"
          />

          <v-slider
            v-model="zoom"
            append-icon="mdi-magnify-plus-outline"
            prepend-icon="mdi-magnify-minus-outline"
            class="ml-4"
            @click:append="zoomIn"
            @click:prepend="zoomOut"
          />

          <div class="text-h4 mt-3">Textareas</div>

          <v-row class="ml-1">
            <v-col
              cols="12"
              md="6"
            >
              <v-textarea
                name="input-7-1"
                label="Default style"
                model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                hint="Hint text"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-textarea
                variant="solo"
                name="input-7-4"
                label="Solo textarea"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-textarea
                variant="filled"
                name="input-7-4"
                label="Filled textarea"
                model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-textarea
                variant="outlined"
                name="input-7-4"
                label="Outlined textarea"
                model-value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
              />
            </v-col>
          </v-row>
        </BaseMaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>
