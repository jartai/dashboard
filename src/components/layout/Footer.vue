<template>
  <v-footer>
    <v-container>
      <v-row
        align="center"
        no-gutters
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>

        <v-spacer class="hidden-sm-and-down" />

        <v-col
          class="text-center"
          cols="12"
          md="auto"
        >
          <div class="text-body-2 font-weight-light pt-6 pt-md-0">
            &copy; 2026, made with
            <v-icon size="18">mdi-heart</v-icon>
            by
            <a href="https://www.creative-tim.com">Creative Tim</a>
            for a better web.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
  const links = [
    { href: '#', text: 'Creative Tim' },
    { href: '#', text: 'About Us' },
    { href: '#', text: 'Blog' },
    { href: '#', text: 'Licenses' },
  ]
</script>
