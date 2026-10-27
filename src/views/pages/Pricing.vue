<script setup lang="ts">
import { useDisplay } from 'vuetify'
import PagesHeading from '@/views/pages/components/Heading.vue'
import PagesPlanCard from '@/views/pages/components/PlanCard.vue'

defineOptions({ name: 'PagesPricing' })

const { smAndDown } = useDisplay()

const plans = [
  {
    heading: 'Freelancer',
    icon: 'mdi-sofa',
    title: 'Free',
    text: 'This is good if your company size is between 2 and 10 Persons.',
  },
  {
    best: true,
    heading: 'Small Company',
    icon: 'mdi-home',
    title: '29$',
    text: 'This is good if your company size is between 2 and 10 Persons.',
  },
  {
    heading: 'Medium Company',
    icon: 'mdi-domain',
    title: '69$',
    text: 'This is good if your company size is between 2 and 10 Persons.',
  },
  {
    heading: 'Extra Pack',
    icon: 'mdi-bank',
    title: '159$',
    text: 'This is good if your company size is 99+ or greater Persons.',
  },
]
</script>

<template>
  <v-container
    id="pricing"
    class="fill-height"
    tag="section"
  >
    <v-row
      align="center"
      class="text-center"
      justify="center"
    >
      <v-col
        class="mb-10"
        cols="12"
      >
        <PagesHeading class="mb-12"> Pick the best plan for you </PagesHeading>

        <div class="text-h4 font-weight-light text-grey-lighten-2">
          You have Free Unlimited Updates and Premium Support on&nbsp;<br
            class="d-none d-md-block"
          />each package.
        </div>
      </v-col>

      <template
        v-for="(plan, i) in plans"
        :key="i"
      >
        <v-col
          class="d-flex"
          cols="12"
          sm="6"
          md="3"
        >
          <PagesPlanCard :plan="plan" />
        </v-col>

        <v-col
          v-if="i === 1 && smAndDown && i + 1 !== plans.length"
          class="pa-6"
          cols="12"
        >
          <v-divider />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
