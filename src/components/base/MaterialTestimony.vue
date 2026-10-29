<script setup lang="ts">
defineOptions({ name: 'BaseMaterialTestimony' })

withDefaults(
  defineProps<{
    author?: string
    avatar?: string
    blurb?: string
    handle?: string
  }>(),
  {
    author: '',
    avatar:
      'https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/card-profile1-square.jpg',
    blurb: '',
    handle: '',
  },
)
</script>

<template>
  <v-card class="text-center v-card--testimony">
    <div class="pt-6">
      <v-icon
        color="black"
        size="x-large"
      >
        mdi-format-quote-close
      </v-icon>
    </div>

    <v-card-text class="text-h4 font-weight-light font-italic mb-3">
      {{ blurb }}
    </v-card-text>

    <div
      class="text-h3 font-weight-light mb-2"
      v-text="author"
    />

    <div
      class="text-body-2 text-uppercase text-grey"
      v-text="handle"
    />

    <v-avatar
      color="grey"
      size="100"
    >
      <v-img
        :alt="`${author} Testimonial`"
        :src="avatar"
      />
    </v-avatar>

    <div />
  </v-card>
</template>

<style lang="scss">
.v-card--testimony {
  padding-bottom: 72px;
  margin-bottom: 64px;

  .v-card-text {
    color: #999 !important;
  }

  .text-h3 {
    font-size: 18px !important;
    color: #3c4858;
  }

  .text-body-2 {
    font-weight: 500;
    font-size: 12px !important;
  }

  .v-avatar {
    position: absolute;
    left: calc(50% - 50px);
    top: calc(100% - 64px);
  }
}
</style>
