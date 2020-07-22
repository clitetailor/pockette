import {
  init,
  getLocaleFromNavigator,
  addMessages,
} from 'svelte-i18n'

import en from './en'

export function setupI18n() {
  addMessages('en', en)

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  })
}
