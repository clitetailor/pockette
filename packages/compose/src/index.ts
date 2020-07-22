/// <reference types="svelte/types/runtime"/>

import App from './App.svelte'

const app = new App({
  target: document.body
})
;(<any>window).app = app

export default app
