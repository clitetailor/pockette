import * as angular from 'angular'

angular.module('pockette', []).controller('Controller', [
  '$scope',
  $scope => {
    $scope.title = 'Pockette'
  }
])
