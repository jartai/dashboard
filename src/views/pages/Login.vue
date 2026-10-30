<script setup lang="ts">
import PagesBtn from '@/views/pages/components/Btn.vue'

defineOptions({ name: 'PagesLogin' })

const socials = [
  { href: '#', icon: 'mdi-facebook-box' },
  { href: '#', icon: 'mdi-twitter' },
  { href: '#', icon: 'mdi-github-box' },
]
</script>

<template>
  <v-container
    id="login"
    class="fill-height"
    tag="section"
  >
    <v-row justify="center">
      <v-slide-y-transition appear>
        <BaseMaterialCard
          class="px-5 py-3"
          color="success"
          max-width="100%"
          width="400"
        >
          <template #heading>
            <div class="text-center">
              <h1 class="text-h3 font-weight-bold mb-2">Login</h1>

              <v-btn
                v-for="(social, i) in socials"
                :key="i"
                class="m-1"
                :href="social.href"
                icon
                rel="noopener"
                target="_blank"
              >
                <v-icon>{{ social.icon }}</v-icon>
              </v-btn>
            </div>
          </template>

          <v-card-text class="text-center">
            <div class="text-center text-grey text-body-1 font-weight-light">Or Be Classical</div>

            <v-text-field
              class="mt-10"
              color="secondary"
              label="First Name..."
              prepend-inner-icon="mdi-face"
            />

            <v-text-field
              color="secondary"
              label="Email..."
              prepend-inner-icon="mdi-email"
            />

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Password..."
              prepend-inner-icon="mdi-lock-outline"
            />

            <PagesBtn
              color="success"
              size="large"
              variant="text"
            >
              Let's Go
            </PagesBtn>
          </v-card-text>
        </BaseMaterialCard>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#login .v-card .v-card--material__heading .v-icon {
  font-size: 20px;
}
</style>
