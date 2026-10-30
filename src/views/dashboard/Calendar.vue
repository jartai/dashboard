<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'DashboardCalendar' })

type CalendarType = 'month' | 'week' | 'day'

const calendar = ref('2019-01-08')
const calendarRef = ref()
const type = ref<CalendarType>('month')
const types: CalendarType[] = ['month', 'week', 'day']

const events = [
  { name: 'Vacation', start: '2018-12-30', end: '2019-01-02' },
  { name: 'Meeting', start: '2019-01-07' },
  { name: '30th Birthday', start: '2019-01-03' },
  { name: 'New Year', start: '2019-01-01' },
  { name: 'Conference', start: '2019-01-21' },
  { name: 'Hackathon', start: '2019-01-30', end: '2019-02-01' },
]
</script>

<template>
  <v-container
    id="calendar"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Calendar"
      link="components/calendars"
    />

    <v-row>
      <v-col
        class="mx-auto"
        cols="12"
        md="10"
      >
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>August 2019</v-toolbar-title>

            <v-spacer />

            <v-btn
              v-for="(t, i) in types"
              :key="i"
              class="mx-1 text-lowercase"
              color="secondary"
              rounded
              @click="type = t"
            >
              {{ t }}
            </v-btn>

            <v-spacer />

            <v-btn
              class="mx-1 text-lowercase"
              color="secondary"
              rounded
              @click="calendarRef?.prev()"
            >
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <v-btn
              class="mx-1 text-lowercase"
              color="secondary"
              rounded
              @click="calendarRef?.next()"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-toolbar>

          <v-sheet
            class="mt-5"
            flat
            height="600"
          >
            <v-calendar
              ref="calendarRef"
              v-model="calendar"
              :events="events"
              event-color="primary"
              now="2019-01-08"
              :type="type"
            />
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss">
#calendar {
  .v-calendar-weekly__day:last-child,
  .v-calendar-weekly__head-weekday:last-child {
    border-right: none;
  }

  .v-calendar-weekly__week:last-child .v-calendar-weekly__day {
    border-bottom: none;
  }

  .v-sheet .v-icon {
    color: #fff;
  }

  .v-calendar-weekly__day {
    border-bottom: none;
  }

  .v-calendar-weekly__head-weekday {
    font-weight: 700;
  }

  .v-calendar-weekly__head-weekday.v-present {
    color: #333 !important;
  }

  .v-calendar-weekly .v-calendar-weekly__head-weekday {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;

    &.v-outside {
      background: #fff;
    }
  }

  .v-calendar-weekly__day-label {
    .v-btn.transparent {
      margin-right: 0 !important;

      .v-btn__content {
        color: #333 !important;
      }
    }

    .v-btn--icon {
      margin-right: 0 !important;

      .v-btn__content {
        color: #fff !important;
      }
    }
  }

  .v-event.v-event-end {
    width: 100%;
  }

  .v-event {
    &.bg-primary {
      box-shadow:
        0 4px 20px 0 rgba(0, 0, 0, 0.14),
        0 7px 10px -5px rgba(156, 39, 176, 0.4);
    }

    &.bg-secondary {
      box-shadow:
        0 4px 20px 0 rgba(0, 0, 0, 0.14),
        0 7px 10px -5px rgba(156, 39, 176, 0.4);
    }

    &.bg-info {
      box-shadow:
        0 4px 20px 0 rgba(0, 0, 0, 0.14),
        0 7px 10px -5px rgba(0, 188, 212, 0.4);
    }

    &.bg-success {
      box-shadow:
        0 4px 20px 0 rgba(0, 0, 0, 0.14),
        0 7px 10px -5px rgba(76, 175, 80, 0.4);
    }

    &.bg-warning {
      box-shadow:
        0 4px 20px 0 rgba(0, 0, 0, 0.14),
        0 7px 10px -5px rgba(255, 152, 0, 0.4);
    }
  }
}
</style>
