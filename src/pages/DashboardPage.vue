<script setup lang="ts">
import ChartCard from '@/components/dashboard/ChartCard.vue';
import ListingCard from '@/components/dashboard/ListingCard.vue';
import SalesCard from '@/components/dashboard/SalesCard.vue';
import StatCard from '@/components/dashboard/StatCard.vue';

const stats = [
  {
    title: 'Followers',
    value: '+245',
    icon: 'mdi-twitter',
    color: 'info',
    subIcon: 'mdi-clock',
    subColor: 'grey',
    subText: 'Just Updated',
  },
  {
    title: 'Website Visits',
    value: '75.521',
    icon: 'mdi-poll',
    color: 'primary',
    subIcon: 'mdi-tag',
    subColor: 'grey',
    subText: 'Tracked from Google Analytics',
  },
  {
    title: 'Revenue',
    value: '$ 34,245',
    icon: 'mdi-store',
    color: 'positive',
    subIcon: 'mdi-calendar',
    subColor: 'grey',
    subText: 'Last 24 Hours',
  },
  {
    title: 'Bookings',
    value: '184',
    icon: 'mdi-sofa',
    color: 'orange',
    subIcon: 'mdi-alert',
    subColor: 'negative',
    subText: 'Get More Space...',
  },
];

const listings = [
  {
    title: 'Cozy 5 Stars Apartment',
    text: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the life in Barcelona.',
    image: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-2.jpg',
    price: '$899/night',
    place: 'Barcelona, Spain',
  },
  {
    title: 'Office Studio',
    text: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
    image: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-3.jpg',
    price: '$1.119/night',
    place: 'London, UK',
  },
  {
    title: 'Beautiful Castle',
    text: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
    image: 'https://demos.creative-tim.com/vue-material-dashboard-pro/img/card-1.jpg',
    price: '$459/night',
    place: 'Milan, Italy',
  },
];
</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12">
        <SalesCard />
      </div>

      <div class="col-12 col-lg-4">
        <ChartCard title="Website Views" updated="updated 10 minutes ago">
          Last Campaign Performance
        </ChartCard>
      </div>

      <div class="col-12 col-lg-4">
        <ChartCard title="Daily Sales" updated="updated 4 minutes ago">
          <q-icon name="mdi-arrow-up" color="positive" size="xs" />
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

      <div class="col-12">
        <div class="text-h5">Manage Listings</div>
      </div>

      <div v-for="listing in listings" :key="listing.title" class="col-12 col-md-4">
        <ListingCard v-bind="listing" />
      </div>
    </div>
  </q-page>
</template>
