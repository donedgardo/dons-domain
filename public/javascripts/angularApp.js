var app = angular.module('donDomain',['ui.router'])
app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('/', {
      url: '/',
      templateUrl: '/partials/chat.html',
      controller: 'ChatCtrl as chatCtrl'
    });

  $urlRouterProvider.otherwise('/');
}]);
