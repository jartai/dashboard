<script setup lang="ts">
const leader =
  'I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.';
const leaderShort = `${leader.slice(0, 105)}...`;
const material = 'The Life of Material Dashboard';

const samples = [
  {
    label: 'Display 4',
    text: material,
    textClass: 'text-h1',
  },
  {
    label: 'Display 3',
    text: material,
    textClass: 'text-h2',
  },
  {
    label: 'Display 2',
    text: material,
    textClass: 'text-h3',
  },
  {
    label: 'Display 1',
    text: material,
    textClass: 'text-h4',
  },
  {
    label: 'Headline',
    text: material,
    textClass: 'text-h5',
  },
  {
    label: 'Title',
    text: material,
    textClass: 'text-h6 text-uppercase',
  },
  {
    label: 'Paragraph',
    text: leader,
    textClass: 'text-body1',
  },
  {
    label: 'Quote',
    text: leader,
    textClass: 'text-body1',
    cite: 'Kanye West, Musician',
  },
  {
    label: 'Muted Text',
    text: leaderShort,
    textClass: 'text-body1 text-grey-7',
  },
  {
    label: 'Primary Text',
    text: leaderShort,
    textClass: 'text-body1 text-primary',
  },
  {
    label: 'Info Text',
    text: leaderShort,
    textClass: 'text-body1 text-info',
  },
  {
    label: 'Success Text',
    text: leaderShort,
    textClass: 'text-body1 text-positive',
  },
  {
    label: 'Warning Text',
    text: leaderShort,
    textClass: 'text-body1 text-warning',
  },
  {
    label: 'Danger Text',
    text: leaderShort,
    textClass: 'text-body1 text-negative',
  },
  {
    label: 'Small Tag',
    text: 'Header with small subtitle',
    textClass: 'text-h4',
    note: "Use 'small' tag for the headers",
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Typography</h1>

    <q-card>
      <q-card-section>
        <div class="text-h4">Material Dashboard Heading</div>
        <div class="text-subtitle1">Created using Roboto Font Family</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div
          v-for="sample in samples"
          :key="sample.label"
          class="row items-center q-col-gutter-md q-mb-md"
        >
          <div class="col-12 col-md-3 text-caption text-grey-7">
            {{ sample.label }}
          </div>

          <div class="col-12 col-md-9">
            <div :class="sample.textClass">{{ sample.text }}</div>
            <div v-if="sample.cite" class="text-caption">{{ sample.cite }}</div>
            <div v-if="sample.note" class="text-caption">{{ sample.note }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
