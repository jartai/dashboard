<template>
  <v-row>
    <v-col cols="12">
      <v-card>
        <v-card-title>Global Sales by Top Locations</v-card-title>

        <v-row>
          <v-col
            class="mt-10"
            cols="12"
            md="6"
          >
            <v-table class="ml-2">
              <tbody>
                <tr
                  v-for="(sale, i) in sales"
                  :key="i"
                >
                  <td>
                    <v-img
                      :src="sale.flag"
                      width="18"
                    />
                  </td>

                  <td>{{ sale.country }}</td>
                  <td>{{ sale.salesInM }}</td>
                  <td>{{ percent(sale.salesInM) }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <WorldMap :country-data="countryData" />
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      lg="4"
    >
      <ChartCard
        :options="barOptions"
        :series="[{ name: 'Subscribers', data: [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895] }]"
        title="Website Views"
        type="bar"
      >
        <template #subtitle>Last Campaign Performance</template>

        <template #actions>
          <v-icon
            class="mr-1"
            size="small"
          >
            mdi-clock-outline
          </v-icon>

          <span class="text-body-small text-medium-emphasis font-weight-light">updated 10 minutes ago</span>
        </template>
      </ChartCard>
    </v-col>

    <v-col
      cols="12"
      lg="4"
    >
      <ChartCard
        :options="lineOptions"
        :series="[{ name: 'Sales', data: [12, 17, 7, 17, 23, 18, 38] }]"
        title="Daily Sales"
        type="line"
      >
        <template #subtitle>
          <v-icon
            color="green"
            size="small"
          >
            mdi-arrow-up
          </v-icon>

          <span class="text-green">55%</span>
          &nbsp;increase in today's sales
        </template>

        <template #actions>
          <v-icon
            class="mr-1"
            size="small"
          >
            mdi-clock-outline
          </v-icon>

          <span class="text-body-small text-medium-emphasis font-weight-light">updated 4 minutes ago</span>
        </template>
      </ChartCard>
    </v-col>

    <v-col
      cols="12"
      lg="4"
    >
      <ChartCard
        :options="lineOptions"
        :series="[{ name: 'Tasks', data: [230, 750, 450, 300, 280, 240, 200, 190] }]"
        title="Completed Tasks"
        type="line"
      >
        <template #subtitle>Last Campaign Performance</template>

        <template #actions>
          <v-icon
            class="mr-1"
            size="small"
          >
            mdi-clock-outline
          </v-icon>

          <span class="text-body-small text-medium-emphasis font-weight-light">campaign sent 26 minutes ago</span>
        </template>
      </ChartCard>
    </v-col>

    <v-col
      cols="12"
      lg="3"
      sm="6"
    >
      <StatsCard
        color="info"
        icon="mdi-twitter"
        sub-icon="mdi-clock"
        sub-text="Just Updated"
        title="Followers"
        value="+245"
      />
    </v-col>

    <v-col
      cols="12"
      lg="3"
      sm="6"
    >
      <StatsCard
        color="primary"
        icon="mdi-poll"
        sub-icon="mdi-tag"
        sub-text="Tracked from Google Analytics"
        title="Website Visits"
        value="75.521"
      />
    </v-col>

    <v-col
      cols="12"
      lg="3"
      sm="6"
    >
      <StatsCard
        color="success"
        icon="mdi-store"
        sub-icon="mdi-calendar"
        sub-text="Last 24 Hours"
        title="Revenue"
        value="$ 34,245"
      />
    </v-col>

    <v-col
      cols="12"
      lg="3"
      sm="6"
    >
      <StatsCard
        color="orange"
        icon="mdi-sofa"
        sub-icon="mdi-alert"
        sub-text="Get More Space..."
        title="Bookings"
        value="184"
      />
    </v-col>

    <v-col cols="12">
      <div class="text-headline-medium font-weight-light mt-1">Manage Listings</div>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-card>
        <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg" />

        <v-card-title class="justify-center font-weight-light">
          Cozy 5 Stars Apartment
        </v-card-title>

        <v-card-text class="text-body-large text-center mb-3 font-weight-light text-medium-emphasis">
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.
        </v-card-text>

        <v-card-actions>
          <div class="text-headline-large font-weight-light text-medium-emphasis">$899/night</div>
          <v-spacer />

          <span class="text-body-small font-weight-light text-medium-emphasis">
            <v-icon size="small">mdi-map-marker</v-icon>
            Barcelona, Spain
          </span>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-card>
        <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg" />

        <v-card-title class="justify-center font-weight-light">
          Office Studio
        </v-card-title>

        <v-card-text class="text-body-large text-center mb-3 font-weight-light text-medium-emphasis">
          The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.
        </v-card-text>

        <v-card-actions>
          <div class="text-headline-large font-weight-light text-medium-emphasis">$1.119/night</div>
          <v-spacer />

          <span class="text-body-small font-weight-light text-medium-emphasis">
            <v-icon size="small">mdi-map-marker</v-icon>
            London, UK
          </span>
        </v-card-actions>
      </v-card>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-card>
        <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg" />

        <v-card-title class="justify-center font-weight-light">
          Beautiful Castle
        </v-card-title>

        <v-card-text class="text-body-large text-center mb-3 font-weight-light text-medium-emphasis">
          The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.
        </v-card-text>

        <v-card-actions>
          <div class="text-headline-large font-weight-light text-medium-emphasis">$459/night</div>
          <v-spacer />

          <span class="text-body-small font-weight-light text-medium-emphasis">
            <v-icon size="small">mdi-map-marker</v-icon>
            Milan, Italy
          </span>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
  import ChartCard from '@/components/common/ChartCard.vue'
  import StatsCard from '@/components/common/StatsCard.vue'
  import WorldMap from '@/components/common/WorldMap.vue'

  const sales = [
    { country: 'USA', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png', salesInM: 2920 },
    { country: 'Germany', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png', salesInM: 1300 },
    { country: 'Australia', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png', salesInM: 760 },
    { country: 'United Kingdom', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png', salesInM: 690 },
    { country: 'Romania', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png', salesInM: 600 },
    { country: 'Brasil', flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png', salesInM: 550 },
  ]

  const countryData = {
    US: 2920,
    DE: 1390,
    AU: 760,
    GB: 690,
    RO: 600,
    BR: 550,
  }

  const totalSales = sales.reduce((acc, val) => acc + val.salesInM, 0)

  const barOptions = {
    xaxis: { categories: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'] },
    yaxis: { min: 0, max: 1000 },
    chart: { toolbar: { show: false } },
  }

  const lineOptions = {
    xaxis: { categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'] },
    yaxis: { min: 0, max: 500 },
    stroke: { curve: 'straight' as const },
    chart: { toolbar: { show: false } },
  }

  function percent (value: number) {
    return ((value / totalSales) * 100).toFixed(2) + '%'
  }
</script>
