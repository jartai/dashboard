<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useDisplay, useLocale } from 'vuetify'
import { useUiStore } from '@/stores/ui'
import { navItems, profileNav, type NavItem } from '@/config/navigation'
import BaseItem from '@/components/base/Item.vue'
import BaseItemGroup from '@/components/base/ItemGroup.vue'

defineOptions({ name: 'DashboardCoreDrawer', inheritAttrs: false })

const ui = useUiStore()
const { t } = useI18n()
const { smAndDown } = useDisplay()
const { isRtl } = useLocale()

const drawerIsDark = computed(
  () => ui.barColor !== 'rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7)',
)

function mapItem(item: NavItem): NavItem {
  return {
    ...item,
    children: item.children?.map(mapItem),
    title: t(item.title),
  }
}

const items = computed(() => navItems.map(mapItem))
const profile = computed(() => mapItem(profileNav))

// On small screens the rail collapses; the original emitted this to its parent.
watch(smAndDown, (val) => {
  ui.expandOnHover = !val
})
</script>

<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="ui.drawer"
    :theme="drawerIsDark ? 'dark' : 'light'"
    :expand-on-hover="ui.expandOnHover"
    :location="isRtl ? 'end' : 'start'"
    :image="ui.barImage"
    mobile-breakpoint="md"
    width="260"
    v-bind="$attrs"
  >
    <v-list-item class="text-uppercase font-weight-regular text-display-medium">
      <span class="logo-mini">{{ $t('ct') }}</span>
      <span class="logo-normal">{{ $t('tim') }}</span>
    </v-list-item>

    <v-divider class="mb-1" />

    <v-list
      density="compact"
      nav
    >
      <BaseItemGroup :item="profile" />
    </v-list>

    <v-divider class="mb-2" />

    <v-list nav>
      <template
        v-for="(item, i) in items"
        :key="`nav-${i}`"
      >
        <BaseItemGroup
          v-if="item.children"
          :item="item"
        />
        <BaseItem
          v-else
          :item="item"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss">
#core-navigation-drawer.v-navigation-drawer--rail .v-list-item {
  justify-content: flex-start !important;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-group--sub-group {
  display: block !important;
}

#core-navigation-drawer.v-navigation-drawer--rail
  .v-list-group__header.v-list-item--active::before {
  opacity: 0.24;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-item__icon--text,
#core-navigation-drawer.v-navigation-drawer--rail .v-list-item__icon:first-child {
  justify-content: center;
  text-align: center;
  width: 20px;
  margin-right: 24px;
  margin-left: 12px !important;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list--dense .v-list-item__icon--text,
#core-navigation-drawer.v-navigation-drawer--rail .v-list--dense .v-list-item__icon:first-child {
  margin-top: 10px;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-group--sub-group .v-list-item {
  padding-left: 8px;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-group__header {
  padding-right: 0;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-item__icon--text {
  margin-top: 19px;
  order: 0;
}

#core-navigation-drawer.v-navigation-drawer--rail .v-list-group__header__prepend-icon {
  order: 2;
  margin-right: 8px;
}
</style>
