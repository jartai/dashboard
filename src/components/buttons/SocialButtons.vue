<script setup lang="ts">
const social = [
  {
    color: '#55ACEE',
    icon: 'mdi-twitter',
    text: 'Connect with Twitter',
  },
  {
    color: '#3B5998',
    icon: 'mdi-facebook',
    text: 'Share - 2.2K',
  },
  {
    color: '#DD4b39',
    icon: 'mdi-google-plus',
    text: 'Share on Google+',
  },
  {
    color: '#0976B4',
    icon: 'mdi-linkedin',
    text: 'Connect with LinkedIn',
  },
  {
    color: '#CC2127',
    icon: 'mdi-pinterest',
    text: 'Pint It - 212',
  },
  {
    color: '#E52D27',
    icon: 'mdi-youtube',
    text: 'View on Youtube',
  },
  {
    color: '#35465C',
    icon: 'mdi-repeat',
    text: 'Repost',
  },
  {
    color: '#333333',
    icon: 'mdi-github',
    text: 'Connect with Github',
  },
  {
    color: '#1769FF',
    icon: 'mdi-account-plus',
    text: 'Follow Us',
  },
  {
    color: '#EA4C89',
    icon: 'mdi-account-plus',
    text: 'Follow us on Dribbble',
  },
  {
    color: '#FF4500',
    icon: 'mdi-reddit',
    text: 'Repost - 232',
  },
];
</script>

<template>
  <div>
    <div class="text-h6 q-mb-sm">Social buttons</div>

    <div v-for="item in social" :key="item.text" class="row items-center q-gutter-sm q-mb-sm">
      <q-btn
        no-caps
        unelevated
        :icon="item.icon"
        :label="item.text"
        :style="{ backgroundColor: item.color, color: '#fff' }"
      />
      <q-btn unelevated :icon="item.icon" :style="{ backgroundColor: item.color, color: '#fff' }" />
      <q-btn
        round
        unelevated
        :icon="item.icon"
        :style="{ backgroundColor: item.color, color: '#fff' }"
      />
      <q-btn flat round :icon="item.icon" :style="{ color: item.color }" />
      <q-btn flat no-caps :icon="item.icon" :label="item.text" :style="{ color: item.color }" />
    </div>
  </div>
</template>
