import template from './home.pug'

export const HomeComponent = {
  template: template(),
  controller: HomeController
}

export function HomeController($scope, $route) {
  this.$onInit = function () {
    $scope.title = 'Pockette'
  }
}
