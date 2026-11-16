<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import type { QNotifyCreateOptions } from 'quasar';

type NotifyPosition = NonNullable<QNotifyCreateOptions['position']>;

const $q = useQuasar();

const directions: {
  label: string;
  position: NotifyPosition;
}[] = [
  {
    label: 'top left',
    position: 'top-left',
  },
  {
    label: 'top center',
    position: 'top',
  },
  {
    label: 'top right',
    position: 'top-right',
  },
  {
    label: 'bottom left',
    position: 'bottom-left',
  },
  {
    label: 'bottom center',
    position: 'bottom',
  },
  {
    label: 'bottom right',
    position: 'bottom-right',
  },
];

const classicOpen = ref(false);
const noticeOpen = ref(false);
const alertOpen = ref(false);

function showNotice(position: NotifyPosition) {
  const types = ['info', 'positive', 'warning', 'negative'] as const;
  const type = types[Math.floor(Math.random() * types.length)] ?? 'info';

  $q.notify({
    type,
    position,
    message: 'Welcome to MATERIAL DASHBOARD — a beautiful admin panel for every web developer.',
  });
}
</script>

<template>
  <q-card>
    <q-card-section class="text-center">
      <div class="text-h6 q-mb-md">Snackbar Locations</div>

      <div class="row justify-center q-col-gutter-sm q-mb-lg">
        <div v-for="direction in directions" :key="direction.label" class="col-4 col-lg-3">
          <q-btn
            class="full-width"
            color="secondary"
            :label="direction.label"
            @click="showNotice(direction.position)"
          />
        </div>
      </div>

      <div class="text-h6 q-mb-md">Dialogs</div>

      <div class="row justify-center q-col-gutter-sm">
        <div class="col-12 col-sm-4">
          <q-btn rounded color="secondary" label="Classic Dialog" @click="classicOpen = true" />
        </div>

        <div class="col-12 col-sm-4">
          <q-btn rounded color="info" label="Notice Modal" @click="noticeOpen = true" />
        </div>

        <div class="col-12 col-sm-4">
          <q-btn rounded color="pink" label="Small Alert Modal" @click="alertOpen = true" />
        </div>
      </div>
    </q-card-section>
  </q-card>

  <q-dialog v-model="classicOpen">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 90vw">
      <q-card-section class="row items-center">
        <div class="text-h6">Dialog Title</div>
        <q-space />
        <q-btn flat round dense icon="close" aria-label="Close" @click="classicOpen = false" />
      </q-card-section>

      <q-card-section>
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean. A small river named Duden flows by their place and
        supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
        parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about
        the blind texts it is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat color="negative" label="Close" @click="classicOpen = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>

  <q-dialog v-model="noticeOpen">
    <q-card class="q-dialog-plugin" style="width: 500px; max-width: 90vw">
      <q-card-section class="row items-center">
        <div class="text-h6">How do you become an affiliate?</div>
        <q-space />
        <q-btn flat round dense icon="close" aria-label="Close" @click="noticeOpen = false" />
      </q-card-section>

      <q-card-section class="text-center">
        <div class="row q-col-gutter-md items-center">
          <div class="col-12 col-md-8 text-left">
            <div class="text-weight-bold">1. Register</div>

            <div class="text-grey-7">
              The first step is to create an account at Creative Tim. You can choose a social
              network or go for the classic version, whatever works best for you.
            </div>
          </div>

          <div class="col-md-4 gt-sm">
            <q-img
              src="https://demos.creative-tim.com/material-dashboard/assets/img/card-1.jpg"
              alt=""
              height="100px"
            />
          </div>

          <div class="col-12 col-md-8 text-left">
            <div class="text-weight-bold">2. Apply</div>

            <div class="text-grey-7">
              The first step is to create an account at
              <a href="https://www.creative-tim.com/" target="_blank" rel="noopener">Creative Tim</a
              >. You can choose a social network or go for the classic version, whatever works best
              for you.
            </div>
          </div>

          <div class="col-md-4 gt-sm">
            <q-img
              src="https://demos.creative-tim.com/material-dashboard/assets/img/card-2.jpg"
              alt=""
              height="100px"
            />
          </div>

          <div class="col-12">
            If you have more questions, don't hesitate to contact us or send us a tweet
            @creativetim. We're here to help!
          </div>
        </div>

        <q-btn
          class="q-mt-md"
          rounded
          color="info"
          label="Sounds good"
          @click="noticeOpen = false"
        />
      </q-card-section>
    </q-card>
  </q-dialog>

  <q-dialog v-model="alertOpen">
    <q-card class="q-dialog-plugin" style="width: 300px; max-width: 90vw">
      <q-card-section class="row items-center">
        <div class="text-h6">Are you sure?</div>
        <q-space />
        <q-btn flat round dense icon="close" aria-label="Close" @click="alertOpen = false" />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Nevermind" @click="alertOpen = false" />
        <q-btn flat color="positive" label="Yes" @click="alertOpen = false" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
