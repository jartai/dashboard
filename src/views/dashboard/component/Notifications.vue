<script setup lang="ts">
import { ref } from 'vue'
import type { AlertType } from '@/types/alert'

defineOptions({ name: 'Notifications' })

const color = ref<AlertType>('info')

const colors: AlertType[] = ['info', 'success', 'warning', 'error']

const dialog = ref(false)
const dialog2 = ref(false)
const dialog3 = ref(false)

const direction = ref('top center')

const directions: string[] = [
  'top left',
  'top center',
  'top right',
  'bottom left',
  'bottom center',
  'bottom right',
]

const snackbar = ref(false)

function randomColor() {
  color.value = colors[Math.floor(Math.random() * colors.length)] ?? 'info'
}
</script>

<template>
  <v-container
    id="alerts"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Alerts"
      link="components/alerts"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <BaseSubheading subheading="Notification Style" />

            <BaseMaterialAlert color="info"> This is a plain notification. </BaseMaterialAlert>

            <BaseMaterialAlert
              color="info"
              dismissible
            >
              This is a notification with close button.
            </BaseMaterialAlert>

            <BaseMaterialAlert
              color="info"
              dismissible
              icon="mdi-bell"
            >
              This is a notification with close button and icon and have many lines. You can see
              that the icon and the close button are always vertically aligned. This is a beautiful
              notification. So you don't have to worry about the style.
            </BaseMaterialAlert>

            <BaseMaterialAlert
              color="primary"
              dismissible
              icon="mdi-bell"
            >
              You can see that the icon and the close button are always vertically aligned. This is
              a beautiful notification. So you don't have to worry about the style.
            </BaseMaterialAlert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <BaseSubheading subheading="Notification states" />

            <BaseMaterialAlert
              v-for="stateColor in colors"
              :key="stateColor"
              :color="stateColor"
              dismissible
            >
              <span
                class="text-uppercase"
                v-text="stateColor"
              />
              — This is a regular alert made with the color of "{{ stateColor }}"
            </BaseMaterialAlert>

            <BaseMaterialAlert
              color="secondary"
              dismissible
            >
              <span>PRIMARY</span> — This is a regular alert made with the color "secondary"
            </BaseMaterialAlert>

            <BaseMaterialAlert
              color="pink darken-1"
              dismissible
            >
              <span>PINK DARKEN-1</span> — This is a regular alert made with the color "pink
              darken-1"
            </BaseMaterialAlert>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-text class="text-center">
            <BaseSubheading
              class="text-center"
              subheading="Snackbar Locations"
            />

            <v-row
              class="mt-n12"
              justify="center"
            >
              <v-col cols="6">
                <v-row>
                  <v-col
                    v-for="dir in directions"
                    :key="dir"
                    cols="4"
                  >
                    <v-btn
                      color="secondary"
                      block
                      class="v-btn--block"
                      @click="(randomColor(), (direction = dir), (snackbar = true))"
                    >
                      {{ dir }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <BaseSubheading
              class="text-center"
              subheading="Dialogs"
            />

            <v-row
              class="mt-n12"
              justify="center"
            >
              <v-col cols="6">
                <v-row>
                  <v-col cols="4">
                    <v-btn
                      color="secondary"
                      rounded="pill"
                      @click="dialog = true"
                    >
                      Classic Dialog
                    </v-btn>
                  </v-col>

                  <v-col cols="4">
                    <v-btn
                      color="info"
                      rounded="pill"
                      @click="dialog2 = true"
                    >
                      Notice Modal
                    </v-btn>
                  </v-col>

                  <v-col cols="4">
                    <v-btn
                      color="pink darken-1"
                      rounded="pill"
                      @click="dialog3 = true"
                    >
                      Small Alert Modal
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <BaseMaterialSnackbar
      v-model="snackbar"
      :type="color"
      :location="direction"
    >
      Welcome to <span class="font-weight-bold">&nbsp;MATERIAL DASHBOARD PRO&nbsp;</span> — a
      beautiful admin panel for every web developer.
    </BaseMaterialSnackbar>

    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <v-card class="text-center">
        <v-card-title>
          Dialog Title
          <v-spacer />
          <v-icon
            aria-label="Close"
            @click="dialog = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
          parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
          about the blind texts it is an almost unorthographic life One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="error"
            variant="text"
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog2"
      max-width="500"
    >
      <v-card>
        <v-card-title>
          How do you become an affiliate?
          <v-spacer />
          <v-icon
            aria-label="Close"
            @click="dialog2 = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="text-body-1 text-center">
          <v-row>
            <v-col
              cols="12"
              md="8"
            >
              <div>
                <div>
                  <strong>1. Register</strong>
                </div>

                <div class="text-grey">
                  The first step is to create an account at Creative Tim. You can choose a social
                  network or go for the classic version, whatever works best for you.
                </div>
              </div>
            </v-col>

            <v-col
              class="d-none d-md-block"
              md="4"
            >
              <v-sheet>
                <v-img
                  src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-1.jpg"
                  height="100"
                  width="200"
                />
              </v-sheet>
            </v-col>

            <v-col
              cols="12"
              md="8"
            >
              <div>
                <div>
                  <strong>2. Apply</strong>
                </div>

                <div class="text-grey">
                  The first step is to create an account at
                  <a href="http://www.creative-tim.com/">Creative Tim</a>. You can choose a social
                  network or go for the classic version, whatever works best for you.
                </div>
              </div>
            </v-col>

            <v-col
              class="d-none d-md-block"
              md="4"
            >
              <v-sheet>
                <v-img
                  src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/card-2.jpg"
                  height="100"
                  width="200"
                />
              </v-sheet>
            </v-col>

            <v-col cols="12">
              If you have more questions, don't hesitate to contact us or send us a tweet
              @creativetim. We're here to help!
            </v-col>
          </v-row>

          <v-btn
            class="mt-6"
            color="info"
            variant="flat"
            rounded="pill"
            @click="dialog2 = false"
          >
            Sounds good
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialog3"
      max-width="300"
    >
      <v-card>
        <v-card-title>
          Are you sure?
          <v-spacer />
          <v-icon
            aria-label="Close"
            @click="dialog3 = false"
          >
            mdi-close
          </v-icon>
        </v-card-title>

        <v-card-text class="pb-6 pt-12 text-center">
          <v-btn
            class="mr-3"
            variant="text"
            @click="dialog3 = false"
          >
            Nevermind
          </v-btn>

          <v-btn
            color="success"
            variant="text"
            @click="dialog3 = false"
          >
            Yes
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>
