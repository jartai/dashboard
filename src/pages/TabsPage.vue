<script setup lang="ts">
import AccordionCard from '@/components/tabs/AccordionCard.vue';
import HorizontalTabs from '@/components/tabs/HorizontalTabs.vue';
import IconTabs from '@/components/tabs/IconTabs.vue';
import Subcategories from '@/components/tabs/Subcategories.vue';
import VerticalTabs from '@/components/tabs/VerticalTabs.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Tabs</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <HorizontalTabs />
      </div>

      <div class="col-12 col-md-6">
        <VerticalTabs />
      </div>

      <div class="col-12 col-md-6">
        <AccordionCard />
      </div>

      <div class="col-12 col-md-6">
        <IconTabs />
      </div>

      <div class="col-12 col-md-8 q-mx-auto">
        <Subcategories />
      </div>
    </div>
  </q-page>
</template>
