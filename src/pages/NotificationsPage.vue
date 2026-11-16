<script setup lang="ts">
import ActionsCard from '@/components/notifications/ActionsCard.vue';
import StatesCard from '@/components/notifications/StatesCard.vue';
import StyleCard from '@/components/notifications/StyleCard.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Notifications</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <StyleCard />
      </div>

      <div class="col-12 col-md-6">
        <StatesCard />
      </div>

      <div class="col-12">
        <ActionsCard />
      </div>
    </div>
  </q-page>
</template>
