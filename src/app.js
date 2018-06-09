import * as angular from 'angular'
import template from './app.pug'
import './app.styl'

angular.module('pockette', []).component('appComp', {
  template: template(),
  controller: function AppComponent($scope) {
    this.$onInit = function() {
      $scope.title = 'Pockette'
    }
  }
})
