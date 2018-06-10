import * as angular from 'angular'
import template from './app.pug'

angular.module('pockette', []).component('appComp', {
  template: template(),
  controller: AppComponent
})

function AppComponent($scope) {
  this.$onInit = function() {
    $scope.title = 'Pockette'
  }
}
