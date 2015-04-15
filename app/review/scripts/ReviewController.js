angular
    .module('review')
    .controller('ReviewController', function($scope, supersonic, parse) {

        $scope.review={
            dorm: steroids.view.params.id,
            bathrooms:1,
            rowdiness:1,
            roomsize:1,
            socialness:1,
            overall:1
        };
        $scope.maxRating = 5;

        $scope.submit = function() {
            parse.submitReview($scope.review).then(function(res) {
                supersonic.ui.layers.pop();
            });
        };
    });