import { createPinia, setActivePinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import barImageSrc from '@/assets/sidebar-1.jpg'

import { useUiStore } from '../ui'

describe('ui store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts with the dark drawer gradient', () => {
    expect(useUiStore().barColor).toBe('rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)')
  })

  it('starts on the first sidebar image', () => {
    expect(useUiStore().barImage).toBe(barImageSrc)
  })

  it('starts closed with hover expansion off', () => {
    const ui = useUiStore()

    expect(ui.drawer).toBeNull()
    expect(ui.expandOnHover).toBe(false)
  })

  it('replaces the bar colour', () => {
    const ui = useUiStore()

    ui.setBarColor('rgba(255, 255, 255, 1), rgba(255, 255, 255, .7)')

    expect(ui.barColor).toBe('rgba(255, 255, 255, 1), rgba(255, 255, 255, .7)')
  })

  it('replaces the bar image', () => {
    const ui = useUiStore()

    ui.setBarImage('https://example.com/other.jpg')

    expect(ui.barImage).toBe('https://example.com/other.jpg')
  })

  it('opens and closes the drawer, including the null state', () => {
    const ui = useUiStore()

    ui.setDrawer(true)
    expect(ui.drawer).toBe(true)

    ui.setDrawer(false)
    expect(ui.drawer).toBe(false)

    ui.setDrawer(null)
    expect(ui.drawer).toBeNull()
  })

  it('toggles hover expansion directly', () => {
    const ui = useUiStore()

    ui.expandOnHover = true

    expect(ui.expandOnHover).toBe(true)
  })
})
