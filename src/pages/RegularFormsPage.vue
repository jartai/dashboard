<script setup lang="ts">
import FormElements from '@/components/forms/FormElements.vue';
import HorizontalForm from '@/components/forms/HorizontalForm.vue';
import InputVariants from '@/components/forms/InputVariants.vue';
import StackedForm from '@/components/forms/StackedForm.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Forms</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <StackedForm />
      </div>

      <div class="col-12 col-md-6">
        <HorizontalForm />
      </div>

      <div class="col-12">
        <FormElements />
      </div>

      <div class="col-12">
        <InputVariants />
      </div>
    </div>
  </q-page>
</template>
