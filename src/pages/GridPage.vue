<script setup lang="ts">
const longText =
  'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought.';

const shortText =
  'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.';

const grids = [
  {
    title: 'XS Grid',
    caption: 'Always Horizontal',
    columnClass: 'col-4',
    label: 'col-4',
    count: 3,
  },
  {
    title: 'SM Grid',
    caption: 'Collapsed at 600px',
    columnClass: 'col-12 col-sm-4',
    label: 'col-sm-4',
    count: 3,
  },
  {
    title: 'MD Grid',
    caption: 'Collapsed at 1024px',
    columnClass: 'col-12 col-md-4',
    label: 'col-md-4',
    count: 3,
  },
  {
    title: 'LG Grid',
    caption: 'Collapsed at 1440px',
    columnClass: 'col-12 col-lg-4',
    label: 'col-lg-4',
    count: 3,
  },
  {
    title: 'XL Grid',
    caption: 'Collapsed at 1920px',
    columnClass: 'col-12 col-xl-4',
    label: 'col-xl-4',
    count: 3,
  },
  {
    title: 'Mixed Grid',
    caption: 'Showing different sizes on different screens',
    columnClass: 'col-12 col-sm-6 col-lg-3',
    label: 'col-xl-4',
    count: 4,
  },
];

const paragraphs = [
  {
    columnClass: 'col-12 col-md-6',
    title: 'Some Title Here',
    text: longText,
  },
  {
    columnClass: 'col-12 col-md-6',
    title: 'Another Title Here',
    text: longText,
  },
  {
    columnClass: 'col-12 col-md-4',
    title: 'Some Title Here',
    text: shortText,
  },
  {
    columnClass: 'col-12 col-md-4',
    title: 'Another Title Here',
    text: shortText,
  },
  {
    columnClass: 'col-12 col-md-4',
    title: 'Another Title Here',
    text: shortText,
  },
  {
    columnClass: 'col-12 col-md-4',
    title: 'Some Title Here',
    text: shortText,
  },
  {
    columnClass: 'col-12 col-md-8',
    title: 'Another Title Here',
    text: `${longText} ${longText}`,
  },
];
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Grid System</h1>

    <div class="row q-col-gutter-md text-center">
      <template v-for="grid in grids" :key="grid.title">
        <div class="col-12 text-left">
          <div class="text-h6">{{ grid.title }}</div>
          <div>{{ grid.caption }}</div>
        </div>

        <div v-for="n in grid.count" :key="`${grid.title}-${n}`" :class="grid.columnClass">
          <q-card>
            <q-card-section class="text-negative">{{ grid.label }}</q-card-section>
          </q-card>
        </div>
      </template>
    </div>

    <div class="row q-col-gutter-md text-center q-mt-md">
      <div class="col-12 text-left">
        <div class="text-h6">Offset Grid</div>
        <div>Adding some space when neede</div>
      </div>

      <div class="col-12 col-md-3">
        <q-card>
          <q-card-section class="text-negative">col-md-3</q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-3 q-ml-auto">
        <q-card>
          <q-card-section class="text-negative">col-md-4 ml-auto mr-auto</q-card-section>
        </q-card>
      </div>

      <div v-for="n in 2" :key="`offset-${n}`" class="col-12 col-md-4 q-ml-auto q-mr-auto">
        <q-card>
          <q-card-section class="text-negative">col-md-4 ml-auto mr-auto</q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-6 q-ml-auto q-mr-auto">
        <q-card>
          <q-card-section class="text-negative">col-md-6 ml-auto mr-auto</q-card-section>
        </q-card>
      </div>
    </div>

    <div class="text-h5 text-center q-mt-lg q-mb-md">Paragraphs</div>

    <q-card>
      <q-card-section>
        <div class="row q-col-gutter-md">
          <div v-for="(paragraph, index) in paragraphs" :key="index" :class="paragraph.columnClass">
            <div class="text-h6">{{ paragraph.title }}</div>
            <p>{{ paragraph.text }}</p>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>
