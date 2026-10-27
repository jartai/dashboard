<script setup lang="ts">
import PagesBtn from '@/views/pages/components/Btn.vue'

defineOptions({ name: 'PagesPlanCard' })

interface Plan {
  best?: boolean
  heading?: string
  icon?: string
  text?: string
  title?: string
}

withDefaults(defineProps<{ plan?: Plan }>(), {
  plan: () => ({
    best: false,
    heading: undefined,
    icon: undefined,
    text: undefined,
    title: undefined,
  }),
})
</script>

<template>
  <v-card
    class="v-card--plan mx-auto pt-3 pb-4 px-2 text-center"
    :color="plan.best ? undefined : 'transparent'"
    :elevation="plan.best ? undefined : 0"
    max-width="100%"
    :theme="plan.best ? 'light' : undefined"
  >
    <div
      class="text-body-2 text-uppercase text-grey"
      v-text="plan.heading"
    />

    <v-avatar size="130">
      <v-icon
        :color="plan.best ? 'success' : undefined"
        size="64"
      >
        {{ plan.icon }}
      </v-icon>
    </v-avatar>

    <h2
      class="text-h3 font-weight-light"
      v-text="plan.title"
    />

    <v-card-text class="text-body-1 font-weight-light pa-1">
      {{ plan.text }}
    </v-card-text>

    <PagesBtn :color="plan.best ? 'success' : 'white'">
      {{ $t('plan') }}
    </PagesBtn>
  </v-card>
</template>

<style lang="scss">
.v-card--plan {
  .v-avatar {
    border-radius: 50%;
    border: 1px solid #e5e5e5;
  }
}
</style>
