<script setup lang="ts">
import BaseItemGroup from './ItemGroup.vue'
import type { NavItem } from '@/config/navigation'

defineOptions({ name: 'ItemSubGroup' })

defineProps<{ item: NavItem }>()
</script>

<template>
  <BaseItemGroup
    :item="item"
    text
    subgroup
  />
</template>
