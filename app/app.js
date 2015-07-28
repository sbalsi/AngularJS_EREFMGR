'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'mgcrea.ngStrap',
  'myApp.persData_tasks_employee',
  'myApp.inbox_view',
  'myApp.view3',
  'myApp.version',
  'ui.multiselect'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/persData_tasks_employee'});
}]);
