'use strict';

angular.module('myApp.docTeam_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/docTeam_view', {
    templateUrl: 'docTeam_view/docTeam_view.html',
    controller: 'docTeamViewCtrl'
  });
}])

.controller('docTeamViewCtrl', [function() {

}]);