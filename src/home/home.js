import template from './home.pug'

export const HomeComponent = {
  template: template(),
  controller: HomeController
}

export function HomeController($scope, $location, $attrs) {
  this.$onInit = function () {
    const started = localStorage.getItem('getting-started')
    if (!started) {
      $location.path('/getting-started')
    }

    this.checkForBalance()
  }

  this.checkForBalance = function () {
    let balance = localStorage.getItem('balance')
    if (!balance) {
      $scope.balance = 0
    } else {
      $scope.balance = balance
    }
  }
}
