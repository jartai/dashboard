<script setup lang="ts">
import ChartCard from '@/components/dashboard/ChartCard.vue';
import EmployeesCard from '@/components/dashboard/EmployeesCard.vue';
import StatCard from '@/components/dashboard/StatCard.vue';
import TasksCard from '@/components/dashboard/TasksCard.vue';

const stats = [
  {
    title: 'Followers',
    value: '+245',
    icon: 'groups',
    color: 'info',
    subIcon: 'schedule',
    subColor: 'grey',
    subText: 'Just Updated',
  },
  {
    title: 'Website Visits',
    value: '75.521',
    icon: 'bar_chart',
    color: 'primary',
    subIcon: 'local_offer',
    subColor: 'grey',
    subText: 'Tracked from Google Analytics',
  },
  {
    title: 'Revenue',
    value: '$34,245',
    icon: 'store',
    color: 'positive',
    subIcon: 'calendar_today',
    subColor: 'grey',
    subText: 'Last 24 Hours',
  },
  {
    title: 'Bookings',
    value: '184',
    icon: 'weekend',
    color: 'orange',
    subIcon: 'warning',
    subColor: 'negative',
    subText: 'Get More Space...',
  },
];
</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-lg-4">
        <ChartCard title="Website Views" updated="updated 10 minutes ago">
          Last Campaign Performance
        </ChartCard>
      </div>

      <div class="col-12 col-lg-4">
        <ChartCard title="Daily Sales" updated="updated 4 minutes ago">
          <q-icon name="arrow_upward" color="positive" size="xs" />
          <span class="text-positive">55%</span>
          increase in today's sales
        </ChartCard>
      </div>

      <div class="col-12 col-lg-4">
        <ChartCard title="Completed Tasks" updated="campaign sent 26 minutes ago">
          Last Last Campaign Performance
        </ChartCard>
      </div>

      <div v-for="stat in stats" :key="stat.title" class="col-12 col-sm-6 col-lg-3">
        <StatCard v-bind="stat" />
      </div>

      <div class="col-12 col-md-6">
        <EmployeesCard />
      </div>

      <div class="col-12 col-md-6">
        <TasksCard />
      </div>
    </div>
  </q-page>
</template>
