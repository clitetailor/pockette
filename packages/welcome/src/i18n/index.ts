import {
  init,
  getLocaleFromNavigator,
  addMessages,
} from 'svelte-i18n'


const translations = ['getting-started', 'welcome']

const en = translations
  .map(mod => ({[mod]: require(`./pages/${mod}.en.json`)}))
  .reduce((accum, data) => ({...accum,...data}))

export function setupI18n() {
  addMessages('en', en)

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  })
}
