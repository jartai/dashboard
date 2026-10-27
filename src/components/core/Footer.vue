<script setup lang="ts">
defineOptions({ name: 'DashboardCoreFooter' })

// Static, so a plain const — no reactivity needed.
const links = [
  { href: '#', text: 'Creative Tim' },
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Blog' },
  { href: '#', text: 'Licenses' },
]
</script>

<template>
  <v-footer id="dashboard-core-footer">
    <v-container>
      <v-row
        class="align-center"
        gap="0"
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center mb-sm-0 mb-5"
          cols="auto"
        >
          <a
            :href="link.href"
            class="mr-0"
            rel="noopener"
            target="_blank"
            v-text="link.text"
          />
        </v-col>
        <v-spacer class="d-none d-md-block" />
        <v-col
          cols="12"
          md="auto"
        >
          <div class="text-body-large font-weight-light pt-6 pt-md-0 text-center">
            &copy; 2019, made with
            <v-icon
              icon="mdi-heart"
              size="18"
            />
            by <a href="https://www.creative-tim.com">Creative Tim</a> for a better web.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style lang="scss">
#dashboard-core-footer a {
  color: #3c4858;
  font-size: 0.825rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
