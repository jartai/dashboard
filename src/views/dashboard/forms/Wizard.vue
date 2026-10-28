<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'Wizard' })

interface AccountType {
  icon: string
  type: string
}

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

// vee-validate 2 shim — P9.10 decides v4 vs Vuetify rules, P9.11 rebuilds against it.
const validationErrors = ref<Record<string, string[]>>({})

const stringAccount = computed(() => account.value.join(','))

const scope = computed(() => {
  if (tab.value === 0) return 'about'
  if (tab.value === 2) return 'address'
  return 'account'
})

const availableSteps = computed(() => {
  const steps = [0]

  if (first.value && last.value && email.value) steps.push(1)
  if (stringAccount.value && steps.includes(1)) steps.push(2)
  if (address.value && street.value && city.value && state.value && steps.includes(2)) steps.push(3)

  return steps
})

function validateForm(stepScope: string) {
  return Promise.resolve((validationErrors.value[stepScope]?.length ?? 0) === 0)
}

function next() {
  validateForm(scope.value).then((valid) => {
    if (!valid) return

    if (tab.value === tabs.length - 1) {
      alert('Form finished')
    } else {
      tab.value++
    }
  })
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
        <form
          action=""
          data-vv-scope="about"
        >
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
                v-validate="'required'"
                :error-messages="validationErrors['about.first'] ?? []"
                color="secondary"
                data-vv-name="first"
                label="First Name*"
                prepend-icon="mdi-face"
                validate-on="blur"
              />

              <v-text-field
                v-model="last"
                v-validate="'required'"
                :error-messages="validationErrors['about.last'] ?? []"
                color="secondary"
                data-vv-name="last"
                label="Last Name*"
                prepend-icon="mdi-account"
                validate-on="blur"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="email"
                v-validate="'required'"
                :error-messages="validationErrors['about.email'] ?? []"
                color="secondary"
                data-vv-name="email"
                label="Email*"
                prepend-icon="mdi-email"
                validate-on="blur"
              />
            </v-col>
          </v-row>
        </form>
      </v-tabs-window-item>

      <v-tabs-window-item class="pb-12">
        <form
          action=""
          data-vv-scope="account"
        >
          <v-responsive
            class="mx-auto"
            max-width="500"
          >
            <div class="text-center text-h4 text-grey font-weight-light mb-6">
              What are you doing? (checkboxes)
            </div>

            <input
              v-validate="'required'"
              :value="stringAccount"
              type="hidden"
              data-vv-name="type"
            />

            <v-item-group
              v-model="account"
              class="v-row"
              multiple
            >
              <v-item
                v-for="(account, i) in accounts"
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
                        {{ account.icon }}
                      </v-icon>
                    </v-card>

                    <div
                      class="text-uppercase text-subtitle-2 text-high-emphasis"
                      v-text="account.type"
                    />
                  </v-col>
                </template>
              </v-item>
            </v-item-group>
          </v-responsive>
        </form>
      </v-tabs-window-item>

      <v-tabs-window-item class="pb-12">
        <div class="text-center text-h4 text-grey font-weight-light mb-6">
          Are you living in a nice area?
        </div>

        <form
          action=""
          data-vv-scope="address"
        >
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
                v-validate="'required'"
                :error-messages="validationErrors['address.address'] ?? []"
                color="secondary"
                data-vv-name="address"
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
                v-validate="'required'"
                :error-messages="validationErrors['address.street'] ?? []"
                color="secondary"
                data-vv-name="street"
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
                v-validate="'required'"
                :error-messages="validationErrors['address.city'] ?? []"
                color="secondary"
                data-vv-name="city"
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
                v-validate="'required'"
                :autocomplete="String(Date.now())"
                :error-messages="validationErrors['address.state'] ?? []"
                :items="states"
                color="secondary"
                data-vv-name="state"
                label="State*"
                validate-on="blur"
              />
            </v-col>
          </v-row>
        </form>
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
