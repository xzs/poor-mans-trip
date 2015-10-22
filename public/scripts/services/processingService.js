'use strict'

app.factory('processingService',
    [
        '$http',
        function(
            $http
        )
    {

    return {
        getFlightResponse: function () {
            return $http.get('test/sampleResponse.json').then(function (response) {
                return response.data.trips;
            });
        },
        processFlightResponse: function (response) {
            var tripOptions = response.tripOption;
            var finalData = [];
            // loop through the tripOptions to get the different flights the user can take
            _.forEach(tripOptions, function(option, trip){
                var saleTotal = option.saleTotal;
                finalData.push(option);
            })
            return finalData;
            // Process and parse the response -> this can eventually be moved to node
        }
    };
}])