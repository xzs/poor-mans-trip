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
            _.forEach(tripOptions, function(option, trip) {
                var dataObj = {}
                dataObj.id = option.id;
                dataObj.totalPrice = option.saleTotal;
                dataObj.totalDuration = option.slice[0].duration;
                dataObj.numStops = option.slice[0].segment.length-1;

                var flightSegments = option.slice[0].segment;
                for (var i=0; i<flightSegments.length; i++) {
                    flightSegments[i].duration
                }

                finalData.push(dataObj);
            })
            return finalData;
            // Process and parse the response -> this can eventually be moved to node
        }
    };
}])