import vuetify from 'eslint-config-vuetify'
import vue from 'eslint-plugin-vue'

export default vuetify(
  { ts: true },
  {
    plugins: { vue },
    rules: {
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 1 },
        multiline: { max: 1 },
      }],
    },
  },
)
