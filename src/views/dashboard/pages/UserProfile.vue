<script setup lang="ts">
import avatar from '@/assets/avatar.jpg'

defineOptions({ name: 'DashboardPagesUserProfile' })
</script>

<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <BaseMaterialCard icon="mdi-account-outline">
          <template #after-heading>
            <div class="font-weight-light text-h6 mt-2">
              Edit Profile
              <span class="text-body-1">— Complete your profile</span>
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    disabled
                    label="Company (disabled)"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field label="User Name" />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field label="Email Address" />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field label="First Name" />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field label="Last Name" />
                </v-col>

                <v-col cols="12">
                  <v-text-field label="Adress" />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field label="City" />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field label="Country" />
                </v-col>

                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    label="Postal Code"
                    type="number"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="About Me"
                    model-value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>

                <v-col
                  class="text-end"
                  cols="12"
                >
                  <v-btn
                    class="mr-0"
                    color="success"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </BaseMaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="4"
      >
        <BaseMaterialCard :avatar="avatar">
          <v-card-text class="text-center">
            <h6 class="text-h4 mb-1 text-grey">CEO / CO-FOUNDER</h6>

            <h4 class="text-h3 font-weight-light mb-3 text-black">Alec Thompson</h4>

            <p class="font-weight-light text-grey">
              Don't be scared of the truth because we need to restart the human foundation in truth
              And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...
            </p>

            <v-btn
              class="mr-0"
              color="success"
              rounded
            >
              Follow
            </v-btn>
          </v-card-text>
        </BaseMaterialCard>
      </v-col>
    </v-row>
  </v-container>
</template>
