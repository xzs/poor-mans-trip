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
                return response.data;
            });
        },
        processFlightResponse: function (response) {
            // Process and parse the response -> this can eventually be moved to node
        }
    };
}])