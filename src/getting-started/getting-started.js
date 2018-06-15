import template from './getting-started.pug'

export const GettingStartedComponent = {
  template: template(),
  controller: GettingStartedController
}

export function GettingStartedController($scope, $location) {
  this.$onInit = function() {
    $scope.items = [
      'Water and Electricity',
      'Drink',
      'Food',
      'Car',
      'Books',
      'Household and Furniture'
    ]

    $scope.itemInput = ''
  }

  $scope.addItem = function (item) {
    if (item) {
      $scope.items.push(item)
      return true
    }
    return false
  }

  $scope.add = function () {
    if ($scope.addItem($scope.itemInput)) {
      $scope.itemInput = ''
    }
  }

  $scope.handleInput = function ($event) {
    if ($event.keyCode === 13) {
      $scope.add()
    }
  }

  $scope.next = function () {
    localStorage.setItem('items', JSON.stringify($scope.items))
    localStorage.setItem('getting-started', 'true')
    $location.path('/')
  }
}
