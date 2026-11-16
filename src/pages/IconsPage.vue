<script setup lang="ts">
const icons = [
  'dashboard',
  'person',
  'group',
  'face',
  'table_chart',
  'text_fields',
  'sentiment_satisfied',
  'map',
  'notifications',
  'upgrade',
  'home',
  'settings',
  'search',
  'info',
  'warning',
  'error',
  'check_circle',
  'cancel',
  'delete',
  'edit',
  'add',
  'remove',
  'refresh',
  'schedule',
  'calendar_today',
  'mail',
  'phone',
  'lock',
  'visibility',
  'visibility_off',
  'favorite',
  'star',
  'bookmark',
  'share',
  'download',
  'upload',
  'print',
  'save',
  'folder',
  'description',
  'image',
  'camera',
  'mic',
  'volume_up',
  'play_arrow',
  'pause',
  'stop',
  'cloud',
  'code',
  'bug_report',
  'build',
  'store',
  'shopping_cart',
  'credit_card',
  'account_balance',
  'language',
  'public',
  'place',
  'directions',
  'local_offer',
  'lightbulb',
  'palette',
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Icons</h1>

    <q-card>
      <q-card-section>
        <div class="text-h4">Material Icons</div>
        <div class="text-subtitle1">
          See all available
          <a href="https://fonts.google.com/icons" target="_blank" rel="noopener">Icons</a>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="row justify-center">
          <div v-for="icon in icons" :key="icon" class="col-auto q-pa-md">
            <q-icon :name="icon" size="md">
              <q-tooltip>{{ icon }}</q-tooltip>
            </q-icon>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <div class="row justify-center q-mt-md">
      <q-btn
        color="positive"
        size="lg"
        icon="palette"
        label="See all icons"
        type="a"
        href="https://fonts.google.com/icons"
        target="_blank"
        rel="noopener"
      />
    </div>
  </q-page>
</template>
