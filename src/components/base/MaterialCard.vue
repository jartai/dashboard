<script setup lang="ts">
import { computed, useSlots } from 'vue'

defineOptions({ name: 'MaterialCard', inheritAttrs: false })

const props = withDefaults(
  defineProps<{
    avatar?: string
    color?: string
    hoverReveal?: boolean
    icon?: string
    inline?: boolean
    text?: string
    title?: string
  }>(),
  {
    avatar: '',
    color: 'success',
    hoverReveal: false,
    inline: false,
    text: '',
    title: '',
  },
)

const slots = useSlots()

const hasHeading = computed(() => Boolean(slots.heading || props.title || props.icon))
</script>

<template>
  <v-card
    v-bind="$attrs"
    class="v-card--material pa-3"
    :class="{
      'v-card--material--has-heading': hasHeading,
      'v-card--material--hover-reveal': hoverReveal,
    }"
  >
    <div class="d-flex grow flex-wrap">
      <v-avatar
        v-if="avatar"
        color="grey"
        size="128"
        class="mx-auto v-card--material__avatar elevation-5"
      >
        <v-img :src="avatar" />
      </v-avatar>

      <v-sheet
        v-else
        class="text-start v-card--material__heading mb-n6"
        :class="{ 'pa-7': !$slots.image }"
        :color="color"
        :max-height="icon ? 90 : undefined"
        :width="inline || icon ? 'auto' : '100%'"
      >
        <slot
          v-if="$slots.heading"
          name="heading"
        />

        <slot
          v-else-if="$slots.image"
          name="image"
        />

        <div
          v-else-if="title && !icon"
          class="text-h4 font-weight-light"
          v-text="title"
        />

        <v-icon
          v-else-if="icon"
          size="32"
        >
          {{ icon }}
        </v-icon>

        <div
          v-if="text"
          class="text-h5 font-weight-thin"
          v-text="text"
        />
      </v-sheet>

      <div
        v-if="$slots['after-heading']"
        class="ml-6"
      >
        <slot name="after-heading" />
      </div>

      <v-col
        v-if="hoverReveal"
        cols="12"
        class="text-center py-0 mt-n12"
      >
        <slot name="reveal-actions" />
      </v-col>

      <div
        v-else-if="icon && title"
        class="ml-4"
      >
        <div
          class="text-h6 font-weight-light"
          v-text="title"
        />
      </div>
    </div>

    <slot />

    <template v-if="$slots.actions">
      <v-divider class="mt-2" />

      <v-card-actions class="pb-0">
        <slot name="actions" />
      </v-card-actions>
    </template>
  </v-card>
</template>

<style lang="scss">
.v-card--material {
  &__avatar {
    position: relative;
    top: -64px;
    margin-bottom: -32px;
  }

  &__heading {
    position: relative;
    top: -40px;
    transition: 0.3s ease;
    z-index: 1;
  }

  &.v-card--material--hover-reveal:hover {
    .v-card--material__heading {
      transform: translateY(-40px);
    }
  }
}
</style>
