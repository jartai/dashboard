<script setup lang="ts">
import { useDisplay } from 'vuetify'
import PagesBtn from '@/views/pages/components/Btn.vue'
import PagesHeading from '@/views/pages/components/Heading.vue'

defineOptions({ name: 'PagesRegister' })

const { mdAndUp } = useDisplay()

const sections = [
  {
    icon: 'mdi-chart-timeline-variant',
    iconColor: 'primary',
    title: 'Marketing',
    text: "We've created the marketing campaign of the website. It was a very interesting collaboration.",
  },
  {
    icon: 'mdi-code-tags',
    iconColor: 'secondary',
    title: 'Fully Coded in HTML5',
    text: "We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.",
  },
  {
    icon: 'mdi-account-multiple',
    iconColor: 'cyan',
    title: 'Built Audience',
    text: 'There is also a Fully Customizable CMS Admin Dashboard for this product.',
  },
]

const socials = [
  { href: '#', icon: 'mdi-twitter', iconColor: '#1DA1F2' },
  { href: '#', icon: 'mdi-dribbble', iconColor: '#ea4c89' },
  { href: '#', icon: 'mdi-facebook', iconColor: '#3B5998' },
]
</script>

<template>
  <v-container
    id="register"
    class="fill-height"
    tag="section"
  >
    <v-row justify="center">
      <v-col cols="9">
        <v-slide-y-transition appear>
          <v-card class="pa-3 pa-md-5 mx-auto">
            <PagesHeading class="text-center text-h2"> Register </PagesHeading>

            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <v-row no-gutters>
                  <v-col
                    v-for="(section, i) in sections"
                    :key="i"
                    cols="12"
                  >
                    <v-list-item lines="three">
                      <template #prepend>
                        <v-icon
                          class="mr-4 mt-5 mt-md-4"
                          :color="section.iconColor"
                          :size="mdAndUp ? 'large' : undefined"
                        >
                          {{ section.icon }}
                        </v-icon>
                      </template>

                      <v-list-item-title class="font-weight-light mb-4 mt-3">
                        {{ section.title }}
                      </v-list-item-title>

                      <v-list-item-subtitle>
                        {{ section.text }}
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <div class="text-center">
                  <v-btn
                    v-for="(social, i) in socials"
                    :key="i"
                    class="my-2 mr-1"
                    :color="social.iconColor"
                    icon
                    size="small"
                    variant="flat"
                  >
                    <v-icon>{{ social.icon }}</v-icon>
                  </v-btn>

                  <div class="my-2" />

                  <div class="text-center text-grey text-body-1 font-weight-light">
                    Or Be Classical
                  </div>

                  <v-text-field
                    color="secondary"
                    label="First Name..."
                    prepend-icon="mdi-face"
                  />

                  <v-text-field
                    color="secondary"
                    label="Email..."
                    prepend-icon="mdi-email"
                  />

                  <v-text-field
                    class="mb-8"
                    color="secondary"
                    label="Password..."
                    prepend-icon="mdi-lock-outline"
                  />

                  <v-checkbox
                    color="secondary"
                    :model-value="true"
                  >
                    <template #label>
                      <span class="text-no-wrap">I agree to the&nbsp;</span>

                      <a
                        class="text-secondary ml-6 ml-sm-0"
                        href="#"
                      >
                        terms and conditions </a
                      >.
                    </template>
                  </v-checkbox>

                  <PagesBtn color="success"> Get Started </PagesBtn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#register .v-list-item-subtitle {
  -webkit-line-clamp: initial;
  line-clamp: initial;
  -webkit-box-orient: initial;
}
</style>
