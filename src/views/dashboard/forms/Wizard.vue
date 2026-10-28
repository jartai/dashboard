<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'Wizard' })

interface AccountType {
  icon: string
  type: string
}

interface ValidatableForm {
  validate: () => Promise<{ valid: boolean }>
}

type Rule = (value: unknown) => boolean | string

const tab = ref(0)

const tabs = ['About', 'Account', 'Address']

const accounts: AccountType[] = [
  { icon: 'mdi-pencil', type: 'design' },
  { icon: 'mdi-code-tags', type: 'code' },
  { icon: 'mdi-laptop', type: 'develop' },
]

const account = ref<string[]>([])

const address = ref('')
const city = ref('')
const email = ref('')
const first = ref('')
const image = ref<string | null>(null)
const last = ref('')
const state = ref('')
const street = ref('')

const fileInput = ref<HTMLInputElement>()

const aboutForm = ref<ValidatableForm>()
const addressForm = ref<ValidatableForm>()

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Island',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]

const requiredRule: Rule = (value) =>
  value === null || value === undefined || value === '' ? 'This field is required' : true

const stringAccount = computed(() => account.value.join(','))

const availableSteps = computed(() => {
  const steps = [0]

  if (first.value && last.value && email.value) steps.push(1)
  if (stringAccount.value && steps.includes(1)) steps.push(2)
  if (address.value && street.value && city.value && state.value && steps.includes(2)) steps.push(3)

  return steps
})

async function validateCurrentStep() {
  if (tab.value === 1) return account.value.length > 0

  const form = tab.value === 0 ? aboutForm.value : addressForm.value

  if (!form) return false

  const { valid } = await form.validate()

  return valid
}

async function next() {
  if (!(await validateCurrentStep())) return

  if (tab.value === tabs.length - 1) {
    alert('Form finished')
  } else {
    tab.value++
  }
}

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  const value = target.files?.[0]

  if (!value) {
    image.value = null
    return
  }

  image.value = URL.createObjectURL(value)
}
</script>

<template>
  <v-container
    id="wizard"
    tag="section"
  >
    <BaseMaterialWizard
      v-model="tab"
      :available-steps="availableSteps"
      :items="tabs"
      class="mx-auto"
      @click:next="next"
      @click:prev="tab--"
    >
      <v-tabs-window-item class="pb-12">
        <v-form ref="aboutForm">
          <div class="text-center text-h4 font-weight-light mb-6">
            Let's start with basic information (with validation)
          </div>

          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 500px"
          >
            <v-col
              cols="auto"
              class="text-center"
            >
              <input
                ref="fileInput"
                type="file"
                class="d-none"
                @change="onChange"
              />

              <v-card
                :class="image ? 'text-success' : 'text-grey'"
                class="mx-auto mt-0 d-inline-flex v-card--account"
                variant="outlined"
                height="106"
                width="106"
                @click="fileInput?.click()"
              >
                <v-img
                  v-if="image"
                  :src="image"
                  height="100%"
                  width="100%"
                />

                <v-icon
                  v-else
                  class="mx-auto"
                  size="96"
                >
                  mdi-account
                </v-icon>
              </v-card>

              <div class="font-weight-bold text-grey">CHOOSE PICTURE</div>
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="first"
                :rules="[requiredRule]"
                color="secondary"
                label="First Name*"
                prepend-icon="mdi-face"
                validate-on="blur"
              />

              <v-text-field
                v-model="last"
                :rules="[requiredRule]"
                color="secondary"
                label="Last Name*"
                prepend-icon="mdi-account"
                validate-on="blur"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="[requiredRule]"
                color="secondary"
                label="Email*"
                prepend-icon="mdi-email"
                validate-on="blur"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-tabs-window-item>

      <v-tabs-window-item class="pb-12">
        <v-responsive
          class="mx-auto"
          max-width="500"
        >
          <div class="text-center text-h4 text-grey font-weight-light mb-6">
            What are you doing? (checkboxes)
          </div>

          <v-item-group
            v-model="account"
            class="v-row"
            multiple
          >
            <v-item
              v-for="(item, i) in accounts"
              :key="i"
            >
              <template #default="{ isSelected, toggle }">
                <v-col
                  class="text-center"
                  cols="4"
                >
                  <v-card
                    :class="isSelected ? 'text-success' : 'text-grey'"
                    class="mb-6 mx-auto pa-10 d-inline-block v-card--account"
                    variant="outlined"
                    @click="toggle"
                  >
                    <v-icon size="large">
                      {{ item.icon }}
                    </v-icon>
                  </v-card>

                  <div
                    class="text-uppercase text-subtitle-2 text-high-emphasis"
                    v-text="item.type"
                  />
                </v-col>
              </template>
            </v-item>
          </v-item-group>
        </v-responsive>
      </v-tabs-window-item>

      <v-tabs-window-item class="pb-12">
        <div class="text-center text-h4 text-grey font-weight-light mb-6">
          Are you living in a nice area?
        </div>

        <v-form ref="addressForm">
          <v-row
            class="mx-auto"
            justify="space-around"
            style="max-width: 500px"
          >
            <v-col
              cols="12"
              md="8"
            >
              <v-text-field
                v-model="address"
                :rules="[requiredRule]"
                color="secondary"
                label="Street Name*"
                validate-on="blur"
              />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field
                v-model="street"
                :rules="[requiredRule]"
                color="secondary"
                label="Street Number*"
                validate-on="blur"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="city"
                :rules="[requiredRule]"
                color="secondary"
                label="City*"
                validate-on="blur"
              />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-autocomplete
                v-model="state"
                :autocomplete="String(Date.now())"
                :items="states"
                :rules="[requiredRule]"
                color="secondary"
                label="State*"
                validate-on="blur"
              />
            </v-col>
          </v-row>
        </v-form>
      </v-tabs-window-item>
    </BaseMaterialWizard>
  </v-container>
</template>

<style lang="scss">
.v-card.v-card.v-card--account {
  border-color: currentColor;
  border-width: 4px;

  .v-icon {
    color: inherit;
  }
}

.v-card--account,
.v-card--account:before {
  border-radius: 50%;
}
</style>
