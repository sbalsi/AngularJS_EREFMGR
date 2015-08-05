/**
 * Created by stefabal on 02.08.15.
 */

/* Services */

/*
 http://docs.angularjs.org/api/ngResource.$resource

 Default ngResources are defined as

 'get':    {method:'GET'},
 'save':   {method:'POST'},
 'query':  {method:'GET', isArray:true},
 'remove': {method:'DELETE'},
 'delete': {method:'DELETE'}

 */


var restServices = angular.module('myApp.services', ['ngResource']);

restServices.factory('UserService', function($resource){
        var data = $resource('http://localhost:3000/users/:user', {user: '@user'},{
            query: {
                method: 'GET',
                params:{},
                isArray: true
            },
            save: {
                method: 'POST',
                params:{},
                isArray: false
            }
        });

    return data;
    });

restServices.factory('LoginService', function($resource){
   //todo
});

/*restServices.factory('CustomerGetByIdFactory', function($resource){
    return $resource('http://localhost:8080/RestTest/webresources/customers/:id',{},{
        get:{
            method: 'GET',
            params:{},
            isArray: false
        }
    })
});*/



//http://movieapp-sitepointdemos.rhcloud.com/api/movies




