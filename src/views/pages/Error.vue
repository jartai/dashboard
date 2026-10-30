<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'

defineOptions({ name: 'PagesError' })
</script>

<template>
  <AuthLayout>
    <v-container
      class="error-page"
      tag="section"
    >
      <v-row
        class="text-center"
        justify="center"
      >
        <v-col cols="auto">
          <h1 class="text-h6 font-weight-black">404</h1>

          <div class="text-h2 mb-5 mt-10">Page not found :(</div>

          <v-btn
            color="primary"
            to="/"
            variant="flat"
          >
            Get me out of here!
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </AuthLayout>
</template>

<style lang="scss">
.error-page h1 {
  font-size: 12rem;
  letter-spacing: 14px;
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 100px;
}
</style>
