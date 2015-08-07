/**
 * Created by stefabal on 07.08.15.
 */

'use strict';

var app = angular.module('myApp.customDirectives', []);

app.directive('multiselection', function () {
    return {
        restrict: 'E',
        scope: {
            model: '=',
            options: '='
        },
        template:
        "<div class='btn-group' data-ng-class='{open: open}'>" +
        "<button class='btn btn-default' data-ng-click='openDropdown()'>Select Functions</button>" +
        "<button class='btn btn-default dropdown-toggle' data-ng-click='openDropdown()'><span class='caret'></span></button>" +
        "<ul class='dropdown-menu' aria-labelledby='dropdownMenu'>" +
        "<li><a data-ng-click='selectAll()'><span class='glyphicon glyphicon-ok green' aria-hidden='true'></span> Check All</a></li>" +
        "<li><a data-ng-click='deselectAll();'><span class='glyphicon glyphicon-remove red' aria-hidden='true'></span> Uncheck All</a></li>" +
        "<li class='divider'></li>" +
        "<li><a data-ng-click='inputFunctionEnabled=!inputFunctionEnabled;'><span class='glyphicon glyphicon-pencil' aria-hidden='true'></span> Add Function</a></li>"+
        "<li><input type='text' ng-show='inputFunctionEnabled'class='form-control' ng-model='functionInput'placeholder='Enter new function'></li>"+
        "<li>Test: {{functionInput}} </li>"+
        "<li><a data-ng-click='saveNewFunction(functionInput);' ng-show='inputFunctionEnabled'><span class='glyphicon glyphicon-floppy-disk' aria-hidden='true'></span> Save new function</a></li>" +
        "<li class='divider'></li>" +
        "<li data-ng-repeat='option in options'><a data-ng-click='toggleSelectItem(option)'><span data-ng-class='getClassName(option)' aria-hidden='true'></span> {{option.name}}</a></li>" +
        "</ul>" +
        "</div>",

        controller: function ($scope) {

            $scope.openDropdown = function () {

                $scope.open = !$scope.open;

            };

            $scope.selectAll = function () {

                $scope.model = [];

                angular.forEach($scope.options, function (item, index) {

                    $scope.model.push(item.id);

                });

            };

            $scope.deselectAll = function () {

                $scope.model = [];

            };

            $scope.toggleSelectItem = function (option) {

                var intIndex = -1;

                angular.forEach($scope.model, function (item, index) {

                    if (item == option.id) {

                        intIndex = index;

                    }

                });

                if (intIndex >= 0) {

                    $scope.model.splice(intIndex, 1);

                }
                else {

                    $scope.model.push(option.id);

                }

            };

            $scope.getClassName = function (option) {

                var varClassName = 'glyphicon glyphicon-remove red';

                angular.forEach($scope.model, function (item, index) {

                    if (item == option.id) {

                        varClassName = 'glyphicon glyphicon-ok green';

                    }

                });

                return (varClassName);

            };

        }
    }

});


