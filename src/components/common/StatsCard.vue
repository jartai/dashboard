<template>
  <v-card
    :color="color"
    variant="flat"
  >
    <v-card-text>
      <div class="d-flex justify-space-between">
        <div>
          <div class="text-body-medium font-weight-light">{{ title }}</div>
          <div class="text-headline-large">{{ value }}</div>
        </div>

        <v-icon
          class="ml-2"
          size="48"
        >
          {{ icon }}
        </v-icon>
      </div>
    </v-card-text>

    <v-divider />

    <v-card-actions>
      <v-icon
        class="mr-1"
        size="small"
      >
        {{ subIcon }}
      </v-icon>

      <span class="text-body-small font-weight-light">{{ subText }}</span>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  defineProps<{
    color: string
    icon: string
    title: string
    value: string
    subIcon: string
    subText: string
  }>()
</script>
