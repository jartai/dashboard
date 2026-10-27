<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useTheme } from 'vuetify'
import { useUiStore } from '@/stores/ui'

defineOptions({ name: 'DashboardCoreSettings' })

const ui = useUiStore()
const theme = useTheme()

const menu = ref(false)
const saveImage = ref('')

const color = ref('#E91E63')
const colors = ['#9C27b0', '#00CAE3', '#4CAF50', '#ff9800', '#E91E63', '#FF5252']

const image = ref('https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg')
const images = [
  'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-1.jpg',
  'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-2.jpg',
  'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-3.jpg',
  'https://demos.creative-tim.com/material-dashboard-pro/assets/img/sidebar-4.jpg',
]

const scrim = ref('rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)')
const scrims = [
  'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  'rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)',
  'rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)',
]

const showImg = ref(true)

const isDark = computed({
  get: () => theme.global.current.value.dark,
  set: (val: boolean) => {
    theme.change(val ? 'dark' : 'light')
  },
})

watch(color, (val) => {
  theme.themes.value[isDark.value ? 'dark' : 'light']!.colors.primary = val
})

watch(scrim, (val) => {
  ui.setBarColor(val)
})

watch(image, (val) => {
  ui.setBarImage(val)
})

watch(showImg, (val) => {
  if (!val) {
    saveImage.value = ui.barImage
    ui.setBarImage('')
  } else if (saveImage.value) {
    ui.setBarImage(saveImage.value)
    saveImage.value = ''
  } else {
    ui.setBarImage(val as unknown as string)
  }
})
</script>

<template>
  <div id="settings-wrapper">
    <v-card
      id="settings"
      class="py-2 px-4"
      color="rgba(0, 0, 0, .3)"
      theme="dark"
      flat
      link
      min-width="100"
      style="position: fixed; top: 115px; right: -35px; border-radius: 8px"
    >
      <v-icon size="large">mdi-settings</v-icon>
    </v-card>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#settings"
      location="start"
      content-class="v-settings"
      origin="top right"
      transition="scale-transition"
    >
      <v-card
        class="text-center mb-0"
        width="300"
      >
        <v-card-text>
          <strong class="mb-3 d-inline-block">SIDEBAR FILTERS</strong>

          <v-item-group v-model="color">
            <v-item
              v-for="c in colors"
              :key="c"
              :value="c"
            >
              <template #default="{ isSelected, toggle }">
                <v-avatar
                  :class="isSelected && 'v-settings__item--active'"
                  :color="c"
                  class="v-settings__item"
                  size="25"
                  @click="toggle"
                />
              </template>
            </v-item>
          </v-item-group>

          <v-divider class="my-4 secondary" />

          <strong class="mb-3 d-inline-block">SIDEBAR BACKGROUND</strong>

          <v-item-group v-model="scrim">
            <v-item
              v-for="s in scrims"
              :key="s"
              :value="s"
              class="mx-1"
            >
              <template #default="{ isSelected, toggle }">
                <v-avatar
                  :class="isSelected && 'v-settings__item--active'"
                  :color="s"
                  class="v-settings__item"
                  size="24"
                  @click="toggle"
                />
              </template>
            </v-item>
          </v-item-group>

          <v-divider class="my-4 secondary" />

          <v-row
            class="align-center"
            gap="0"
          >
            <v-col cols="auto">Dark Mode</v-col>
            <v-spacer />
            <v-col cols="auto">
              <v-switch
                v-model="isDark"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <v-row
            class="align-center"
            gap="0"
          >
            <v-col cols="auto">Sidebar Mini</v-col>
            <v-spacer />
            <v-col cols="auto">
              <v-switch
                v-model="ui.expandOnHover"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <v-row
            class="align-center"
            gap="0"
          >
            <v-col cols="auto">Sidebar Image</v-col>
            <v-spacer />
            <v-col cols="auto">
              <v-switch
                v-model="showImg"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>

          <v-divider class="my-4 secondary" />

          <strong class="mb-3 d-inline-block">IMAGES</strong>

          <v-item-group
            v-model="image"
            class="d-flex justify-space-between mb-3"
          >
            <v-item
              v-for="img in images"
              :key="img"
              :value="img"
              class="mx-1"
            >
              <template #default="{ isSelected, toggle }">
                <v-sheet
                  :class="isSelected && 'v-settings__item--active'"
                  class="d-inline-block v-settings__item"
                  @click="toggle"
                >
                  <v-img
                    :src="img"
                    height="100"
                    width="50"
                  />
                </v-sheet>
              </template>
            </v-item>
          </v-item-group>

          <v-btn
            block
            class="mb-3"
            color="success"
            href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro"
            rel="noopener"
            target="_blank"
          >
            Buy Now
          </v-btn>

          <v-btn
            block
            class="mb-3"
            color="grey-darken-1"
            theme="dark"
            href="https://vuetifyjs.com/components/api-explorer"
            rel="noopener"
            target="_blank"
          >
            Documentation
          </v-btn>

          <v-btn
            block
            color="info"
            href="https://www.creative-tim.com/product/vuetify-material-dashboard"
            rel="noopener"
            target="_blank"
          >
            Get Free Demo
          </v-btn>

          <div class="my-12" />

          <div>
            <strong class="mb-3 d-inline-block">THANK YOU FOR SHARING!</strong>
          </div>

          <v-btn
            class="ma-1"
            color="#55acee"
            theme="dark"
            rounded
          >
            <v-icon>mdi-twitter</v-icon> - 45
          </v-btn>

          <v-btn
            class="ma-1"
            color="#3b5998"
            theme="dark"
            rounded
          >
            <v-icon>mdi-facebook</v-icon> - 50
          </v-btn>
        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<style lang="scss">
.v-settings .v-item-group > * {
  cursor: pointer;
}

.v-settings__item {
  border-width: 3px;
  border-style: solid;
  border-color: transparent !important;
}

.v-settings__item--active {
  border-color: #00cae3 !important;
}
</style>
