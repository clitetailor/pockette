import { render } from '@testing-library/svelte'

import Home from './Home.svelte'
import { setupI18n } from '../../i18n'

describe('Home', () => {
  let container: HTMLElement

  beforeEach(() => {
    setupI18n()
    container = render(Home).container
  })

  test('the heading is "Hello, World!"', () => {
    expect(container.querySelector('h1')?.textContent).toBe(
      'Hello, World!'
    )
  })
})
