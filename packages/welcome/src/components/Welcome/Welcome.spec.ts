import { render } from '@testing-library/svelte'

import Home from './Welcome.svelte'
import { setupI18n } from '../../i18n'

describe('Home', () => {
  let container: HTMLElement

  beforeEach(() => {
    setupI18n()
    container = render(Home).container
  })

  test('the heading is "Pockette"', () => {
    expect(container.querySelector('h1')?.textContent).toBe(
      'Pockette'
    )
  })
})
