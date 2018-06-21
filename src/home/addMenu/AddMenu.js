import template from './AddMenu.pug'

export const AddMenuComponent = {
    template: template(),
    controller: AddMenuController
}

export function AddMenuController($scope, $route, store) {
    this.$onInit = function () {
        let controller = this

        $scope.showAddMenu = false
        $scope.barNumber = 0
        $scope.addValue = undefined
        $scope.itemName = undefined
        $scope.expenditureType = undefined
        $scope.info = store.get('info')

        this.calculateItemSpent()
        this.calculateMonthlySpent()
        $scope.addSpent = function () {
            if ($scope.itemName) {
                let newExpenditure = {
                    name: $scope.itemName,
                    amount: $scope.addValue,
                    type: $scope.expenditureType,
                    date: new Date()
                }
                $scope.info.list.push(newExpenditure)
                store.set('info', $scope.info)
                $scope.itemName = undefined
                $scope.expenditureType = undefined
                $scope.addValue = undefined
                controller.calculateItemSpent()
                controller.calculateMonthlySpent()
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
    this.calculateItemSpent = function () {
        let data = new Array($scope.info.items.length)
        let month = new Date().getMonth()
        let year = new Date().getFullYear()
        for (let i = 0; i < $scope.info.items.length; ++i) {
            let item = $scope.info.items[i]
            for (let spent of $scope.info.list) {
                if (spent.type === item && spent.date.getMonth() === month && spent.date.getFullYear() === year) {
                    if (!data[i]) {
                        data[i] = spent.amount
                    } else {
                        data[i] += spent.amount
                    }
                }
            }
        }
        store.set('chartData', data)
    }

    this.calculateMonthlySpent = function () {
        let data = new Array($scope.info.items.length)
        let year = new Date().getFullYear()
        for (let i = 0; i < $scope.info.items.length; ++i) {
            let item = $scope.info.items[i]
            data[i] = new Array(12)
            for (let spent of $scope.info.list) {
                let month = spent.date.getMonth()
                if(spent.date.getFullYear() === year && spent.type === item){
                    if (!data[i][month]) {
                        data[i][month] = spent.amount
                    } else {
                        data[i][month] += spent.amount
                    }
                }
            }
            for (let j = 0; j < 12; ++j) {
                if (!data[i][j]) {
                    data[i][j] = 0
                }
            }
        }
        store.set('monthlyData', data)
    }

}