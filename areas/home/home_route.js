// 引导页路由
angular.module('home.route', ['home.controller'])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('tab.home', {
        url: '/home',
        controller: 'homeCtrl',
        views:{
        	'tab-home': {
        		templateUrl: 'areas/home/home.html',
        		controller: 'homeCtrl'
        	}
        }
      })

  });
