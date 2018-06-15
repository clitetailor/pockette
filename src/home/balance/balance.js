import template from './balance.pug'

export const BalanceComponent = {
  transclude: true,
  template: template(),
  controller: BalanceController
}

export function BalanceController() {}
