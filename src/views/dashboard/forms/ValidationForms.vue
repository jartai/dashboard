<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ValidationForms' })

interface ValidatableForm {
  validate: () => Promise<{ valid: boolean }>
}

type Rule = (value: unknown) => boolean | string

const email = ref('')
const max = ref('')
const min = ref('')
const number = ref<number | null>(null)
const url = ref('')
const required = ref('')

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)

const typeForm = ref<ValidatableForm>()
const rangeForm = ref<ValidatableForm>()

const requiredRule: Rule = (value) =>
  value === null || value === undefined || value === '' ? 'This field is required' : true

const emailRule: Rule = (value) => {
  const text = String(value ?? '')

  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text) ? true : 'Must be a valid email'
}

const numericRule: Rule = (value) => (/^\d+$/.test(String(value ?? '')) ? true : 'Must be a number')

const urlRule: Rule = (value) => {
  const text = String(value ?? '')

  return /^https?:\/\/\S+$/i.test(text) ? true : 'Must be a valid URL'
}

const minLengthRule =
  (length: number): Rule =>
  (value) =>
    String(value ?? '').length >= length ? true : `Must be at least ${length} characters`

const maxLengthRule =
  (length: number): Rule =>
  (value) =>
    String(value ?? '').length <= length ? true : `Must be at most ${length} characters`

async function validateForm(form: ValidatableForm | undefined) {
  if (!form) return

  const { valid } = await form.validate()

  if (valid) alert('Form Submitted!')
}
</script>

<template>
  <v-container
    id="validation-forms"
    fluid
    tag="section"
  >
    <BaseVComponent
      heading="Forms"
      link="components/forms"
    />

    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-mail"
          title="Register Form"
          class="py-3 px-5"
        >
          <v-form>
            <v-text-field
              color="secondary"
              label="Email Address*"
            />

            <v-text-field
              label="Password*"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show ? 'text' : 'password'"
              color="secondary"
              @click:append.prevent="show = !show"
            />

            <v-text-field
              label="Confirm Password*"
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              color="secondary"
              @click:append.prevent="show2 = !show2"
            />

            <div class="text-body-2 font-weight-light">* Required Fields</div>

            <v-card-actions class="pa-0">
              <v-checkbox label="Subscribe to newsletter" />
              <v-spacer />
              <v-btn color="success"> Register </v-btn>
            </v-card-actions>
          </v-form>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <BaseMaterialCard
          color="success"
          icon="mdi-camera-account"
          title="Login Form"
          class="py-3 px-5"
        >
          <v-form>
            <v-text-field
              color="secondary"
              label="Email Address*"
            />

            <v-text-field
              label="Password*"
              :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show3 ? 'text' : 'password'"
              color="secondary"
              @click:append.prevent="show3 = !show3"
            />

            <v-card-actions class="pa-0">
              <v-spacer />
              <v-btn color="success"> Login </v-btn>
            </v-card-actions>
          </v-form>
        </BaseMaterialCard>
      </v-col>

      <v-col cols="12">
        <BaseMaterialCard
          color="success"
          inline
          title="Type Validation"
          class="px-5 py-3"
        >
          <v-form
            ref="typeForm"
            @submit.prevent="validateForm(typeForm)"
          >
            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Required Text
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="required"
                  :rules="[requiredRule]"
                  color="secondary"
                />
              </v-col>

              <v-col>
                <code>required</code>
              </v-col>
            </v-row>

            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Email
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="email"
                  :rules="[requiredRule, emailRule]"
                  color="secondary"
                  type="email"
                />
              </v-col>

              <v-col>
                <code>type="email"</code>
              </v-col>
            </v-row>

            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Number
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="number"
                  :rules="[requiredRule, numericRule]"
                  color="secondary"
                  type="number"
                />
              </v-col>

              <v-col>
                <code>type="number"</code>
              </v-col>
            </v-row>

            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Url
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="url"
                  :rules="[requiredRule, urlRule]"
                  color="secondary"
                  type="url"
                />
              </v-col>

              <v-col>
                <code>type="url"</code>
              </v-col>
            </v-row>

            <div class="pa-3 text-center">
              <v-btn
                color="success"
                type="submit"
              >
                Validate Inputs
              </v-btn>
            </div>
          </v-form>
        </BaseMaterialCard>
      </v-col>

      <v-col cols="12">
        <BaseMaterialCard
          color="success"
          inline
          title="Range Validation"
        >
          <v-form
            ref="rangeForm"
            @submit.prevent="validateForm(rangeForm)"
          >
            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Min Length
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="min"
                  :rules="[requiredRule, minLengthRule(5)]"
                  color="secondary"
                />
              </v-col>

              <v-col>
                <code>minLength="5"</code>
              </v-col>
            </v-row>

            <v-row
              align="center"
              density="compact"
            >
              <v-col
                class="text-end text-body-1 text-grey"
                cols="2"
              >
                Max Length
              </v-col>

              <v-col cols="8">
                <v-text-field
                  v-model="max"
                  :rules="[requiredRule, maxLengthRule(5)]"
                  color="secondary"
                />
              </v-col>

              <v-col>
                <code>maxLength="5"</code>
              </v-col>
            </v-row>

            <div class="pa-3 text-center">
              <v-btn
                color="success"
                type="submit"
              >
                Validate Inputs
              </v-btn>
            </div>
          </v-form>
        </BaseMaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>
