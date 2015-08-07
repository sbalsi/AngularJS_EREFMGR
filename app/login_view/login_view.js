'use strict';

angular.module('myApp.login_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login_view', {
    templateUrl: 'login_view/login_view.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', ['$scope', 'authFactory', function LoginCtrl($scope, authFactory) {
  $scope.login = function (user) {
    authFactory.login(user).success(function (data) {
      authFactory.setAuthData(data);
      // Redirect etc.
    }).error(function () {
      // Error handling
    });
  };
}]);