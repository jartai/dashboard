<script setup lang="ts">
import RangeValidation from '@/components/forms/RangeValidation.vue';
import TypeValidation from '@/components/forms/TypeValidation.vue';
import ValidationLogin from '@/components/forms/ValidationLogin.vue';
import ValidationRegister from '@/components/forms/ValidationRegister.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Validation Forms</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <ValidationRegister />
      </div>

      <div class="col-12 col-md-6">
        <ValidationLogin />
      </div>

      <div class="col-12">
        <TypeValidation />
      </div>

      <div class="col-12">
        <RangeValidation />
      </div>
    </div>
  </q-page>
</template>
