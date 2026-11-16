<script setup lang="ts">
const maps = [
  {
    title: 'Satellite Map',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26356315.701909266!2d-113.65984645545673!3d36.25591957613731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sus!4v1566158729223!5m2!1sen!2sus',
  },
  {
    title: 'Satellite Map',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus',
  },
  {
    title: 'Custom Skin & Settings Map',
    src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15831228695!2d-74.11976206978034!3d40.697663747508045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2sus!4v1566158235149!5m2!1sen!2sus',
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Google Maps</h1>

    <div class="column q-gutter-y-md">
      <q-card v-for="(map, index) in maps" :key="index">
        <q-card-section>
          <div class="text-h6">{{ map.title }}</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <iframe
            :src="map.src"
            :title="map.title"
            width="100%"
            height="450"
            style="border: 0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
          />
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>
