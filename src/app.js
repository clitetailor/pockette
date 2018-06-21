import * as angular from 'angular'
import NgMaterial from 'angular-material'
import NgRoute from 'angular-route'
import NgMessages from 'angular-messages'

import { GettingStartedComponent } from './getting-started/getting-started'
import { HomeComponent } from './home/home'
import { SidebarComponent } from './sidebar/sidebar'
import { MainLayoutComponent } from './main-layout/main-layout'
import { TabComponent } from './main-layout/tab/tab'

import { BalanceService } from './balance' 
import { StoreService } from './store';
import { TimelineService } from './timeline'
import { ItemsService } from './items'

angular
  .module('pockette', [NgRoute, NgMaterial, NgMessages])
  .factory('store', StoreService)
  .factory('balance', BalanceService)
  .factory('timeline', TimelineService)
  .factory('items', ItemsService)
  .component('homeComponent', HomeComponent)
  .component('gettingStarted', GettingStartedComponent)
  .component('sidebar', SidebarComponent)
  .component('mainLayout', MainLayoutComponent)
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
