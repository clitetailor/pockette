import template from './home.pug'

export const HomeComponent = {
  template: template(),
  controller: HomeController
}

export function HomeController($scope, $route, store) {
  this.$onInit = function () {
    $scope.options = {
      showAllTooltips: true,
      tooltips: {
        enabled: true
      }
    };
    $scope.series = ['jan', 'fer', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    $scope.title = 'Pockette'
    $scope.tab = 'general'
    $scope.info = {
      balance: 0,
      name: 'asdf',
      list: [
        {
          name: 'laptop',
          amount: 1327,
          type: 'electronic',
          date: new Date('6-1-2018')
        },
        {
          name: 'laptop',
          amount: 1327,
          type: 'abc',
          date: new Date('5-20-2018')
        }
      ],
        items: [
          'electronic',
          'abc'
        ]
    }
    store.set('info',$scope.info)
    store.set('tab',$scope.tab)
    $scope.info = store.get('info')
    $scope.labels = $scope.info.items
    $scope.data = function() {
      return store.get('chartData')
    }
    $scope.montlyData = function() {
      return store.get('monthlyData')
    }
    $scope.tab = function() {
      return store.get('tab')
    }
  }
}
