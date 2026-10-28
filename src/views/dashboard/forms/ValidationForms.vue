<script setup lang="ts">
import { ref } from 'vue'

defineOptions({ name: 'ValidationForms' })

const email = ref('')
const max = ref('')
const min = ref('')
const number = ref<number | null>(null)
const url = ref('')
const required = ref('')

const show = ref(false)
const show2 = ref(false)
const show3 = ref(false)

const validationErrors = ref<Record<string, string[]>>({})

const errors = {
  collect: (scope: string) => validationErrors.value[scope] ?? [],
}

function validateForm() {
  alert('Form Submitted!')
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
        <form
          action=""
          data-vv-scope="form-1"
          @submit.prevent="validateForm()"
        >
          <BaseMaterialCard
            color="success"
            inline
            title="Type Validation"
            class="px-5 py-3"
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
                  v-validate="'required'"
                  :error-messages="errors.collect('form-1.required')"
                  color="secondary"
                  data-vv-name="required"
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
                  v-validate="'required|email'"
                  :error-messages="errors.collect('form-1.email')"
                  color="secondary"
                  data-vv-name="email"
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
                  v-validate="'required|numeric'"
                  :error-messages="errors.collect('form-1.number')"
                  data-vv-name="number"
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
                  v-validate="'required|url'"
                  color="secondary"
                  data-vv-name="url"
                  type="url"
                  :error-messages="errors.collect('form-1.url')"
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
          </BaseMaterialCard>
        </form>
      </v-col>

      <v-col cols="12">
        <form
          action=""
          data-vv-scope="form-2"
          @submit.prevent="validateForm()"
        >
          <BaseMaterialCard
            color="success"
            inline
            title="Range Validation"
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
                  v-validate="'required|min:5'"
                  :error-messages="errors.collect('form-2.min-length')"
                  color="secondary"
                  data-vv-name="min-length"
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
                  v-validate="'required|max:5'"
                  :error-messages="errors.collect('form-2.max-length')"
                  color="secondary"
                  data-vv-name="max-length"
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
          </BaseMaterialCard>
        </form>
      </v-col>
    </v-row>
  </v-container>
</template>
