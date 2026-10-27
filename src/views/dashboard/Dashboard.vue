<script setup lang="ts">
import Chartist from 'chartist'
import { computed } from 'vue'

defineOptions({ name: 'DashboardDashboard' })

const countryData = {
  US: 2920,
  DE: 1390,
  AU: 760,
  GB: 690,
  RO: 600,
  BR: 550,
}

const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({ tension: 0 }),
    low: 0,
    high: 50,
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
}

const dataCompletedTasksChart = {
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]],
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({ tension: 0 }),
    low: 0,
    high: 1000,
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
}

const emailsSubscriptionChart = {
  data: {
    labels: ['Ja', 'Fe', 'Ma', 'Ap', 'Mai', 'Ju', 'Jul', 'Au', 'Se', 'Oc', 'No', 'De'],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
  },
  options: {
    axisX: { showGrid: false },
    low: 0,
    high: 1000,
    chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
  },
  responsiveOptions: [
    [
      'screen and (max-width: 640px)',
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc(value: string) {
            return value[0]
          },
        },
      },
    ],
  ],
}

const sales = [
  {
    country: 'USA',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/US.png',
    salesInM: 2920,
  },
  {
    country: 'Germany',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/DE.png',
    salesInM: 1300,
  },
  {
    country: 'Australia',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/AU.png',
    salesInM: 760,
  },
  {
    country: 'United Kingdom',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/GB.png',
    salesInM: 690,
  },
  {
    country: 'Romania',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/RO.png',
    salesInM: 600,
  },
  {
    country: 'Brasil',
    flag: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/flags/BR.png',
    salesInM: 550,
  },
]

const totalSales = computed(() => sales.reduce((acc, val) => acc + val.salesInM, 0))
</script>

<template>
  <v-container
    id="dashboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col cols="12">
        <BaseMaterialCard
          icon="mdi-earth"
          title="Global Sales by Top Locations"
        >
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
                    <td v-text="sale.country" />
                    <td v-text="sale.salesInM" />
                    <td v-text="`${((sale.salesInM / totalSales) * 100).toFixed(2)}%`" />
                  </tr>
                </tbody>
              </v-table>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-world-map
                :country-data="countryData"
                high-color="#838383"
                low-color="#bbbbbb"
              />
            </v-col>
          </v-row>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          color="primary"
          :data="emailsSubscriptionChart.data"
          hover-reveal
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          type="Bar"
        >
          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  color="info"
                  icon
                >
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  icon
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Website Views</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">Last Campaign Performance</p>

          <template #actions>
            <v-icon
              class="mr-1"
              size="small"
            >
              mdi-clock-outline
            </v-icon>
            <span class="text-caption text-grey font-weight-light">updated 10 minutes ago</span>
          </template>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          color="success"
          :data="dailySalesChart.data"
          hover-reveal
          :options="dailySalesChart.options"
          type="Line"
        >
          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  color="info"
                  icon
                >
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  icon
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h4 class="card-title font-weight-light mt-2 ml-2">Daily Sales</h4>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">
            <v-icon
              color="green"
              size="small"
            >
              mdi-arrow-up
            </v-icon>
            <span class="text-green">55%</span>&nbsp; increase in today's sales
          </p>

          <template #actions>
            <v-icon
              class="mr-1"
              size="small"
            >
              mdi-clock-outline
            </v-icon>
            <span class="text-caption text-grey font-weight-light">updated 4 minutes ago</span>
          </template>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          color="info"
          :data="dataCompletedTasksChart.data"
          hover-reveal
          :options="dataCompletedTasksChart.options"
          type="Line"
        >
          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  color="info"
                  icon
                >
                  <v-icon color="info">mdi-refresh</v-icon>
                </v-btn>
              </template>

              <span>Refresh</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  icon
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Change Date</span>
            </v-tooltip>
          </template>

          <h3 class="card-title font-weight-light mt-2 ml-2">Completed Tasks</h3>

          <p class="d-inline-flex font-weight-light ml-2 mt-1">Last Last Campaign Performance</p>

          <template #actions>
            <v-icon
              class="mr-1"
              size="small"
            >
              mdi-clock-outline
            </v-icon>
            <span class="text-caption text-grey font-weight-light"
              >campaign sent 26 minutes ago</span
            >
          </template>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        sm="6"
        lg="3"
      >
        <BaseMaterialStatsCard
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
        sm="6"
        lg="3"
      >
        <BaseMaterialStatsCard
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
        sm="6"
        lg="3"
      >
        <BaseMaterialStatsCard
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
        sm="6"
        lg="3"
      >
        <BaseMaterialStatsCard
          color="orange"
          icon="mdi-sofa"
          sub-icon="mdi-alert"
          sub-icon-color="red"
          sub-text="Get More Space..."
          title="Bookings"
          value="184"
        />
      </v-col>

      <v-col cols="12">
        <div
          class="font-weight-light mt-1"
          style="color: #3c4858; font-size: 25px"
        >
          Manage Listings
        </div>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <BaseMaterialCard
          color="transparent"
          hover-reveal
          image
        >
          <template #image>
            <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg" />
          </template>

          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  icon
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="success"
                  icon
                >
                  <v-icon class="text-success">mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="error"
                  icon
                >
                  <v-icon class="text-error">mdi-close</v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light">
            Cozy 5 Stars Apartment
          </v-card-title>

          <v-card-text class="text-body-1 text-center mb-3 font-weight-light text-grey">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
            "Naviglio" where you can enjoy the life in Barcelona.
          </v-card-text>

          <template #actions>
            <div class="text-h3 font-weight-light text-grey">$899/night</div>

            <v-spacer />

            <span class="text-caption text-grey font-weight-light">
              <v-icon size="small">mdi-map-marker</v-icon>
              Barcelona, Spain
            </span>
          </template>
        </BaseMaterialCard>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <BaseMaterialCard
          color="transparent"
          hover-reveal
          image
        >
          <template #image>
            <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg" />
          </template>

          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  icon
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="success"
                  icon
                >
                  <v-icon class="text-success">mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="error"
                  icon
                >
                  <v-icon class="text-error">mdi-close</v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light"> Office Studio </v-card-title>

          <v-card-text class="text-body-1 text-center mb-3 font-weight-light text-grey">
            The place is close to Metro Station and bus stop just 2 min by walk and near to
            "Naviglio" where you can enjoy the night life in London, UK.
          </v-card-text>

          <template #actions>
            <div class="text-h3 font-weight-light text-grey">$1.119/night</div>

            <v-spacer />

            <span class="text-caption text-grey font-weight-light">
              <v-icon size="small">mdi-map-marker</v-icon>
              London, UK
            </span>
          </template>
        </BaseMaterialCard>
      </v-col>

      <v-col
        sm="12"
        md="4"
      >
        <BaseMaterialCard
          color="transparent"
          hover-reveal
          image
        >
          <template #image>
            <v-img src="https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg" />
          </template>

          <template #reveal-actions>
            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  icon
                >
                  <v-icon>mdi-view-split-vertical</v-icon>
                </v-btn>
              </template>

              <span>View</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="success"
                  icon
                >
                  <v-icon class="text-success">mdi-pencil</v-icon>
                </v-btn>
              </template>

              <span>Edit</span>
            </v-tooltip>

            <v-tooltip location="bottom">
              <template #activator="{ props: activatorProps }">
                <v-btn
                  v-bind="activatorProps"
                  class="mx-1"
                  color="error"
                  icon
                >
                  <v-icon class="text-error">mdi-close</v-icon>
                </v-btn>
              </template>

              <span>Remove</span>
            </v-tooltip>
          </template>

          <v-card-title class="justify-center font-weight-light"> Beautiful Castle </v-card-title>

          <v-card-text class="text-body-1 text-center mb-3 font-weight-light text-grey">
            The place is close to Metro Station and bus stop just 2 min by walk and near to
            "Naviglio" where you can enjoy the main night life in Milan.
          </v-card-text>

          <template #actions>
            <div class="text-h3 font-weight-light text-grey">$459/night</div>

            <v-spacer />

            <span class="text-caption text-grey font-weight-light">
              <v-icon size="small">mdi-map-marker</v-icon>
              Milan, Italy
            </span>
          </template>
        </BaseMaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
.v-sheet {
  border-radius: 4px;
}
</style>
