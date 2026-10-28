<script setup lang="ts">
import { h } from 'vue'
import type { FunctionalComponent } from 'vue'

defineOptions({ name: 'Grid' })

const ParagraphHeading: FunctionalComponent = (_props, { slots }) =>
  h('div', { class: 'text-h5 font-weight-light v-col-12' }, slots.default?.())
</script>

<template>
  <v-container
    id="grid"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Grid System"
      link="components/grid"
    />

    <v-row class="text-center">
      <BaseSubheading
        subheading="XS Grid"
        text="Always Horizontal"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 3"
        :key="`cols-${n}`"
        cols="4"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-4 </v-card-text>
        </v-card>
      </v-col>

      <BaseSubheading
        subheading="SM Grid"
        text="Collapsed at 600px"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 3"
        :key="`sm-${n}`"
        cols="12"
        sm="4"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-sm-4 </v-card-text>
        </v-card>
      </v-col>

      <BaseSubheading
        subheading="MD Grid"
        text="Collapsed at 960px"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 3"
        :key="`md-${n}`"
        cols="12"
        md="4"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-md-4 </v-card-text>
        </v-card>
      </v-col>

      <BaseSubheading
        subheading="LG Grid"
        text="Collapsed at 1280px"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 3"
        :key="`lg-${n}`"
        cols="12"
        lg="4"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-lg-4 </v-card-text>
        </v-card>
      </v-col>

      <BaseSubheading
        subheading="XL Grid"
        text="Collapsed at 1920px"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 3"
        :key="`xl-${n}`"
        cols="12"
        xl="4"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-xl-4 </v-card-text>
        </v-card>
      </v-col>

      <BaseSubheading
        subheading="Mixed Grid"
        text="Showing different sizes on different screens"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        v-for="n in 4"
        :key="`mixed-${n}`"
        sm="6"
        lg="3"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-xl-4 </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <BaseSubheading
        subheading="Offset Grid"
        text="Adding some space when neede"
        class="pb-0 pl-3 mt-5"
      />

      <v-col
        md="3"
        class="pt-0"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-md-3 </v-card-text>
        </v-card>
      </v-col>

      <v-col
        md="3"
        class="ml-auto"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-md-4 ml-auto mr-auto </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col
        v-for="n in 2"
        :key="`offset-${n}`"
        class="ml-auto mr-auto"
        md="4"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-md-4 ml-auto mr-auto </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="text-center mb-12">
      <v-col
        class="ml-auto mr-auto"
        md="6"
      >
        <v-card class="mt-0">
          <v-card-text class="text-red-darken-4"> col-md-6 ml-auto mr-auto </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <ParagraphHeading class="text-center pb-0">
        <h4
          class="font-weight-light"
          style="color: rgb(60, 72, 88); font-size: 25px"
        >
          Paragraphs
        </h4>
      </ParagraphHeading>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-card>
          <v-container fluid>
            <v-row>
              <v-col
                cols="12"
                md="6"
              >
                <ParagraphHeading>Some Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment. His many legs, pitifully thin compared with
                  the size of the rest of him, waved about helplessly as he looked. "What's happened
                  to me?" he thought.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="6"
              >
                <ParagraphHeading>Another Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment. His many legs, pitifully thin compared with
                  the size of the rest of him, waved about helplessly as he looked. "What's happened
                  to me?" he thought.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <ParagraphHeading>Some Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <ParagraphHeading>Another Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <ParagraphHeading>Another Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <ParagraphHeading>Some Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment.
                </v-card-text>
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                <ParagraphHeading>Another Title Here</ParagraphHeading>

                <v-card-text class="font-weight-light">
                  One morning, when Gregor Samsa woke from troubled dreams, he found himself
                  transformed in his bed into a horrible vermin. He lay on his armour-like back, and
                  if he lifted his head a little he could see his brown belly, slightly domed and
                  divided by arches into stiff sections. The bedding was hardly able to cover it and
                  seemed ready to slide off any moment. One morning, when Gregor Samsa woke from
                  troubled dreams, he found himself transformed in his bed into a horrible vermin.
                  He lay on his armour-like back, and if he lifted his head a little he could see
                  his brown belly, slightly domed and divided by arches into stiff sections. The
                  bedding was hardly able to cover it and seemed ready to slide off any moment.
                </v-card-text>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
