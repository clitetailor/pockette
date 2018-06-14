import * as angular from 'angular'
import 'angular-route'

import { GettingStartedComponent } from './getting-started/getting-started'
import { HomeComponent } from './home/home'

angular
  .module('pockette', ['ngRoute'])
  .component('homeComponent', HomeComponent)
  .component('gettingStartedComponent', GettingStartedComponent)
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
