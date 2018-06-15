import template from './tabs.pug'

export const TabsComponent = {
  transclude: true,
  template: template(),
  controller: TabsController
}

function TabsController() {}
