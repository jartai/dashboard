<template>
  <v-card class="pa-3 pa-md-5 mx-auto">
    <h1 class="text-display-medium text-center">Register</h1>

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-list>
          <v-list-item
            v-for="(section, i) in sections"
            :key="i"
          >
            <template #prepend>
              <v-icon :color="section.iconColor">{{ section.icon }}</v-icon>
            </template>

            <v-list-item-title class="font-weight-light mb-2">{{ section.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ section.text }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
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
            :icon="social.icon"
            size="small"
          />

          <div class="my-2" />

          <div class="text-body-large font-weight-light text-center">Or Be Classical</div>

          <v-text-field
            label="First Name..."
            prepend-inner-icon="mdi-face"
          />

          <v-text-field
            label="Email..."
            prepend-inner-icon="mdi-email"
          />

          <v-text-field
            class="mb-8"
            label="Password..."
            prepend-inner-icon="mdi-lock-outline"
            type="password"
          />

          <v-checkbox
            v-model="agreed"
            color="secondary"
          >
            <template #label>
              <span class="text-no-wrap">I agree to the&nbsp;</span>

              <a
                class="ml-6 ml-sm-0"
                href="#"
              >terms and conditions</a>.
            </template>
          </v-checkbox>

          <v-btn
            block
            color="success"
          >
            Get Started
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const agreed = ref(true)

  const sections = [
    {
      icon: 'mdi-chart-timeline-variant',
      iconColor: 'primary',
      title: 'Marketing',
      text: 'We have created the marketing campaign of the website. It was a very interesting collaboration.',
    },
    {
      icon: 'mdi-code-tags',
      iconColor: 'secondary',
      title: 'Fully Coded in HTML5',
      text: 'We have developed the website with HTML5 and CSS3. The client has access to the code using GitHub.',
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
