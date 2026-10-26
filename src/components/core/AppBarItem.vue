<script setup lang="ts">
defineOptions({ name: 'AppBarItem', inheritAttrs: false })

withDefaults(defineProps<{ title?: string }>(), { title: '' })
</script>

<template>
  <v-hover>
    <template #default="{ isHovering }">
      <v-list-item
        v-bind="$attrs"
        :title="title"
        :class="isHovering ? 'text-white bg-secondary elevation-4' : 'text-black'"
        active-class=""
        link
      >
        <slot />
      </v-list-item>
    </template>
  </v-hover>
</template>
