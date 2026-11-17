<script setup lang="ts">
import ColorSection from '@/components/buttons/ColorSection.vue';
import SocialButtons from '@/components/buttons/SocialButtons.vue';
import StyleSection from '@/components/buttons/StyleSection.vue';
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Buttons</h1>

    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-6">
            <ColorSection />
          </div>

          <div class="col-12 col-md-6">
            <StyleSection />
          </div>

          <div class="col-12">
            <SocialButtons />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
