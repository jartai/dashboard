<template>
  <MaterialCard
    v-bind="$attrs"
    class="v-card--material-stats"
    :icon="icon"
  >
    <template #after-heading>
      <div class="ml-auto text-end">
        <div
          class="body-3 text-grey font-weight-light"
          v-text="title"
        />

        <h3 class="text-h3 font-weight-light text-high-emphasis">
          {{ value }} <small>{{ smallValue }}</small>
        </h3>
      </div>
    </template>

    <v-col
      cols="12"
      class="px-0"
    >
      <v-divider />
    </v-col>

    <v-icon
      :color="subIconColor"
      size="16"
      class="ml-2 mr-1"
    >
      {{ subIcon }}
    </v-icon>

    <span
      class="text-caption text-grey font-weight-light"
      :class="subTextColor"
      v-text="subText"
    />
  </MaterialCard>
</template>

<script setup lang="ts">
import MaterialCard from './MaterialCard.vue'

defineOptions({ name: 'MaterialStatsCard', inheritAttrs: false })

defineProps<{
  icon: string
  smallValue?: string
  subIcon?: string
  subIconColor?: string
  subText?: string
  subTextColor?: string
  title?: string
  value?: string
}>()
</script>

<style lang="sass">
.v-card--material-stats
  display: flex
  flex-wrap: wrap
  position: relative

  > div:first-child
    justify-content: space-between

  .v-card
    border-radius: 4px
    flex: 0 1 auto

  .v-card-text
    display: inline-block
    flex: 1 0 calc(100% - 120px)
    position: absolute
    top: 0
    right: 0
    width: 100%

  .v-card-actions
    flex: 1 0 100%
</style>
