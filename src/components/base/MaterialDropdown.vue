<template>
  <v-menu
    v-model="open"
    v-bind="$attrs"
    :transition="transition"
  >
    <template #activator="{ props: activatorProps }">
      <v-btn
        v-bind="activatorProps"
        :color="color"
        min-width="200"
        rounded
      >
        <slot />

        <v-icon>
          {{ open ? 'mdi-menu-up' : 'mdi-menu-down' }}
        </v-icon>
      </v-btn>
    </template>

    <v-sheet>
      <v-list density="compact">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="onItemClick(item)"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({ name: 'MaterialDropdown', inheritAttrs: false })

interface DropdownItem {
  id?: string | number
  text?: string
}

const props = withDefaults(
  defineProps<{
    color?: string
    items?: DropdownItem[]
    modelValue?: boolean
    transition?: string
    value?: boolean
  }>(),
  {
    color: 'primary',
    items: () => [{ id: undefined, text: undefined }],
    transition: 'scale-transition',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  action: [id: DropdownItem['id']]
  change: [value: boolean]
}>()

const open = computed({
  get: () => props.modelValue ?? props.value ?? false,
  set: (value) => {
    emit('update:modelValue', value)
    emit('change', value)
  },
})

function onItemClick(item: DropdownItem) {
  emit('action', item.id)
}
</script>
