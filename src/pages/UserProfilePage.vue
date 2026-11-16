<script setup lang="ts">
import EditProfileCard from '@/components/userprofile/EditProfileCard.vue';
import ProfileCard from '@/components/userprofile/ProfileCard.vue';
</script>

<template>
  <q-page padding>
    <div class="row q-col-gutter-md justify-center">
      <div class="col-12 col-md-8">
        <EditProfileCard />
      </div>

      <div class="col-12 col-md-4">
        <ProfileCard />
      </div>
    </div>
  </q-page>
</template>
