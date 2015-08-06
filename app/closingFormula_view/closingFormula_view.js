'use strict';

angular.module('myApp.closingFormula_view', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/closingFormula_view', {
    templateUrl: 'closingFormula_view/closingFormula_view.html',
    controller: 'closingFormulaViewCtrl'
  });
}])

.controller('closingFormulaViewCtrl', [function() {

}]);