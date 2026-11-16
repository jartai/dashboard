<script setup lang="ts">
import type { QTableColumn } from 'quasar';

interface Dessert {
  name: string;
  calories: number;
}

const pagination = {
  rowsPerPage: 0,
};

const columns: QTableColumn[] = [
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: false,
  },
  {
    name: 'calories',
    label: 'Calories',
    field: 'calories',
    align: 'left',
    sortable: false,
  },
];

const rows: Dessert[] = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
  },
  {
    name: 'Eclair',
    calories: 262,
  },
  {
    name: 'Cupcake',
    calories: 305,
  },
  {
    name: 'Gingerbread',
    calories: 356,
  },
  {
    name: 'Jelly bean',
    calories: 375,
  },
  {
    name: 'Lollipop',
    calories: 392,
  },
  {
    name: 'Honeycomb',
    calories: 408,
  },
  {
    name: 'Donut',
    calories: 452,
  },
  {
    name: 'KitKat',
    calories: 518,
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Regular Tables</h1>

    <q-table
      flat
      bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
      hide-pagination
      :pagination="pagination"
    />
  </q-page>
</template>
