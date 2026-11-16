<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import type { QNotifyCreateOptions } from 'quasar';

interface Note {
  id: string;
  color: string;
  text: string;
  icon?: boolean;
  dismiss?: boolean;
}

type NotifyPosition = NonNullable<QNotifyCreateOptions['position']>;

const $q = useQuasar();

const styleNotes = ref<Note[]>([
  {
    id: 'plain',
    color: 'info',
    text: 'This is a plain notification.',
  },
  {
    id: 'close',
    color: 'info',
    text: 'This is a notification with close button.',
    dismiss: true,
  },
  {
    id: 'icon',
    color: 'info',
    text: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
    icon: true,
    dismiss: true,
  },
  {
    id: 'primary',
    color: 'primary',
    text: "You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
    icon: true,
    dismiss: true,
  },
]);

const stateNotes = ref<Note[]>([
  {
    id: 'info',
    color: 'info',
    text: 'INFO — This is a regular alert made with the color of "info"',
    dismiss: true,
  },
  {
    id: 'success',
    color: 'positive',
    text: 'SUCCESS — This is a regular alert made with the color of "success"',
    dismiss: true,
  },
  {
    id: 'warning',
    color: 'warning',
    text: 'WARNING — This is a regular alert made with the color of "warning"',
    dismiss: true,
  },
  {
    id: 'error',
    color: 'negative',
    text: 'ERROR — This is a regular alert made with the color of "error"',
    dismiss: true,
  },
  {
    id: 'secondary',
    color: 'secondary',
    text: 'PRIMARY — This is a regular alert made with the color "secondary"',
    dismiss: true,
  },
  {
    id: 'pink',
    color: 'pink',
    text: 'PINK DARKEN-1 — This is a regular alert made with the color "pink darken-1"',
    dismiss: true,
  },
]);

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

function dismiss(list: Note[], id: string) {
  const index = list.findIndex((note) => note.id === id);
  if (index !== -1) {
    list.splice(index, 1);
  }
}

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
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Notifications</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Notification Style</div>

            <q-banner
              v-for="note in styleNotes"
              :key="note.id"
              rounded
              :class="`bg-${note.color} text-white q-mb-sm`"
            >
              <template v-if="note.icon" #avatar>
                <q-icon name="notifications" />
              </template>

              {{ note.text }}

              <template v-if="note.dismiss" #action>
                <q-btn flat dense round icon="close" @click="dismiss(styleNotes, note.id)" />
              </template>
            </q-banner>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <div class="text-h6 q-mb-md">Notification states</div>

            <q-banner
              v-for="note in stateNotes"
              :key="note.id"
              rounded
              :class="`bg-${note.color} text-white q-mb-sm`"
            >
              {{ note.text }}

              <template #action>
                <q-btn flat dense round icon="close" @click="dismiss(stateNotes, note.id)" />
              </template>
            </q-banner>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
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
                <q-btn
                  rounded
                  color="secondary"
                  label="Classic Dialog"
                  @click="classicOpen = true"
                />
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
      </div>
    </div>

    <q-dialog v-model="classicOpen">
      <q-card class="q-dialog-plugin" style="width: 500px; max-width: 90vw">
        <q-card-section class="row items-center">
          <div class="text-h6">Dialog Title</div>
          <q-space />
          <q-btn flat round dense icon="close" aria-label="Close" @click="classicOpen = false" />
        </q-card-section>

        <q-card-section>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic country, in which roasted
          parts of sentences fly into your mouth. Even the all-powerful Pointing has no control
          about the blind texts it is an almost unorthographic life One day however a small line of
          blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
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
                <a href="https://www.creative-tim.com/" target="_blank" rel="noopener"
                  >Creative Tim</a
                >. You can choose a social network or go for the classic version, whatever works
                best for you.
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
  </q-page>
</template>
