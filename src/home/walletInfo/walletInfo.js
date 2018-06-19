import template from './walletInfo.pug'

export const WalletInfoComponent = {
    template: template(),
    controller: WalletInfoController,
    bindings: {
        info: '='
    }
}

export function WalletInfoController($scope, $route, store) {
    this.$onInit = function () {
        $scope.info = store.get('info')
    }
}