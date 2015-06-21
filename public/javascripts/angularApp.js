var app = angular.module('donDomain',['ui.router'])
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/partials/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('/');
}]);
