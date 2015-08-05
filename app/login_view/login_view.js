'use strict';

angular.module('myApp.login_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login_view', {
    templateUrl: 'login_view/login_view.html',
    controller: 'LoginViewCtrl'
  });
}])

.controller('LoginViewCtrl', [function() {

}]);