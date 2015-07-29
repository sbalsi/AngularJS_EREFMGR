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

        $scope.user={};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };


    }])

    .controller('skillsCtrl', function($scope) {
      $scope.skills = [
          {id: 1, label: 'Existing and acquired professional knowledge', chapter: "dev_exp"},
          {id: 2, label: 'Existing and acquired professional skills', chapter: "dev_exp"},
          {id: 3, label: 'Practical implementation', chapter: "dev_exp"},
          {id: 4, label: 'Knowledge transfer', chapter: "dev_exp"},
          {id: 5, label: 'Diligent', chapter: "diligence_reliability"},
          {id: 6, label: 'Exact', chapter: "diligence_reliability"}
        ];


    })

;