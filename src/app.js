import * as angular from 'angular'
import 'angular-route'

import { GettingStartedComponent } from './getting-started/getting-started'
import { HomeComponent } from './home/home'
import {SideBarComponent} from './home/sideBar/sideBar'
import { TabsComponent } from './home/tabs/tabs'
import { WalletInfoComponent } from './home/walletInfo/walletInfo'
import { AddMenuComponent } from './home/addMenu/AddMenu'

import { StoreService } from './store'

angular
  .module('pockette', ['ngRoute'])
  .component('homeComponent', HomeComponent)
  .component('sideBarComponent',SideBarComponent)
  .component('tabsComponent',TabsComponent)
  .component('walletInfoComponent', WalletInfoComponent)
  .component('addMenuComponent', AddMenuComponent)
  .component('gettingStartedComponent', GettingStartedComponent)
  .factory('store', StoreService)
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<home-component></home-component>'
      })
      .when('/getting-started', {
        template: '<getting-started-component></getting-started-component>'
      })

    $locationProvider.html5Mode(true)
  })
