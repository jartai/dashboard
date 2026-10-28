<script setup lang="ts">
import type { DataTableHeader } from 'vuetify'

defineOptions({ name: 'ExtendedTables' })

interface Action {
  color: string
  icon: string
}

interface Product {
  amount: string
  brand: string
  color: string
  name: string
  price: string
  qty: number
  size: string
  src: string
}

interface Selection {
  amount: string
  id: number
  name: string
  price: string
  qty: number
  type: string
}

const actions: Action[] = [
  { color: 'info', icon: 'mdi-account' },
  { color: 'success', icon: 'mdi-pencil' },
  { color: 'error', icon: 'mdi-close' },
]

const headers: DataTableHeader[] = [
  { title: '#', value: 'id' },
  { title: 'Product Name', value: 'name' },
  { title: 'Type', value: 'type' },
  { align: 'end', title: 'Qty', value: 'qty' },
  { align: 'end', title: 'Price', value: 'price' },
  { align: 'end', title: 'Amount', value: 'amount' },
]

const productHeaders: DataTableHeader[] = [
  { sortable: false, title: '', value: 'src' },
  { title: 'Product', value: 'name' },
  { title: 'Color', value: 'color' },
  { title: 'Size', value: 'size' },
  { align: 'end', title: 'Price', value: 'price' },
  { title: 'Qty', value: 'qty' },
  { align: 'end', title: 'Amount', value: 'amount' },
]

const products: Product[] = [
  {
    src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product1.jpg',
    name: 'Spring Jacket',
    brand: 'Dolce & Gabbana',
    color: 'Red',
    size: 'M',
    price: '€ 549',
    amount: '€ 549',
    qty: 1,
  },
  {
    src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product2.jpg',
    name: 'Short Pants',
    brand: 'Pucca',
    color: 'Purple',
    size: 'M',
    price: '€ 499',
    amount: '€ 499',
    qty: 2,
  },
  {
    src: 'https://demos.creative-tim.com/material-dashboard-pro/assets/img/product3.jpg',
    name: 'Pencil Skirt',
    brand: 'Valentino',
    color: 'White',
    size: 'XL',
    price: '€ 799',
    amount: '€ 799',
    qty: 1,
  },
]

const selections: Selection[] = [
  { id: 1, name: 'Moleskine Agenda', type: 'Office', qty: 25, price: '€ 49', amount: '€ 1,225' },
  { id: 2, name: 'Stabilo Pen', type: 'Office', qty: 30, price: '€ 10', amount: '€ 300' },
  { id: 3, name: 'A4 Paper Pack', type: 'Office', qty: 30, price: '€ 10.99', amount: '€ 109' },
  { id: 4, name: 'Apple iPad', type: 'Meeting', qty: 10, price: '€ 499', amount: '€ 4,990' },
  {
    id: 5,
    name: 'Apple iPhone',
    type: 'Communication',
    qty: 10,
    price: '€ 599',
    amount: '€ 5,999',
  },
]
</script>

<template>
  <v-container
    id="extended-tables"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Simple Tables"
      link="componetns/simple-tables"
    />

    <BaseMaterialCard
      color="success"
      icon="mdi-clipboard-text"
      inline
      title="Simple Table"
      class="px-5 py-3 mb-5"
    >
      <v-table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Job Position</th>
            <th>Since</th>
            <th class="text-end">Salary</th>
            <th class="text-end">Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Andrew Mike</td>
            <td>Developer</td>
            <td>2013</td>
            <td class="text-end">€ 99,225</td>
            <td class="text-end">
              <v-btn
                v-for="(action, i) in actions"
                :key="i"
                class="px-2 ml-1"
                :color="action.color"
                min-width="0"
                size="small"
              >
                <v-icon size="small">
                  {{ action.icon }}
                </v-icon>
              </v-btn>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>Designer</td>
            <td>2012</td>
            <td class="text-end">€ 89,241</td>
            <td class="text-end">
              <v-btn
                v-for="(action, i) in actions"
                :key="i"
                :color="action.color"
                class="px-1 ml-1"
                icon
                size="x-small"
              >
                <v-icon>{{ action.icon }}</v-icon>
              </v-btn>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>Alex Mike</td>
            <td>Designer</td>
            <td>2010</td>
            <td class="text-end">€ 92,144</td>
            <td class="text-end">
              <v-btn
                v-for="(action, i) in actions"
                :key="i"
                :color="action.color"
                class="ml-1"
                icon
                size="x-small"
              >
                <v-icon size="small">
                  {{ action.icon }}
                </v-icon>
              </v-btn>
            </td>
          </tr>

          <tr>
            <td>4</td>
            <td>Mike Monday</td>
            <td>Marketing</td>
            <td>2013</td>
            <td class="text-end">€ 49,990</td>
            <td class="text-end">
              <v-btn
                v-for="(action, i) in actions"
                :key="i"
                :color="action.color"
                class="px-1 ml-1"
                icon
                size="x-small"
              >
                <v-icon>{{ action.icon }}</v-icon>
              </v-btn>
            </td>
          </tr>

          <tr>
            <td>5</td>
            <td>Paul Dickens</td>
            <td>Communications</td>
            <td>2015</td>
            <td class="text-end">€ 69,201</td>
            <td class="text-end">
              <v-btn
                v-for="(action, i) in actions"
                :key="i"
                class="px-2 ml-1"
                :color="action.color"
                min-width="0"
                size="small"
              >
                <v-icon size="small">
                  {{ action.icon }}
                </v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </v-table>
    </BaseMaterialCard>

    <div class="py-3" />

    <BaseMaterialCard
      color="success"
      icon="mdi-clipboard"
      inline
      title="Checked Table"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="headers"
        :items="selections"
        hide-default-footer
        show-select
      >
        <template #footer>
          <v-card-text>
            <v-row
              align="center"
              justify="end"
            >
              <strong class="text-h6">Total</strong>
              <div class="text-h4 font-weight-light ml-12">€ 12,999</div>
            </v-row>
          </v-card-text>
        </template>
      </v-data-table>
    </BaseMaterialCard>

    <div class="py-3" />

    <BaseMaterialCard
      color="success"
      icon="mdi-vuetify"
      inline
      title="Shopping Cart Table"
      class="px-5 py-3"
    >
      <v-data-table
        :headers="productHeaders"
        :items="products"
        hide-default-footer
      >
        <template #item="{ item }">
          <tr>
            <td>
              <v-img
                :src="item.src"
                class="mx-auto"
                max-width="75"
              />
            </td>

            <td>
              <div
                class="text-purple text-h5"
                v-text="item.name"
              />

              <div class="text-grey text-subtitle-1 font-weight-light">by {{ item.brand }}</div>
            </td>

            <td v-text="item.color" />
            <td v-text="item.size" />

            <td
              class="text-end"
              v-text="item.price"
            />

            <td />

            <td
              class="text-end"
              v-text="item.amount"
            />
          </tr>
        </template>

        <template #footer>
          <v-divider />

          <v-card-text>
            <v-row
              align="center"
              justify="end"
            >
              <strong class="text-h6">Total</strong>
              <div class="text-h4 font-weight-light ml-12">€ 2,346</div>
            </v-row>
          </v-card-text>

          <v-divider />

          <div class="text-right py-6">
            <v-btn
              color="info"
              rounded="pill"
              class="mr-0"
            >
              Complete Purchase
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
    </BaseMaterialCard>
  </v-container>
</template>
