<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocale } from 'vuetify'
import type { DataTableHeader } from 'vuetify'
import PagesPlanCard from '@/views/pages/components/PlanCard.vue'

defineOptions({ name: 'Rtl' })

interface Task {
  text: string
  value: boolean
}

interface Timeline {
  action?: string
  actionIcon?: string
  actions?: string[]
  chip: string
  color: string
  icon: string
  subtext?: string
  text: string
}

interface Plan {
  best?: boolean
  heading: string
  icon: string
  text: string
  title: string
}

const { current } = useLocale()
const { locale } = useI18n({ useScope: 'global' })

onMounted(() => {
  current.value = 'ar'
  locale.value = 'ar'
})

onBeforeUnmount(() => {
  current.value = 'en'
  locale.value = 'en'
})

const menu = ref(false)
const tabs = ref(0)

const headers: DataTableHeader[] = [
  { sortable: false, title: 'هوية شخصية', value: 'id' },
  { sortable: false, title: 'اسم', value: 'name' },
  { align: 'end', sortable: false, title: 'راتب', value: 'salary' },
  { align: 'end', sortable: false, title: 'بلد', value: 'country' },
  { align: 'end', sortable: false, title: 'مدينة', value: 'city' },
]

const items = [
  { id: 1, name: 'داكوتا رايس', country: 'النيجر', city: 'الود-ثهواوتا', salary: '$35,738' },
  { id: 2, name: 'مينرفا هوبر', country: 'كوراساو', city: 'Sinaai-واس', salary: '$23,738' },
  { id: 3, name: 'سيج رودريجيز', country: 'هولندا', city: 'أوفرلاند بارك', salary: '$56,142' },
  { id: 4, name: 'فيليب تشانلي', country: 'كوريا، جنوب', city: 'غلوستر', salary: '$38,735' },
  { id: 5, name: 'دوريس جرين', country: 'مالاوي', city: 'فيلدكيرشن في كيرنتن', salary: '$63,542' },
]

const plans: Plan[] = [
  {
    best: true,
    heading: 'جيوب سليمان الإنزال',
    icon: 'mdi-home',
    title: '29$',
    text: 'الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.',
  },
  {
    heading: 'المتحدة لتقليمة',
    icon: 'mdi-sofa',
    title: 'قائمة',
    text: 'الأجل المتساقطة، من. عرض بسبب وأكثرها الاندونيسية بـ.',
  },
]

const tasks = reactive<Record<number, Task[]>>({
  0: [
    {
      text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
      value: true,
    },
    {
      text: 'خطوط من الأدب الروسي العظيم? أو رسائل البريطاني الإلكتروني من بوسن?',
      value: false,
    },
    {
      text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
      value: false,
    },
    {
      text: 'قم بينشاء 4 تجارب مستخدم غير مرئية لم تعرف عنها أبدًا',
      value: true,
    },
  ],
  1: [
    {
      text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
      value: true,
    },
    {
      text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
      value: false,
    },
  ],
  2: [
    {
      text: 'خطوط من الأدب الروسي العظيم? أو رسائل البريطاني الإلكتروني من بوسن?',
      value: false,
    },
    {
      text: 'بحث. كل مما ٢٠٠٤ شاسعة العسكري جعل السبب وفرنسا الصينية أي.',
      value: true,
    },
    {
      text: 'فقد لمحاكم الاندونيسية, بلاده بالتوقيع تم يبق. جعل السبب وفرنسا الصينية أي.',
      value: true,
    },
  ],
})

const currentTasks = computed(() => tasks[tabs.value] ?? [])

const timelines: Timeline[] = [
  {
    chip: 'جهة أو',
    color: 'error',
    icon: 'mdi-briefcase',
    text: `قام كل ماذا العسكرية اوروبا. أي جورج الأخرى, كان تم أطراف القوى استبدال. أسر ميناء تكتيكاً الجديدة، قد. جُل اللا التكاليف بـ, عرفها النزاع للجيان بـ أشق. انتهت المدن الثالث من وقد.وقبل قادة إحتار عن أخر. حين ونتج أخرج قد. بالعمل المطالبة فقد قد. عن جنوب ومضى الشتاء.`,
    subtext: 'مدن أن هزم سكان, مكن.',
  },
]
</script>

<template>
  <v-container
    id="rtl"
    fluid
    tag="section"
  >
    <v-row class="mb-10">
      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          color="warning"
          inline
          text="بالإنزال وفي. خيار ومضى العمليات تم ذلك, تم معقل مرمى"
          title="لتكاليف يبق"
        >
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="items"
            />
          </v-card-text>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard>
          <template #heading>
            <v-tabs
              v-model="tabs"
              bg-color="transparent"
              slider-color="white"
            >
              <span
                class="text-subtitle-1 font-weight-light mx-3"
                style="align-self: center"
              >
                منتصف:
              </span>

              <v-tab class="mr-3">
                <v-icon class="me-2">mdi-bug</v-icon>
                ضرب
              </v-tab>

              <v-tab class="mr-3">
                <v-icon class="me-2">mdi-code-tags</v-icon>
                السفن
              </v-tab>

              <v-tab>
                <v-icon class="me-2">mdi-cloud</v-icon>
                فص.ل
              </v-tab>
            </v-tabs>
          </template>

          <v-tabs-window
            v-model="tabs"
            class="transparent"
          >
            <v-tabs-window-item
              v-for="n in 3"
              :key="n"
            >
              <v-card-text>
                <template
                  v-for="(task, i) in currentTasks"
                  :key="i"
                >
                  <v-row align="center">
                    <v-col cols="1">
                      <v-checkbox
                        v-model="task.value"
                        color="secondary"
                      />
                    </v-col>

                    <v-col cols="9">
                      <div v-text="task.text" />
                    </v-col>

                    <v-col
                      class="text-end"
                      cols="2"
                    >
                      <v-icon class="mx-1">mdi-pencil</v-icon>

                      <v-icon
                        class="mx-1"
                        color="error"
                      >
                        mdi-close
                      </v-icon>
                    </v-col>
                  </v-row>
                </template>
              </v-card-text>
            </v-tabs-window-item>
          </v-tabs-window>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-row>
          <template
            v-for="(plan, i) in plans"
            :key="i"
          >
            <v-col
              cols="12"
              md="6"
            >
              <PagesPlanCard :plan="plan" />
            </v-col>
          </template>

          <v-col cols="12">
            <BaseMaterialTestimony
              author="أليك طومسون"
              blur="بعد ووكون الأمر, دون عقبت الادي أن، قد حول قادة حكومية يتعلقً. أخر حصدة اوروبا أن، كلا مهمّات اسيوبين التخطيط عل. وإيطاليا الاوروبي و نفس. صفحة احداث أضف ان، هو مرجع نهائية كمة. تم مايو لدفع المدن دو, جعل أن عسكرياً التحول استرجاع. أن تبر"
              handle="@أليك طومسون"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-timeline
          align="start"
          density="compact"
        >
          <v-timeline-item
            v-for="(timeline, i) in timelines"
            :key="i"
            :color="timeline.color"
            fill-dot
            :icon="timeline.icon"
            size="large"
          >
            <v-card class="pa-6">
              <v-chip
                class="text-overline mb-3"
                :color="timeline.color"
                size="small"
              >
                {{ timeline.chip }}
              </v-chip>

              <p
                class="text-subtitle-1"
                v-text="timeline.text"
              />

              <div
                class="text-uppercase text-body-2"
                v-text="timeline.subtext"
              />

              <template v-if="timeline.action">
                <v-divider class="mb-3" />

                <v-menu
                  v-model="menu"
                  location="bottom end"
                  origin="top left"
                  transition="scale-transition"
                >
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      :color="timeline.action"
                      rounded
                      size="large"
                    >
                      <v-icon start>{{ timeline.actionIcon }}</v-icon>

                      <v-icon end>
                        {{ menu ? 'mdi-menu-up' : 'mdi-menu-down' }}
                      </v-icon>
                    </v-btn>
                  </template>

                  <v-sheet>
                    <v-list>
                      <v-list-item
                        v-for="a in timeline.actions"
                        :key="a"
                        link
                      >
                        <v-list-item-title>{{ a }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-sheet>
                </v-menu>
              </template>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>
