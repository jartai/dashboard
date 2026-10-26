<script setup lang="ts">
defineOptions({ name: 'PagesCoreFooter' })

const links = [
  { href: '#', text: 'Creative Tim' },
  { href: '#', text: 'About Us' },
  { href: '#', text: 'Blog' },
  { href: '#', text: 'Licenses' },
]
</script>

<template>
  <v-footer
    id="pages-core-footer"
    absolute
    color="transparent"
  >
    <v-container>
      <v-row
        class="align-center"
        no-gutters
      >
        <v-col
          v-for="(link, i) in links"
          :key="i"
          class="text-center"
          cols="6"
          md="auto"
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
              size="20"
            />
            by Creative Tim for a better web.
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<style scoped>
#pages-core-footer a {
  color: #ffffff;
  font-size: 0.825rem;
  font-weight: 500;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
