'use strict';

angular.module('myApp.performance_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/performance_view', {
    templateUrl: 'performance_view/performance_view.html',
    controller: 'performanceCtrl'
  });
}])

    .controller('performanceCtrl', ['$scope', function($scope) {
      $scope.master={};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };


    }])

    .controller('skillsCtrl', function($scope) {
      $scope.skills = [
        {skill: 'Existing and acquired professional knowledge'},
        {skill: 'Existing and acquired professional skills'},
        {skill: 'Practical implementation'},
        {skill: 'Knowledge transfer'}
        ];


    })

;