'use strict';

angular.module('myApp.restTest_view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/restTest_view', {
        templateUrl: 'restTest_view/restTest_view.html',
        controller: 'restTestViewCtrl'
      });
    }])

.controller('restTestViewCtrl', ['$scope', 'CustomerFactory', function($scope, CustomerFactory) {
    $scope.customers = CustomerFactory.query();
}]);


    //Tutorial http://coder1.com/articles/consuming-rest-services-angularjs
    /*.controller('restTestViewCtrl', ['$scope', 'AngularIssues', function($scope, AngularIssues) {
        $scope.data = {};

        AngularIssues.query(function(response) {
            $scope.data.issues = response;
        });


    }])*/









