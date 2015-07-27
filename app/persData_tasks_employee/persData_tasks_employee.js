'use strict';

angular.module('myApp.persData_tasks_employee', ['ngRoute', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/persData_tasks_employee', {
    templateUrl: 'persData_tasks_employee/persData_tasks_employee.html',
    controller: 'personalDataCtrl'
  });
}])

.controller('personalDataCtrl', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();

}])

    .config(function($datepickerProvider) {
        angular.extend($datepickerProvider.defaults, {
            dateFormat: 'dd/MM/yyyy',
            startWeek: 1
        });
    })

    .controller('DatepickerDemoCtrl', function($scope, $http) {

        $scope.selectedDate = new Date();
        $scope.selectedDateAsNumber = Date.UTC(1986, 1, 22);
        // $scope.fromDate = new Date();
        // $scope.untilDate = new Date();
        $scope.getType = function(key) {
            return Object.prototype.toString.call($scope[key]);
        };

        $scope.clearDates = function() {
            $scope.selectedDate = null;
        };
    })

    .controller('userFunctionCtrl', ['$scope', function($scope) {
        $scope.functions =[
            {'name': 'Function 1'},
            {'name': 'Function 2'}
        ]
    }])

;


