<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'Tabs' })

interface IconTab {
  icon: string
  text: string
}

const tab = ref(0)
const nav1 = ref(0)
const nav2 = ref(0)
const nav3 = ref(0)

const tabs = ['Profile', 'Settings', 'Options']

const tabs2: IconTab[] = [
  { text: 'Home', icon: 'mdi-view-dashboard' },
  { text: 'Settings', icon: 'mdi-clock-outline' },
]

const tabs3: IconTab[] = [
  { text: 'Description', icon: 'mdi-information' },
  { text: 'Location', icon: 'mdi-map-marker' },
  { text: 'Legal Info', icon: 'mdi-gavel' },
  { text: 'Help Center', icon: 'mdi-help-circle-outline' },
]
</script>

<template>
  <v-container
    id="panels"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Tabs"
      link="components/tabs"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-card class="my-0">
          <v-card-text>
            <BaseSubheading
              subheading="Navigation Pills"
              text="Horizontal Tabs"
            />

            <BaseMaterialTabs
              v-model="nav1"
              color="warning"
            >
              <v-tab
                v-for="(tabLabel, i) in tabs"
                :key="i"
              >
                {{ tabLabel }}
              </v-tab>
            </BaseMaterialTabs>

            <v-tabs-window v-model="nav1">
              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text>
                    <p>
                      Collaboratively administrate empowered markets via plug-and-play networks.
                      Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <p>
                      Dramatically visualize customer directed convergence without revolutionary
                      ROI. Collaboratively administrate empowered markets via plug-and-play
                      networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <div>This is very nice.</div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text>
                    <p>
                      Efficiently unleash cross-media information without cross-media value. Quickly
                      maximize timely deliverables for real-time schemas.
                    </p>

                    <div>
                      Dramatically maintain clicks-and-mortar solutions without functional
                      solutions.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text>
                    <p>
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate one-to-one customer service with robust ideas.
                    </p>

                    <div>
                      Dynamically innovate resource-leveling customer service for state of the art
                      customer service.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card class="mt-0">
          <v-card-text>
            <BaseSubheading
              subheading="Navigation Pills"
              text="Vertical Tabs"
            />

            <BaseMaterialTabs
              v-model="nav2"
              color="success"
              direction="vertical"
            >
              <v-tab
                v-for="(tabLabel, i) in tabs"
                :key="i"
                class="mb-1"
              >
                {{ tabLabel }}
              </v-tab>
            </BaseMaterialTabs>

            <v-tabs-window v-model="nav2">
              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text class="pt-0">
                    <p>
                      Collaboratively administrate empowered markets via plug-and-play networks.
                      Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <p>
                      Dramatically visualize customer directed convergence without revolutionary
                      ROI. Collaboratively administrate empowered markets via plug-and-play
                      networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <div>This is very nice.</div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text class="pt-0">
                    <p>
                      Efficiently unleash cross-media information without cross-media value. Quickly
                      maximize timely deliverables for real-time schemas.
                    </p>

                    <div>
                      Dramatically maintain clicks-and-mortar solutions without functional
                      solutions.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text class="pt-0">
                    <p>
                      Completely synergize resource taxing relationships via premier niche markets.
                      Professionally cultivate one-to-one customer service with robust ideas.
                    </p>

                    <div>
                      Dynamically innovate resource-leveling customer service for state of the art
                      customer service.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <BaseSubheading subheading="Collapsible Accordion" />

            <v-expansion-panels>
              <v-expansion-panel
                v-for="n in 5"
                :key="n"
              >
                <v-expansion-panel-title> Collapsible Group Item #{{ n }} </v-expansion-panel-title>

                <v-expansion-panel-text>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                  brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                  sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                  craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't
                  heard of them accusamus labore sustainable VHS.
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        class="mb-12"
        cols="12"
        md="6"
      >
        <v-card>
          <v-card-text>
            <BaseSubheading
              subheading="Navigation Pills"
              text="Vertical Tabs"
            />

            <BaseMaterialTabs
              v-model="nav3"
              color="success"
              direction="vertical"
              icons-and-text
            >
              <v-tab
                v-for="(item, i) in tabs2"
                :key="i"
                class="mb-5"
              >
                {{ item.text }}
                <v-icon>{{ item.icon }}</v-icon>
              </v-tab>
            </BaseMaterialTabs>

            <v-tabs-window v-model="nav3">
              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text class="pt-0">
                    <p>
                      Collaboratively administrate empowered markets via plug-and-play networks.
                      Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <p>
                      Dramatically visualize customer directed convergence without revolutionary
                      ROI. Collaboratively administrate empowered markets via plug-and-play
                      networks. Dynamically procrastinate B2C users after installed base benefits.
                    </p>

                    <div>
                      Dramatically visualize customer directed convergence without revolutionary
                      ROI. Collaboratively administrate empowered markets via plug-and-play
                      networks. Dynamically procrastinate B2C users after installed base benefits.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>

              <v-tabs-window-item>
                <v-card
                  variant="flat"
                  class="my-0"
                >
                  <v-card-text class="pt-0">
                    <p>
                      Efficiently unleash cross-media information without cross-media value. Quickly
                      maximize timely deliverables for real-time schemas.
                    </p>

                    <div>
                      Dramatically maintain clicks-and-mortar solutions without functional
                      solutions.
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col
        class="mx-auto"
        cols="12"
        md="8"
      >
        <div class="text-center text-h5 font-weight-light mb-12 pl-0">Page Subcategories</div>

        <BaseMaterialTabs
          v-model="tab"
          bg-color="transparent"
          align-tabs="center"
          color="warning"
          icons-and-text
        >
          <v-tab
            v-for="(item, i) in tabs3"
            :key="i"
          >
            {{ item.text }}
            <v-icon>{{ item.icon }}</v-icon>
          </v-tab>
        </BaseMaterialTabs>

        <v-tabs-window
          v-model="tab"
          class="pt-12 transparent"
        >
          <v-tabs-window-item>
            <v-card class="mt-0 px-5">
              <v-card-text>
                <BaseSubheading subheading="Description about product">
                  <p class="text-grey text-body-2 font-weight-light">More Information here</p>
                </BaseSubheading>

                <p>
                  Collaboratively administrate empowered markets via plug-and-play networks.
                  Dynamically procrastinate B2C users after installed base benefits.
                </p>

                <div>
                  Dramatically visualize customer directed convergence without revolutionary ROI.
                  Collaboratively administrate empowered markets via plug-and-play networks.
                  Dynamically procrastinate B2C users after installed base benefits.
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item>
            <v-card class="mt-0 px-5">
              <v-card-text>
                <BaseSubheading subheading="Location of the product product">
                  <p class="text-grey text-body-2 font-weight-light">More Information here</p>
                </BaseSubheading>

                <p>
                  Efficiently unleash cross-media information without cross-media value. Quickly
                  maximize timely deliverables for real-time schemas.
                </p>

                <div>
                  Dramatically maintain clicks-and-mortar solutions without functional solutions
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item>
            <v-card class="mt-0 px-5">
              <v-card-text>
                <BaseSubheading subheading="Legal info of the product product">
                  <p class="text-grey text-body-2 font-weight-light">More Information here</p>
                </BaseSubheading>

                <p>
                  Completely synergize resource taxing relationships via premier niche markets.
                  Professionally cultivate one-to-one customer service with robust ideas.
                </p>

                <div>
                  Dynamically innovate resource-leveling customer service for state of the art
                  customer service.
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>

          <v-tabs-window-item>
            <v-card class="mt-0 px-5">
              <v-card-text>
                <BaseSubheading subheading="Help center">
                  <p class="text-grey text-body-2 font-weight-light">More Information here</p>
                </BaseSubheading>

                <p>
                  From the seamless transition of glass and metal to the streamlined profile, every
                  detail was carefully considered to enhance your experience. So while its display
                  is larger, the phone feels just right.
                </p>

                <div>
                  Another Text. The first thing you notice when you hold the phone is how great it
                  feels in your hand. The cover glass curves down around the sides to meet the
                  anodized aluminum enclosure in a remarkable, simplified design.
                </div>
              </v-card-text>
            </v-card>
          </v-tabs-window-item>
        </v-tabs-window>
      </v-col>
    </v-row>
  </v-container>
</template>
