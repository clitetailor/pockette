import * as angular from 'angular'
import 'angular-route'

import { GettingStartedComponent } from './getting-started/getting-started'
import { HomeComponent } from './home/home'
import { SidebarComponent } from './sidebar/sidebar'
import { MainLayoutComponent } from './main-layout/main-layout'
import { TabComponent } from './main-layout/tab/tab'
import { TabsComponent } from './main-layout/tabs/tabs'

angular
  .module('pockette', ['ngRoute'])
  .component('homeComponent', HomeComponent)
  .component('gettingStarted', GettingStartedComponent)
  .component('sidebar', SidebarComponent)
  .component('mainLayout', MainLayoutComponent)
  .component('tabs', TabsComponent)
  .component('tab', TabComponent)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: `
          <main-layout>
            <home-component></home-component>
          </main-layout>
        `
      })
      .when('/getting-started', {
        template: '<getting-started></getting-started>'
      })

    $locationProvider.html5Mode(true)
  })
