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
          {skill_id: 1, label: 'Existing and acquired professional knowledge', chapter: "dev_exp"},
          {skill_id: 2, label: 'Existing and acquired professional skills', chapter: "dev_exp"},
          {skill_id: 3, label: 'Practical implementation', chapter: "dev_exp"},
          {skill_id: 4, label: 'Knowledge transfer', chapter: "dev_exp"},
          {skill_id: 5, label: 'Diligent', chapter: "diligence_reliability"},
          {skill_id: 6, label: 'Exact', chapter: "diligence_reliability"}
        ];


    })

    .controller('evaluationCtrl', function($scope){
        $scope.ratingCheckboxModel = {
            value: false
        };

        $scope.evaluation = [
            {evaluation_id: 1, skill_id: 5, rating: 3}
        ];
})

;