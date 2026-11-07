<template>
  <v-card>
    <v-card-title class="font-weight-light">
      {{ title }}
    </v-card-title>

    <v-card-subtitle class="font-weight-light">
      <slot name="subtitle" />
    </v-card-subtitle>

    <v-card-text>
      <apexchart
        :height="height"
        :options="options"
        :series="series"
        :type="type"
      />
    </v-card-text>

    <v-card-actions>
      <slot name="actions" />

      <v-spacer />

      <v-tooltip>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-refresh"
            size="small"
          />
        </template>

        <span>Refresh</span>
      </v-tooltip>

      <v-tooltip>
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            icon="mdi-pencil"
            size="small"
          />
        </template>

        <span>Change Date</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import type { ApexOptions } from 'apexcharts'
  import apexchart from 'vue3-apexcharts'

  withDefaults(defineProps<{
    title: string
    type: 'bar' | 'line'
    series: { name: string, data: number[] }[]
    options?: ApexOptions
    height?: number
  }>(), {
    options: () => ({}),
    height: 250,
  })
</script>
