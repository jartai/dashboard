<script setup lang="ts">
import * as ChartistLib from 'chartist'

defineOptions({ name: 'Charts' })

const colouredLine = {
  data: {
    labels: ["'06", "'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
    series: [[275, 500, 290, 55, 700, 700, 500, 750, 630, 900, 930]],
  },
  options: {
    low: 0,
    high: 1000,
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
}

const dailySalesChart = {
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    series: [[12, 17, 7, 17, 23, 18, 38]],
  },
  options: {
    low: 0,
    high: 50,
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    showPoint: false,
  },
}

const dataCompletedTasksChart = {
  data: {
    labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]],
  },
  options: {
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
    lineSmooth: ChartistLib.Interpolation.none(),
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

const multipleBar = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [
      [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
      [400, 200, 250, 575, 450, 300, 285, 370, 370, 410, 620, 690],
    ],
  },
  options: {
    seriesBarDistance: 10,
    lineSmooth: ChartistLib.Interpolation.none(),
    axisX: { showGrid: false },
    low: 0,
    high: 900,
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

const multipleLine = {
  data: {
    labels: ["'06", "'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15"],
    series: [
      [275, 500, 290, 55, 700, 700, 500, 750, 630, 900, 930],
      [575, 600, 490, 75, 300, 400, 700, 450, 130, 200, 330],
      [575, 300, 890, 155, 640, 540, 800, 250, 230, 400, 630],
    ],
  },
  options: {
    low: 0,
    high: 1000,
    chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
  },
}

const pie = {
  data: {
    series: [62, 32, 6],
  },
  options: {
    labelInterpolationFnc: (value: string) => `${value}%`,
  },
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          class="px-4 py-3"
          color="success"
          :data="dailySalesChart.data"
          :options="dailySalesChart.options"
          type="Line"
        >
          <h4 class="text-h4 font-weight-light mt-2">Rounded Line Chart</h4>

          <div class="text-grey font-weight-light">Line Chart</div>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          class="px-4 py-3"
          color="orange-darken-1"
          :data="emailsSubscriptionChart.data"
          :options="emailsSubscriptionChart.options"
          :responsive-options="emailsSubscriptionChart.responsiveOptions"
          type="Line"
        >
          <h4 class="text-h4 font-weight-light mt-2">Line Chart With Points</h4>

          <div class="text-grey font-weight-light">Straight Lines Chart</div>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        lg="4"
      >
        <BaseMaterialChartCard
          class="px-4 py-3"
          color="info"
          :data="dataCompletedTasksChart.data"
          :options="dataCompletedTasksChart.options"
          type="Bar"
        >
          <h4 class="text-h4 font-weight-light mt-2">Simple Bar Chart</h4>

          <div class="text-grey font-weight-light">Last Last Campaign Performance</div>
        </BaseMaterialChartCard>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <BaseMaterialCard
          id="coloured-line"
          class="px-4 py-3"
          color="info"
          icon="mdi-chart-timeline-variant"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Coloured Line Chart
              <span class="text-subtitle-1">— Rounded</span>
            </div>
          </template>

          <chartist
            class="mt-3"
            :data="colouredLine.data"
            :options="colouredLine.options"
            style="max-height: 150px"
            type="Line"
          />
        </BaseMaterialCard>

        <div class="py-3" />

        <BaseMaterialCard
          id="coloured-line"
          class="px-4 py-3"
          color="warning"
          icon="mdi-chart-timeline-variant"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Coloured Line Chart
              <span class="text-subtitle-1">— Multiple</span>
            </div>
          </template>

          <chartist
            class="mt-3"
            :data="multipleLine.data"
            :options="multipleLine.options"
            style="max-height: 150px"
            type="Line"
          />
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <BaseMaterialCard
          id="multiple-bar"
          class="px-4 py-3"
          color="success"
          icon="mdi-poll-box"
        >
          <template #after-heading>
            <div class="text-h4 mt-2 font-weight-light">
              Multiple Bars Chart
              <span class="text-subtitle-1">— Bar Chart</span>
            </div>
          </template>

          <chartist
            class="mt-3"
            :data="multipleBar.data"
            :options="multipleBar.options"
            style="max-height: 150px"
            type="Bar"
          />
        </BaseMaterialCard>

        <div class="py-3" />

        <BaseMaterialCard
          id="pie"
          class="px-4 py-3"
          color="success"
          icon="mdi-chart-pie"
          title="Pie Chart"
        >
          <chartist
            :data="pie.data"
            :options="pie.options"
            style="max-height: 250px"
            type="Pie"
          />

          <v-divider class="ma-3" />

          <div class="px-3">
            <div class="text-body-2 text-uppercase text-grey font-weight-bold mb-3">Legend</div>

            <v-row
              align="center"
              class="ma-0"
            >
              <v-avatar
                class="mr-1"
                color="info"
                size="12"
              />

              <span class="mr-3 font-weight-light">Apple</span>

              <v-avatar
                class="mr-1"
                color="warning"
                size="12"
              />

              <span class="mr-3 font-weight-light">Samsung</span>

              <v-avatar
                class="mr-1"
                color="red"
                size="12"
              />

              <span class="mr-3 font-weight-light">Windows Phone</span>
            </v-row>
          </div>
        </BaseMaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#coloured-line {
  .ct-series-a .ct-line,
  .ct-series-a .ct-point {
    stroke: #00cae3 !important;
  }
}

#multiple-bar {
  .ct-series-a .ct-bar {
    stroke: #00cae3 !important;
  }

  .ct-series-b .ct-bar {
    stroke: #f44336 !important;
  }
}

#pie {
  .ct-series-a .ct-slice-pie {
    fill: #00cae3 !important;
  }

  .ct-series-b .ct-slice-pie {
    fill: #f44336 !important;
  }
}
</style>
