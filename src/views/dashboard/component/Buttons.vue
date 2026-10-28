<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'Buttons' })

interface SocialButton {
  color: string
  icon: string
  text: string
}

const colors = ['default', 'secondary', 'info', 'success', 'warning', 'error'] as const

const directions = ['left', 'right'] as const

const icons = {
  left: 'mdi-chevron-left',
  right: 'mdi-chevron-right',
  info: 'mdi-exclamation',
  success: 'mdi-check',
  warning: 'mdi-alert',
  error: 'mdi-close',
} as const

const social: SocialButton[] = [
  { color: '#55ACEE', icon: 'mdi-twitter', text: 'Connect with Twitter' },
  { color: '#3B5998', icon: 'mdi-facebook', text: 'Share - 2.2K' },
  { color: '#DD4b39', icon: 'mdi-google-plus', text: 'Share on Google+' },
  { color: '#0976B4', icon: 'mdi-linkedin', text: 'Connect with LinkedIn' },
  { color: '#CC2127', icon: 'mdi-pinterest', text: 'Pint It - 212' },
  { color: '#E52D27', icon: 'mdi-youtube', text: 'View on Youtube' },
  { color: '#35465C', icon: 'mdi-tumblr', text: 'Repost' },
  { color: '#333333', icon: 'mdi-github-circle', text: 'Connect with Github' },
  { color: '#1769FF', icon: 'mdi-behance', text: 'Follow Us' },
  { color: '#EA4C89', icon: 'mdi-dribbble', text: 'Follow us on Dribbble' },
  { color: '#FF4500', icon: 'mdi-reddit', text: 'Repost - 232' },
]

const page1 = ref(1)
const page2 = ref(2)

const group1 = ref<unknown>()
const group2 = ref<unknown>()
const group3 = ref<unknown>()
</script>

<template>
  <v-container
    id="buttons"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Buttons"
      link="components/buttons"
    />

    <v-card>
      <v-card-text class="pt-0">
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Pick your Color</h5>
            </BaseSubheading>

            <div>
              <v-btn
                v-for="(color, i) in colors"
                :key="i"
                :color="color === 'default' ? undefined : color"
                class="ma-1"
              >
                {{ color }}
              </v-btn>
            </div>
          </v-col>

          <v-col
            class="pt-0"
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Buttons with Label</h5>
            </BaseSubheading>

            <div>
              <v-btn
                v-for="(dir, i) in directions"
                :key="i"
                class="ma-1"
              >
                <v-icon
                  :start="dir === 'left'"
                  :end="dir === 'right'"
                  :class="dir === 'right' && 'order-last'"
                >
                  {{ icons[dir] }}
                </v-icon>
                {{ dir }}
              </v-btn>

              <v-btn
                v-for="(color, i) in colors.slice(2)"
                :key="`btn-${i}`"
                :color="color"
                class="ma-1"
              >
                <v-icon start>{{ icons[color as keyof typeof icons] }}</v-icon>
                {{ color }}
              </v-btn>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Pick your Size</h5>
            </BaseSubheading>

            <v-btn
              v-for="n in 3"
              :key="n"
              :size="n === 1 ? 'small' : n === 3 ? 'large' : undefined"
              class="ma-1"
              color="secondary"
            >
              {{ n === 1 ? 'small' : n === 2 ? 'regular' : 'large' }}
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Pick your Style</h5>
            </BaseSubheading>

            <v-btn
              class="ma-1"
              color="secondary"
            >
              Default
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              rounded="pill"
            >
              Rounded
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              rounded="pill"
            >
              <v-icon start> mdi-heart </v-icon>
              With Icon
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              icon
              size="small"
            >
              <v-icon> mdi-heart </v-icon>
            </v-btn>

            <v-btn
              class="ma-1"
              color="secondary"
              variant="text"
            >
              Simple
            </v-btn>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Pagination</h5>
            </BaseSubheading>

            <v-pagination
              v-model="page1"
              :length="5"
              rounded="circle"
              class="justify-start"
            />

            <v-pagination
              v-model="page2"
              :length="3"
              rounded="circle"
              class="justify-start"
              next-icon="mdi-menu-right"
              prev-icon="mdi-menu-left"
            />
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <BaseSubheading>
              <h5 class="font-weight-light">Button Group</h5>
            </BaseSubheading>

            <v-sheet>
              <v-btn-toggle
                v-model="group1"
                color="teal"
              >
                <v-btn
                  v-for="dir in ['left', 'middle', 'right']"
                  :key="dir"
                >
                  {{ dir }}
                </v-btn>
              </v-btn-toggle>
            </v-sheet>

            <div class="my-6" />

            <v-btn-toggle
              v-model="group2"
              color="teal"
              rounded="pill"
            >
              <v-btn
                v-for="n in 4"
                :key="n"
              >
                {{ n }}
              </v-btn>
            </v-btn-toggle>

            <div class="my-2" />

            <v-btn-toggle
              v-model="group3"
              color="teal"
              rounded="pill"
            >
              <v-btn
                v-for="n in 3"
                :key="n"
              >
                {{ n + 4 }}
              </v-btn>
            </v-btn-toggle>
          </v-col>

          <template
            v-for="(s, i) in social"
            :key="i"
          >
            <v-col
              cols="12"
              class="py-1"
            >
              <BaseSubheading v-if="i === 0">
                <h5 class="font-weight-light">Social buttons</h5>
              </BaseSubheading>

              <v-row density="compact">
                <v-col
                  cols="auto"
                  md="4"
                  sm="5"
                >
                  <v-btn :color="s.color">
                    <v-icon start>{{ s.icon }}</v-icon>
                    {{ s.text }}
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    :color="s.color"
                    min-width="0"
                    max-width="41"
                  >
                    <v-icon>{{ s.icon }}</v-icon>
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    :color="s.color"
                    icon
                    min-width="0"
                    size="small"
                  >
                    <v-icon>{{ s.icon }}</v-icon>
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="1"
                  sm="1"
                >
                  <v-btn
                    :color="s.color"
                    icon
                    min-width="0"
                  >
                    <v-icon :color="s.color">{{ s.icon }}</v-icon>
                  </v-btn>
                </v-col>

                <v-col
                  cols="auto"
                  md="3"
                  sm="4"
                >
                  <v-btn
                    :color="s.color"
                    variant="text"
                  >
                    <v-icon
                      start
                      :color="s.color"
                    >
                      {{ s.icon }}
                    </v-icon>
                    {{ s.text }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>
