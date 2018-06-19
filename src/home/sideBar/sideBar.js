import template from './sideBar.pug'

export const SideBarComponent = {
    template: template(),
    controller: SideBarController
}

export function SideBarController($scope, $route, store) {
    this.$onInit = function() {
        $scope.info = store.get('info')
    }
}