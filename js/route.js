// 总路由模块

angular.module('route', [
'guidePage.route', 
'home.route', 
'tabs.route',
'category.route',
'goodsList.route'
])

.config(function($stateProvider, $urlRouterProvider) {
  // 没有匹配到合适的路由地址时，跳转的地址
  $urlRouterProvider.otherwise('/guidePage');

});
