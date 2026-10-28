import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

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
    locale: 'en',
    fallback: 'en',
    rtl: {
      ar: true,
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
