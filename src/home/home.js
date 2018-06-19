import template from './home.pug'

export const HomeComponent = {
  template: template(),
  controller: HomeController
}

export function HomeController($scope, $route, store) {
  this.$onInit = function () {
    $scope.title = 'Pockette'
    $scope.tab = 'general'
    $scope.info = {
      balance: 0,
      name: 'asdf',
      list: [
        {
          name: 'laptop',
          amount: 1327,
          type: 'electronic'
        }
      ],
      items: [
        'asdfdsaf'
      ]
    }
    store.set('info',$scope.info)
    store.set('tab',$scope.tab)
    $scope.info = store.get('info')
    $scope.tab = function() {
      return store.get('tab')
    }
  }
}
