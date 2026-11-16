<template>
  <q-page padding>
    <h1 class="text-h5 q-my-none q-mb-md">Upgrade</h1>

    <div class="row justify-center">
      <div class="col-12 col-md-8">
        <q-card>
          <q-card-section>
            <div class="text-h4">Vuetify Material Dashboard</div>

            <div class="text-subtitle1">
              Are you looking for more components? Please check our Premium Version of Vuetify
              Material Dashboard
            </div>
          </q-card-section>

          <q-separator />

          <q-markup-table flat>
            <thead>
              <tr>
                <th />
                <th class="text-center">Free</th>
                <th class="text-center">PRO</th>
              </tr>
            </thead>

            <tbody class="text-center">
              <tr>
                <th class="text-left">Components</th>
                <td>60</td>
                <td>200</td>
              </tr>

              <tr>
                <th class="text-left">Plugins</th>
                <td>2</td>
                <td>4</td>
              </tr>

              <tr>
                <th class="text-left">Example Pages</th>
                <td>3</td>
                <td>8</td>
              </tr>

              <tr>
                <th class="text-left">Login, Register, Pricing, Lock Pages</th>

                <td>
                  <q-icon name="close" color="negative" />
                </td>

                <td>
                  <q-icon name="check" color="positive" />
                </td>
              </tr>

              <tr>
                <th class="text-left">Premium Support</th>

                <td>
                  <q-icon name="close" color="negative" />
                </td>

                <td>
                  <q-icon name="check" color="positive" />
                </td>
              </tr>

              <tr>
                <th />
                <td>Free</td>
                <td>Just for <b>$79</b></td>
              </tr>

              <tr>
                <th />

                <td>
                  <q-btn color="grey" label="Current Version" disable />
                </td>

                <td>
                  <q-btn
                    color="positive"
                    label="Upgrade to Pro"
                    type="a"
                    target="_blank"
                    rel="noopener"
                    href="https://www.creative-tim.com/product/vuetify-material-dashboard-pro?ref=vtymd-upgrade-page"
                  />
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
