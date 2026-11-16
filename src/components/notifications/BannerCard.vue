<script setup lang="ts">
export interface Note {
  id: string;
  color: string;
  text: string;
  icon?: boolean;
  dismiss?: boolean;
}

defineProps<{
  title: string;
  notes: Note[];
}>();

const emit = defineEmits<{
  dismiss: [id: string];
}>();
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 q-mb-md">{{ title }}</div>

      <q-banner
        v-for="note in notes"
        :key="note.id"
        rounded
        :class="`bg-${note.color} text-white q-mb-sm`"
      >
        <template v-if="note.icon" #avatar>
          <q-icon name="notifications" />
        </template>

        {{ note.text }}

        <template v-if="note.dismiss" #action>
          <q-btn flat dense round icon="close" @click="emit('dismiss', note.id)" />
        </template>
      </q-banner>
    </q-card-section>
  </q-card>
</template>
