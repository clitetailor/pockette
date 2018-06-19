import template from './tabs.pug'

export const TabsComponent = {
    template: template(),
    controller: TabsController
}

export function TabsController($scope, $route, store) {
    this.$onInit = function() {
        $scope.setTab = function(tab) {
            store.set('tab',tab)
        }
    }
}