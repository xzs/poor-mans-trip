'use strict';

/**
 * @ngdoc function
 * @name budgetAdventureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetAdventureApp
 */
angular.module('budgetAdventureApp')
  .controller('MainCtrl', ['$scope', function($scope) {

    $scope.submit = function(search) {
        console.log(search);
        // compare the value against % allocated
    }

  }]);
