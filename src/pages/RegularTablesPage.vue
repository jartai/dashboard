<script setup lang="ts">
import type { QTableColumn } from 'quasar';

interface Row {
  id: number;
  name: string;
  country: string;
  city: string;
  salary: string;
}

const pagination = {
  rowsPerPage: 0,
};

const columns: QTableColumn[] = [
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: false,
  },
  {
    name: 'name',
    label: 'Name',
    field: 'name',
    align: 'left',
    sortable: false,
  },
  {
    name: 'country',
    label: 'Country',
    field: 'country',
    align: 'left',
    sortable: false,
  },
  {
    name: 'city',
    label: 'City',
    field: 'city',
    align: 'left',
    sortable: false,
  },
  {
    name: 'salary',
    label: 'Salary',
    field: 'salary',
    align: 'right',
    sortable: false,
  },
];

const rows: Row[] = [
  {
    id: 1,
    name: 'Dakota Rice',
    country: 'Niger',
    city: 'Oud-Turnhout',
    salary: '$36,738',
  },
  {
    id: 2,
    name: 'Minverva Hooper',
    country: 'Curaçao',
    city: 'Sinaas-Waas',
    salary: '$23,789',
  },
  {
    id: 3,
    name: 'Sage Rodriguez',
    country: 'Netherlands',
    city: 'Baileux',
    salary: '$56,142',
  },
  {
    id: 4,
    name: 'Philip Chaney',
    country: 'Korea, South',
    city: 'Overland Park',
    salary: '$38,735',
  },
  {
    id: 5,
    name: 'Doris Greene',
    country: 'Malawi',
    city: 'Feldkirchen in Kärnten',
    salary: '$63,542',
  },
  {
    id: 6,
    name: 'Mason Porter',
    country: 'Chile',
    city: 'Gloucester',
    salary: '$78,615',
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Simple Tables</h1>

    <q-card>
      <q-card-section>
        <q-icon name="content_paste" size="sm" />
        <span class="text-h6">Simple Table</span>
      </q-card-section>

      <q-separator />

      <q-table
        flat
        :rows="rows"
        :columns="columns"
        row-key="id"
        hide-pagination
        :pagination="pagination"
      />
    </q-card>

    <q-card dark class="bg-positive text-white q-mt-md">
      <q-card-section>
        <q-icon name="note_add" size="sm" />
        <span class="text-h6">Table on Dark Background</span>
      </q-card-section>

      <q-separator dark />

      <q-table
        flat
        dark
        :rows="rows"
        :columns="columns"
        row-key="id"
        hide-pagination
        :pagination="pagination"
      />
    </q-card>
  </q-page>
</template>
