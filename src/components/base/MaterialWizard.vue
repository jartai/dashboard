<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'MaterialWizard' })

const props = withDefaults(
  defineProps<{
    availableSteps?: number[]
    items?: string[]
    modelValue?: number
    value?: number
  }>(),
  {
    availableSteps: () => [],
    items: () => [],
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: number]
  change: [value: number]
  'click:next': []
  'click:prev': []
}>()

const step = computed({
  get: () => props.modelValue ?? props.value ?? 0,
  set: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
})
</script>

<template>
  <v-card
    class="v-card--wizard"
    elevation="12"
    max-width="700"
  >
    <v-card-title class="justify-center text-h3 font-weight-light pt-5">
      Build your profile
    </v-card-title>

    <div class="text-center text-h4 text-grey font-weight-light mb-6">
      This information will let us know more about you.
    </div>

    <v-tabs
      v-model="step"
      bg-color="green-lighten-5"
      color="white"
      grow
      slider-color="success"
      slider-size="50"
    >
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :disabled="!availableSteps.includes(i)"
        :ripple="false"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <div class="my-6" />

    <v-card-text>
      <v-tabs-window v-model="step">
        <slot />
      </v-tabs-window>
    </v-card-text>

    <v-card-actions class="pb-4 pa-4">
      <v-btn
        :disabled="step === 0"
        class="text-white"
        color="grey-darken-2"
        min-width="125"
        @click="$emit('click:prev')"
      >
        Previous
      </v-btn>

      <v-spacer />

      <v-btn
        :disabled="!availableSteps.includes(step + 1)"
        color="success"
        min-width="100"
        @click="$emit('click:next')"
      >
        {{ step === items.length - 1 ? 'Finish' : 'Next' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss">
.v-card--wizard {
  overflow: visible;

  .v-slide-group__container {
    height: 56px;
    padding: 0 8px;
    overflow: visible;
    contain: initial;
  }

  .v-tabs__slider {
    margin-top: 4px;
    border-radius: 4px;
  }
}
</style>
