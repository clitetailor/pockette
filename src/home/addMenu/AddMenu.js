import template from './AddMenu.pug'

export const AddMenuComponent = {
    template: template(),
    controller: AddMenuController
}

export function AddMenuController($scope, $route, store) {
    this.$onInit = function () {
        $scope.showAddMenu = false
        $scope.barNumber = 0
        $scope.addValue = undefined
        $scope.itemName = undefined
        $scope.expenditureType = undefined
        $scope.info = store.get('info')

        $scope.addSpent = function () {
            if($scope.itemName){
                let newExpenditure = {
                    name: $scope.itemName,
                    amount: $scope.addValue,
                    type: $scope.expenditureType
                }
                $scope.info.list.push(newExpenditure)
                store.set('info', $scope.info)
                $scope.itemName = undefined
                $scope.expenditureType = undefined
                $scope.addValue = undefined
            }
        }

        $scope.addBalance = function () {
            $scope.info.balance += $scope.addValue
            store.set('info', $scope.info)
            $scope.addValue = undefined
        }
        $scope.addItem = function () {
            if ($scope.itemName) {
                if (!$scope.info.items) {
                    $scope.info.items = []
                }
                $scope.info.items.push($scope.itemName)
                store.set('info', $scope.info)
                $scope.itemName = undefined
            }
        }
        $scope.isShow = function () {
            return $scope.showAddMenu
        }
        $scope.toggleMenu = function () {
            if ($scope.showAddMenu) {
                $scope.showAddMenu = false
            } else {
                $scope.showAddMenu = true
            }
        }
        $scope.showBar = function (number) {
            $scope.barNumber = number
            $scope.showAddMenu = false
        }
        $scope.isBarShow = function (number) {
            return $scope.barNumber === number
        }
    }
}