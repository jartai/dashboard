<script setup lang="ts">
import { ref } from 'vue'
import type { DataTableHeader } from 'vuetify'

defineOptions({ name: 'DataTables' })

interface Person {
  age: number
  date: string
  name: string
  office: string
  position: string
}

const headers: DataTableHeader[] = [
  { title: 'Name', value: 'name' },
  { title: 'Position', value: 'position' },
  { title: 'Office', value: 'office' },
  { title: 'Age', value: 'age' },
  { title: 'Date', value: 'date' },
  { sortable: false, title: 'Actions', value: 'actions' },
]

const items: Person[] = [
  { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, date: '2008/11/28' },
  {
    name: 'Angelica Ramos',
    position: 'Chief Executive Officer (CEO)',
    office: 'London',
    age: 47,
    date: '2009/10/09',
  },
  {
    name: 'Ashton Cox',
    position: 'Junior Technical Author',
    office: 'San Francisco',
    age: 66,
    date: '2009/01/12',
  },
  {
    name: 'Bradley Greer',
    position: 'Software Engineer',
    office: 'London',
    age: 41,
    date: '2012/10/13',
  },
  {
    name: 'Brenden Wagner',
    position: 'Software Engineer',
    office: 'San Francisco',
    age: 28,
    date: '2011/06/07',
  },
]

const sortBy: { key: string; order: 'asc' | 'desc' }[] = [
  { key: 'name', order: 'asc' },
  { key: 'office', order: 'desc' },
]

const search = ref('')
</script>

<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <BaseVComponent
      heading="Data Tables"
      link="components/data-tables"
    />

    <BaseMaterialCard
      color="indigo"
      icon="mdi-vuetify"
      inline
      class="px-5 py-3"
    >
      <template #after-heading>
        <div class="text-h3 font-weight-light">DataTables</div>
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="Search"
        hide-details
        style="max-width: 250px"
      />

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="items"
        v-model:search="search"
        :sort-by="sortBy"
        multi-sort
      />
    </BaseMaterialCard>
  </v-container>
</template>
