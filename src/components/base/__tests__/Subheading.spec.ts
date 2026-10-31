import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import Subheading from '../Subheading.vue'

describe('Subheading', () => {
  it('renders the subheading text', () => {
    const wrapper = mount(Subheading, { props: { subheading: 'Alerts' } })

    expect(wrapper.find('h5').text()).toBe('Alerts')
  })

  it('renders the optional text alongside the subheading', () => {
    const wrapper = mount(Subheading, { props: { subheading: 'Alerts', text: 'Optional' } })

    expect(wrapper.find('span').text()).toBe('Optional')
  })

  it('renders slot content', () => {
    const wrapper = mount(Subheading, {
      props: { subheading: 'Alerts' },
      slots: { default: '<p>Body</p>' },
    })

    expect(wrapper.find('.pt-2').html()).toContain('Body')
  })
})
