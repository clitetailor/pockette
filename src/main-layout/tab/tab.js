import template from './tab.pug'

export const TabComponent = {
  transclude: true,
  template: template(),
  controller: TabController
}

export function TabController($attrs, $location) {
  this.$onInit = function () {
    if ($attrs.path === $location.path()) {
      this.active = true
    }
  }
}
