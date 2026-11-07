<template>
  <v-navigation-drawer v-model="app.drawer">
    <v-list
      density="compact"
      nav
    >
      <v-list-subheader>Dashboards</v-list-subheader>

      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        to="/"
      />

      <v-list-item
        prepend-icon="mdi-view-dashboard"
        title="Dashboard"
        to="/dashboard"
      />

      <v-list-subheader>Components</v-list-subheader>

      <v-list-item
        prepend-icon="mdi-chart-line"
        title="Charts"
        to="/charts"
      />

      <v-list-item
        prepend-icon="mdi-calendar"
        title="Calendar"
        to="/calendar"
      />

      <v-list-item
        prepend-icon="mdi-widgets"
        title="Widgets"
        to="/widgets"
      />

      <v-list-group value="tables">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-table"
            title="Tables"
          />
        </template>

        <v-list-item
          title="Regular Tables"
          to="/tables/regular"
        />

        <v-list-item
          title="Data Tables"
          to="/tables/data"
        />

        <v-list-item
          title="Extended Tables"
          to="/tables/extended"
        />
      </v-list-group>

      <v-list-group value="forms">
        <template #activator="{ props }">
          <v-list-item
            v-bind="props"
            prepend-icon="mdi-form-select"
            title="Forms"
          />
        </template>

        <v-list-item
          title="Regular Forms"
          to="/forms/regular"
        />

        <v-list-item
          title="Extended Forms"
          to="/forms/extended"
        />

        <v-list-item
          title="Validation Forms"
          to="/forms/validation"
        />

        <v-list-item
          title="Wizard"
          to="/forms/wizard"
        />
      </v-list-group>

      <v-list-subheader>Pages</v-list-subheader>

      <v-list-item
        prepend-icon="mdi-account"
        title="User Profile"
        to="/profile"
      />

      <v-list-item
        prepend-icon="mdi-currency-usd"
        title="Pricing"
        to="/pricing"
      />

      <v-list-item
        prepend-icon="mdi-timeline"
        title="Timeline"
        to="/timeline"
      />

      <v-list-item
        prepend-icon="mdi-swap-horizontal"
        title="RTL"
        to="/rtl"
      />

      <v-list-item
        prepend-icon="mdi-login"
        title="Login"
        to="/auth/login"
      />

      <v-list-item
        prepend-icon="mdi-account-plus"
        title="Register"
        to="/auth/register"
      />

      <v-list-item
        prepend-icon="mdi-lock"
        title="Lock"
        to="/auth/lock"
      />

      <v-list-item
        prepend-icon="mdi-alert"
        title="Error"
        to="/error"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  // Utilities
  import { useAppStore } from '@/stores/app'

  const app = useAppStore()
</script>
