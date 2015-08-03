'use strict';

angular.module('myApp.restTest_view', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/restTest_view', {
        templateUrl: 'restTest_view/restTest_view.html',
        controller: 'restTestViewCtrl'
      });
    }])

    //Tutorial http://coder1.com/articles/consuming-rest-services-angularjs
    .controller('restTestViewCtrl', ['$scope', 'AngularIssues', function($scope, AngularIssues, CustomerService) {
        $scope.data = {};

        AngularIssues.query(function(response) {
            $scope.data.issues = response;
        });

        AngularIssues.query(function(response){
            $scope.data.customers = response;
        })
    }])







;