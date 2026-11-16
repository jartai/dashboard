<script setup lang="ts">
const sales = [
  {
    country: 'USA',
    code: 'US',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
    salesInM: 2920,
    mapValue: 2920,
  },
  {
    country: 'Germany',
    code: 'DE',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
    salesInM: 1300,
    mapValue: 1390,
  },
  {
    country: 'Australia',
    code: 'AU',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
    salesInM: 760,
    mapValue: 760,
  },
  {
    country: 'United Kingdom',
    code: 'GB',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
    salesInM: 690,
    mapValue: 690,
  },
  {
    country: 'Romania',
    code: 'RO',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
    salesInM: 600,
    mapValue: 600,
  },
  {
    country: 'Brasil',
    code: 'BR',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
    salesInM: 550,
    mapValue: 550,
  },
];

const totalSales = sales.reduce((sum, sale) => sum + sale.salesInM, 0);

function share(salesInM: number) {
  return `${((salesInM / totalSales) * 100).toFixed(2)}%`;
}
</script>

<template>
  <q-card>
    <q-card-section>
      <q-icon name="mdi-earth" size="sm" />
      <span class="text-h6">Global Sales by Top Locations</span>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <div class="row q-col-gutter-md">
        <div class="col-12 col-md-6">
          <q-markup-table flat>
            <tbody>
              <tr v-for="sale in sales" :key="sale.code">
                <td>
                  <img :src="sale.flag" :alt="sale.country" width="18" />
                </td>
                <td>{{ sale.country }}</td>
                <td>{{ sale.salesInM }}</td>
                <td>{{ share(sale.salesInM) }}</td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>

        <div class="col-12 col-md-6">
          <div class="text-caption q-mb-sm">Map values</div>
          <div v-for="sale in sales" :key="`${sale.code}-map`">
            {{ sale.code }} {{ sale.mapValue }}
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>
