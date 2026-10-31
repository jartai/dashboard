import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import MaterialAlert from '../MaterialAlert.vue'

describe('MaterialAlert', () => {
  it('renders slot content', () => {
    const wrapper = mount(MaterialAlert, { slots: { default: 'Heads up' } })

    expect(wrapper.text()).toContain('Heads up')
  })

  it('is not closable by default', () => {
    const wrapper = mount(MaterialAlert)

    expect(wrapper.findComponent({ name: 'VAlert' }).props('closable')).toBe(false)
  })

  it('becomes closable when dismissible', () => {
    const wrapper = mount(MaterialAlert, { props: { dismissible: true } })

    expect(wrapper.findComponent({ name: 'VAlert' }).props('closable')).toBe(true)
  })

  it('maps every type to its icon', () => {
    const expected = {
      success: 'mdi-check-circle',
      info: 'mdi-information',
      warning: 'mdi-alert',
      error: 'mdi-alert-circle',
    } as const

    for (const [type, icon] of Object.entries(expected)) {
      const wrapper = mount(MaterialAlert, { props: { type: type as keyof typeof expected } })

      expect(wrapper.find('.v-alert__prepend .v-icon').classes()).toContain(icon)
    }
  })

  it('passes attributes through to the alert', () => {
    const wrapper = mount(MaterialAlert, { attrs: { color: 'info' } })

    expect(wrapper.findComponent({ name: 'VAlert' }).props('color')).toBe('info')
  })

  it('forwards the close event to the listener', async () => {
    const onClose = vi.fn<() => void>()
    const wrapper = mount(MaterialAlert, {
      props: { dismissible: true },
      attrs: { 'onClick:close': onClose },
    })

    await wrapper.find('button').trigger('click')

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
