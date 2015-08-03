/**
 * Created by stefabal on 02.08.15.
 */

angular.module('myApp.services', ['ngResource'])
    .factory('AngularIssues', function($resource){
        return $resource('https://api.github.com/repos/angular/angular.js/issues', {})
    })

    .factosry('CustomerService', function($resource){
        return $resource('http://localhost:8080/RestTest/webresources/s.balsi.resttest.customer', {})
    })

;

