'use strict';

var app = angular.module('myApp.restTest_view', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/restTest_view', {
        templateUrl: 'restTest_view/restTest_view.html',
        controller: 'restTestViewCtrl'
      });
}]);

app.controller('restTestViewCtrl', ['$scope', 'UserService', function($scope, UserService) {
        $scope.users = UserService.query();

        $scope.getUserById = function(userId){
            $scope.currentUser = UserService.get({user: userId});

        };

        $scope.addUser = function(){
            UserService.save({name: 'Stefan', email: 'ste.balsiger@bluewin.ch'});
            $scope.users = UserService.query();
        };





        /*$scope.createNewCustomer = function($scope, CustomerFactory){
            CustomerFactory.create(

                    {
                        customerId: 1232112,
                        name: 'stefan',
                        email: 'stefan.balsiger@bluewin.ch'
                    }
            );
        };*/



        /*CustomerGetByIdFactory.get({id:1}, function(data){
            $scope.newCustomer = data;
        });*/

}]);





    //Tutorial http://coder1.com/articles/consuming-rest-services-angularjs
    /*.controller('restTestViewCtrl', ['$scope', 'AngularIssues', function($scope, AngularIssues) {
        $scope.data = {};

        AngularIssues.query(function(response) {
            $scope.data.issues = response;
        });


    }])*/









