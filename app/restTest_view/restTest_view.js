'use strict';

angular.module('myApp.restTest_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/restTest_view', {
    templateUrl: 'restTest_view/restTest_view.html',
    controller: 'restTestViewCtrl'
  });
}])


.controller('restTestViewCtrl', ['$scope', 'customerFactory', function ($scope, customerFactory) {
    $scope.customer = 'customer from controller';
    DummyFactory.get({}, function (data) {
        $scope.name = data.name;
    })
}]);

