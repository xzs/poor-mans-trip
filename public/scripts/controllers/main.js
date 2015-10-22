'use strict';

/**
 * @ngdoc function
 * @name budgetAdventureApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the budgetAdventureApp
 */
angular.module('budgetAdventureApp')
  .controller('MainCtrl',
    [
        '$scope',
        'processingService',
        function (
            $scope,
            processingService
        )
    {

    var local = this;

    $scope.submit = function(search) {
        // Make API call to retrieve data
        processingService.getFlightResponse().then(function (response) {
            // parse the response
            $scope.flights = processingService.processFlightResponse(response);
        });
    };

  }]);
