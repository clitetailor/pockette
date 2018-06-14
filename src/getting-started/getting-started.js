import template from './getting-started.pug'

export const GettingStartedComponent = {
  template: template(),
  controller: GettingStartedController
}

export function GettingStartedController($scope) {
  this.$onInit = function () {
    $scope.title = 'Hello, World!'
  }
}
