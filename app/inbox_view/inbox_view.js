'use strict';

angular.module('myApp.inbox_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox_view', {
    templateUrl: 'inbox_view/inbox_view.html',
    controller: 'inbox_viewCtrl'
  });
}])

.controller('inboxViewCtrl', [function() {

}]);