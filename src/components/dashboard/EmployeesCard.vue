<script setup lang="ts">
import type { QTableColumn } from 'quasar';

interface Employee {
  id: number;
  name: string;
  salary: string;
  country: string;
  city: string;
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
    name: 'salary',
    label: 'Salary',
    field: 'salary',
    align: 'right',
    sortable: false,
  },
  {
    name: 'country',
    label: 'Country',
    field: 'country',
    align: 'right',
    sortable: false,
  },
  {
    name: 'city',
    label: 'City',
    field: 'city',
    align: 'right',
    sortable: false,
  },
];

const employees: Employee[] = [
  {
    id: 1,
    name: 'Dakota Rice',
    salary: '$35,738',
    country: 'Niger',
    city: 'Oud-Tunrhout',
  },
  {
    id: 2,
    name: 'Minerva Hooper',
    salary: '$23,738',
    country: 'Curaçao',
    city: 'Sinaai-Waas',
  },
  {
    id: 3,
    name: 'Sage Rodriguez',
    salary: '$56,142',
    country: 'Netherlands',
    city: 'Overland Park',
  },
  {
    id: 4,
    name: 'Philip Chanley',
    salary: '$38,735',
    country: 'Korea, South',
    city: 'Gloucester',
  },
  {
    id: 5,
    name: 'Doris Greene',
    salary: '$63,542',
    country: 'Malawi',
    city: 'Feldkirchen in Kärnten',
  },
];
</script>

<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Employees Stats</div>
      <div>New employees on 15th September, 2016</div>
    </q-card-section>

    <q-separator />

    <q-table
      flat
      :rows="employees"
      :columns="columns"
      row-key="id"
      hide-pagination
      :pagination="pagination"
    />
  </q-card>
</template>
