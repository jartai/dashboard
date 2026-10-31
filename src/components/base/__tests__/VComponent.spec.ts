import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import VComponent from '../VComponent.vue'

describe('VComponent', () => {
  it('prefixes the heading with the component name', () => {
    const wrapper = mount(VComponent, { props: { heading: 'Alerts' } })

    expect(wrapper.find('h1').text()).toBe('Vuetify Alerts')
  })

  it('builds the documentation link from the link prop', () => {
    const wrapper = mount(VComponent, { props: { link: 'components/alerts' } })

    expect(wrapper.find('a').attributes('href')).toBe('https://vuetifyjs.com/components/alerts')
  })

  it('opens the documentation in a new tab', () => {
    const wrapper = mount(VComponent)

    expect(wrapper.find('a').attributes()).toMatchObject({
      rel: 'noopener',
      target: '_blank',
    })
  })
})
