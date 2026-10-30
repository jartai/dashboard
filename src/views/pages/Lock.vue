<script setup lang="ts">
import PagesBtn from '@/views/pages/components/Btn.vue'

import avatar from '@/assets/avatar.jpg'

defineOptions({ name: 'PagesLock' })
</script>

<template>
  <v-container
    id="lock"
    class="fill-height"
    tag="section"
  >
    <v-row justify="center">
      <v-slide-y-transition appear>
        <v-card
          class="mt-6 mt-md-0"
          max-width="100%"
          width="250"
        >
          <v-card-text class="text-center">
            <v-avatar
              class="mt-n12 mb-6 elevation-12"
              color="grey"
              size="88"
            >
              <v-img :src="avatar" />
            </v-avatar>

            <div class="text-h3 font-weight-light mb-3 text-grey-darken-2">Tania Andrew</div>

            <v-text-field
              class="mb-8"
              color="secondary"
              label="Enter Password"
            />

            <PagesBtn> Unlock </PagesBtn>
          </v-card-text>
        </v-card>
      </v-slide-y-transition>
    </v-row>
  </v-container>
</template>
