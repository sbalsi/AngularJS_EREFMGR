/**
 * Created by stefabal on 02.08.15.
 */

var restServices = angular.module('myApp.services', ['ngResource']);

restServices.factory('CustomerFactory', ['$resource',
    function($resource){
        return $resource('http://localhost:8080/Rest_Test/webresources/s.balsi.rest_test.customer', {},{
            query: {
                method: 'GET',
                params:{},
                isArray: true}
        });
    }]);



//http://movieapp-sitepointdemos.rhcloud.com/api/movies




