<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    caption: string;
    label?: string;
    initial?: string;
    showOk?: boolean;
    closeOnSelect?: boolean;
  }>(),
  {
    label: '',
    initial: '',
    showOk: false,
    closeOnSelect: false,
  },
);

const date = ref(props.initial);
const popup = ref<{
  hide: () => void;
} | null>(null);

function onPick() {
  if (props.closeOnSelect) {
    popup.value?.hide();
  }
}
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-calendar-today" color="positive" size="sm" />
      <span class="text-h6">Date Picker</span>
      <span> — {{ caption }}</span>

      <q-input v-model="date" class="q-mt-md" :label="label" readonly>
        <template #prepend>
          <q-icon name="mdi-calendar-outline" class="cursor-pointer">
            <q-popup-proxy ref="popup" cover transition-show="scale" transition-hide="scale">
              <q-date
                v-model="date"
                mask="YYYY-MM-DD"
                color="secondary"
                @update:model-value="onPick"
              >
                <div class="row items-center justify-end q-gutter-sm">
                  <q-btn v-close-popup flat color="secondary" label="Cancel" />
                  <q-btn v-if="showOk" v-close-popup flat color="secondary" label="OK" />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </q-card-section>
  </q-card>
</template>
