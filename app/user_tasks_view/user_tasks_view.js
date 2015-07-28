'use strict';

angular.module('myApp.user_tasks_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user_tasks_view', {
    templateUrl: 'user_tasks_view/user_tasks_view.html',
    controller: 'userTasksCtrl'
  });
}])

.controller('userTasksCtrl', ['$scope', function($scope) {
      $scope.master={};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };


}])



;