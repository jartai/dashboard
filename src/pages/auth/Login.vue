<template>
  <v-card
    class="px-5 py-3"
    max-width="400"
    width="100%"
  >
    <v-card-title class="text-center">
      <h1 class="text-headline-large font-weight-bold mb-2">Login</h1>

      <v-btn
        v-for="(social, i) in socials"
        :key="i"
        class="ma-1"
        :href="social.href"
        :icon="social.icon"
        rel="noopener"
        target="_blank"
      />
    </v-card-title>

    <v-card-text>
      <div class="text-body-large font-weight-light text-center">Or Be Classical</div>

      <v-text-field
        class="mt-10"
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

      <v-btn
        block
        color="success"
        size="large"
      >
        Let's Go
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  const socials = [
    { href: '#', icon: 'mdi-facebook' },
    { href: '#', icon: 'mdi-twitter' },
    { href: '#', icon: 'mdi-github' },
  ]
</script>
