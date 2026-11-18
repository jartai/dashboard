<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';

const $q = useQuasar();

const registerEmail = ref('');
const registerPassword = ref('');
const confirmPassword = ref('');
const subscribed = ref(false);
const showRegister = ref(false);
const showConfirm = ref(false);

const loginEmail = ref('');
const loginPassword = ref('');
const showLogin = ref(false);

const requiredText = ref('');
const email = ref('');
const number = ref('');
const url = ref('');
const minText = ref('');
const maxText = ref('');

function submitted() {
  $q.notify({
    message: 'Form Submitted!',
    color: 'positive',
  });
}

function required(value: string) {
  return value.trim().length > 0 || 'Required';
}

function emailRule(value: string) {
  return /.+@.+\..+/.test(value) || 'Enter a valid email';
}

function numberRule(value: string) {
  return /^\d+$/.test(value) || 'Enter a number';
}

function urlRule(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:' || 'Enter a valid URL';
  } catch {
    return 'Enter a valid URL';
  }
}

function minRule(value: string) {
  return value.length >= 5 || 'At least 5 characters';
}

function maxRule(value: string) {
  return value.length <= 5 || 'At most 5 characters';
}
</script>

<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Validation Forms</h1>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-mail" color="positive" size="sm" />
            <span class="text-h6">Register Form</span>

            <q-input
              v-model="registerEmail"
              class="q-mt-md"
              label="Email Address*"
              color="secondary"
            />

            <q-input
              v-model="registerPassword"
              :type="showRegister ? 'text' : 'password'"
              label="Password*"
              color="secondary"
            >
              <template #append>
                <q-icon
                  :name="showRegister ? 'mdi-eye' : 'mdi-eye-off'"
                  class="cursor-pointer"
                  @click="showRegister = !showRegister"
                />
              </template>
            </q-input>

            <q-input
              v-model="confirmPassword"
              :type="showConfirm ? 'text' : 'password'"
              label="Confirm Password*"
              color="secondary"
            >
              <template #append>
                <q-icon
                  :name="showConfirm ? 'mdi-eye' : 'mdi-eye-off'"
                  class="cursor-pointer"
                  @click="showConfirm = !showConfirm"
                />
              </template>
            </q-input>

            <div>* Required Fields</div>
          </q-card-section>

          <q-card-actions>
            <q-checkbox v-model="subscribed" label="Subscribe to newsletter" />
            <q-space />
            <q-btn color="positive" label="Register" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12 col-md-6">
        <q-card>
          <q-card-section>
            <q-icon name="mdi-account-box" color="positive" size="sm" />
            <span class="text-h6">Login Form</span>

            <q-input
              v-model="loginEmail"
              class="q-mt-md"
              label="Email Address*"
              color="secondary"
            />

            <q-input
              v-model="loginPassword"
              :type="showLogin ? 'text' : 'password'"
              label="Password*"
              color="secondary"
            >
              <template #append>
                <q-icon
                  :name="showLogin ? 'mdi-eye' : 'mdi-eye-off'"
                  class="cursor-pointer"
                  @click="showLogin = !showLogin"
                />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions>
            <q-space />
            <q-btn color="positive" label="Login" />
          </q-card-actions>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Type Validation</div>

            <q-form greedy @submit.prevent="submitted">
              <div class="row items-center q-col-gutter-sm q-mt-sm">
                <div class="col-12 col-sm-3 text-grey-7">Required Text</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="requiredText"
                    color="secondary"
                    lazy-rules
                    :rules="[required]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>required</code></div>

                <div class="col-12 col-sm-3 text-grey-7">Email</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="email"
                    type="email"
                    color="secondary"
                    lazy-rules
                    :rules="[required, emailRule]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>type="email"</code></div>

                <div class="col-12 col-sm-3 text-grey-7">Number</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="number"
                    type="number"
                    color="secondary"
                    lazy-rules
                    :rules="[required, numberRule]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>type="number"</code></div>

                <div class="col-12 col-sm-3 text-grey-7">Url</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="url"
                    type="url"
                    color="secondary"
                    lazy-rules
                    :rules="[required, urlRule]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>type="url"</code></div>
              </div>

              <div class="text-center q-mt-md">
                <q-btn type="submit" color="positive" label="Validate Inputs" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Range Validation</div>

            <q-form greedy @submit.prevent="submitted">
              <div class="row items-center q-col-gutter-sm q-mt-sm">
                <div class="col-12 col-sm-3 text-grey-7">Min Length</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="minText"
                    color="secondary"
                    lazy-rules
                    :rules="[required, minRule]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>minLength="5"</code></div>

                <div class="col-12 col-sm-3 text-grey-7">Max Length</div>
                <div class="col-12 col-sm-6">
                  <q-input
                    v-model="maxText"
                    color="secondary"
                    lazy-rules
                    :rules="[required, maxRule]"
                  />
                </div>
                <div class="col-12 col-sm-3"><code>maxLength="5"</code></div>
              </div>

              <div class="text-center q-mt-md">
                <q-btn type="submit" color="positive" label="Validate Inputs" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
