angular
    .module('review')
    .controller('ReviewController', function($scope, supersonic) {
        // Controller functionality here
        $scope.buttonType = "button-clear";
        $scope.buttonStyle = "button-stable";

        $scope.start = function(){
            //$scope.buttonType= "button-royal";
            //$scope.buttonStyle= "";
        }
    });