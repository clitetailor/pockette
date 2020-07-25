/// <reference types="svelte/types/runtime"/>

import Router from './Router.svelte'
import Welcome from './components/Welcome/Welcome.svelte'
;(window as any).shared.Welcome = Welcome
;(window as any).pages.welcome = {
  Router
}
