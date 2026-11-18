<script setup lang="ts">
import DatePickerCard from '@/components/forms/DatePickerCard.vue';
import ExtendedChoices from '@/components/forms/ExtendedChoices.vue';
import ExtendedFields from '@/components/forms/ExtendedFields.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Date Pickers</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-sm-6 col-md-4">
        <DatePickerCard caption="labeled" label="Select date" show-ok />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <DatePickerCard caption="date selected" label="Select date" initial="2019-09-26" />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <DatePickerCard caption="close on select" close-on-select />
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="row q-col-gutter-lg">
              <div class="col-12 col-md-6">
                <ExtendedFields />
              </div>

              <div class="col-12 col-md-6">
                <ExtendedChoices />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
