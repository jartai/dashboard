<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import type { NavItem } from '@/config/navigation'

defineOptions({ name: 'Item' })

const props = withDefaults(defineProps<{ item: NavItem; text?: boolean }>(), {
  text: false,
})

const { current } = useTheme()

const href = computed(() => props.item.href ?? (!props.item.to ? '#' : undefined))

const computedText = computed(() =>
  props.item.title
    ? props.item.title
        .split('')
        .map((c) => c.substring(0, 1))
        .join('')
    : '',
)
</script>

<template>
  <v-list-item
    :href="href"
    :rel="href && href !== '#' ? 'noopener' : undefined"
    :target="href && href !== '#' ? '_blank' : undefined"
    :to="item.to"
    :value="item.title"
    :title="item.title"
    :subtitle="item.subtitle"
    :active-class="`bg-primary ${current.dark ? 'text-white' : 'text-black'}`"
  >
    <template #prepend>
      <span
        v-if="text"
        class="v-list-item__icon--text"
        >{{ computedText }}</span
      >
      <v-icon
        v-else-if="item.icon"
        :icon="item.icon"
      />
    </template>
  </v-list-item>
</template>
