import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { useI18n } from 'vue-i18n'
import i18n from './i18n'

// Brand colours
const brand = {
  primary: '#E91E63',
  secondary: '#9C27B0',
  info: '#00CAE3',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#FF5252',
}

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  locale: {
    adapter: createVueI18nAdapter({ i18n, useI18n }),
    locale: 'en',
    fallback: 'en',
    rtl: {
      ar: true,
      dv: true,
      fa: true,
      he: true,
      ku: true,
      ps: true,
      sd: true,
      ug: true,
      ur: true,
      yi: true,
    },
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      dark: {
        colors: brand,
      },
      light: {
        colors: brand,
      },
    },
  },
  defaults: {
    VBtn: {
      class: 'text-uppercase',
    },
  },
})
