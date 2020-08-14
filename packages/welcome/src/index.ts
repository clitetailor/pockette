/// <reference types="svelte/types/runtime"/>

import './styles/index.css'

import Router from './Router.svelte'
;(window as any).pages.welcome = {
  Router
}
