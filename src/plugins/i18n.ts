import { createI18n } from 'vue-i18n'
import ar from '@/locales/ar.json'
import en from '@/locales/en.json'

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    ar,
    en,
  },
})
