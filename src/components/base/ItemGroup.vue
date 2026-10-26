<script setup lang="ts">
import { computed } from 'vue'
import { useUiStore } from '@/stores/ui'
import BaseItem from './Item.vue'
import BaseItemSubGroup from './ItemSubGroup.vue'
import type { NavItem } from '@/config/navigation'

defineOptions({ name: 'ItemGroup', inheritAttrs: false })

const props = withDefaults(defineProps<{ item: NavItem; subgroup?: boolean; text?: boolean }>(), {
  subgroup: false,
  text: false,
})

const ui = useUiStore()

const computedText = computed(() =>
  props.item.title
    ? props.item.title
        .split('')
        .map((c) => c.substring(0, 1))
        .join('')
    : '',
)

const drawerIsDark = computed(() => ui.barColor !== 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)')

const children = computed(() => props.item.children ?? [])
</script>

<template>
  <v-list-group
    :value="item.title"
    :subgroup="subgroup"
    :prepend-icon="item.icon"
    collapse-icon="mdi-menu-down"
    expand-icon="mdi-menu-down"
    :color="drawerIsDark ? 'white' : 'grey-darken-1'"
  >
    <template #activator="{ props: activatorProps }">
      <v-list-item v-bind="activatorProps">
        <template #prepend>
          <span
            v-if="text"
            class="v-list-item__icon--text"
            >{{ computedText }}</span
          >
          <v-avatar
            v-else-if="item.avatar"
            class="align-self-center"
            color="grey"
          >
            <v-img
              src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg"
            />
          </v-avatar>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </template>

    <template
      v-for="(child, i) in children"
      :key="`child-${i}`"
    >
      <BaseItemSubGroup
        v-if="child.children"
        :item="child"
      />
      <BaseItem
        v-else
        :item="child"
        text
      />
    </template>
  </v-list-group>
</template>

<style scoped>
.v-list-group__activator p {
  margin-bottom: 0;
}
</style>
