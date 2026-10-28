import { createI18n } from 'vue-i18n'
import { ar as vuetifyAr, en as vuetifyEn } from 'vuetify/locale'
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ar: { ...ar, $vuetify: vuetifyAr },
    en: { ...en, $vuetify: vuetifyEn },
  },
})
