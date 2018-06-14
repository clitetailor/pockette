import template from './home.pug'

export const HomeComponent = {
  template: template(),
  controller: HomeController
}

export function HomeController($scope, $route) {
  this.$onInit = function () {
    $scope.title = 'Pockette'
    $scope.balance = 0
    $scope.addValue = 0
    $scope.list = []
    $scope.expenditureName = undefined
    $scope.expenditureAmount = 0
    $scope.list=[
      {
        name: 'laptop',
        amount: '$1327'
      }
    ]

    $scope.addBalance = function () {
      $scope.balance += $scope.addValue
      $scope.addValue = 0
    }
    $scope.addExpenditure = function () {
      if($scope.expenditureName){
        let newExpenditure = {
          name: $scope.expenditureName,
          amount: $scope.expenditureAmount
        }
        $scope.list.push(newExpenditure)
      }
    }
  }
}
