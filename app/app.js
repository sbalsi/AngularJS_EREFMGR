'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mgcrea.ngStrap',
  'myApp.persData_tasks_employee',
  'myApp.view2',
  'myApp.view3',
  'myApp.version'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/persData_tasks_employee'});
}]);
