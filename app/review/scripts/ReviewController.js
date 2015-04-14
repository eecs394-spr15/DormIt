angular
    .module('review')
    .controller('ReviewController', function($scope, supersonic,parse) {
        // Controller functionality here
        $scope.buttonType = "button-clear";
        $scope.buttonStyle = "button-stable";

        $scope.start = function(){
            //$scope.buttonType= "button-royal";
            //$scope.buttonStyle= "";
        };

        $scope.Rate1 = "icon super-ios7-star-outline";
        $scope.Rate2 = "icon super-ios7-star-outline";
        $scope.Rate3 = "icon super-ios7-star-outline";
        $scope.Rate4 = "icon super-ios7-star-outline";
        $scope.Rate5 = "icon super-ios7-star-outline";
        $scope.select1 = function(){
            $scope.Rate1 = "icon super-star";
            $scope.Rate2 = "icon super-ios7-star-outline";
            $scope.Rate3 = "icon super-ios7-star-outline";
            $scope.Rate4 = "icon super-ios7-star-outline";
            $scope.Rate5 = "icon super-ios7-star-outline";
        };
        $scope.select2 = function(){
            $scope.Rate1 = "icon super-star";
            $scope.Rate2 = "icon super-star";
            $scope.Rate3 = "icon super-ios7-star-outline";
            $scope.Rate4 = "icon super-ios7-star-outline";
            $scope.Rate5 = "icon super-ios7-star-outline";
        };
        $scope.select3 = function(){
            $scope.Rate1 = "icon super-star";
            $scope.Rate2 = "icon super-star";
            $scope.Rate3 = "icon super-star";
            $scope.Rate4 = "icon super-ios7-star-outline";
            $scope.Rate5 = "icon super-ios7-star-outline";
        };
        $scope.select4 = function(){
            $scope.Rate1 = "icon super-star";
            $scope.Rate2 = "icon super-star";
            $scope.Rate3 = "icon super-star";
            $scope.Rate4 = "icon super-star";
            $scope.Rate5 = "icon super-ios7-star-outline";
        };
        $scope.select5 = function(){
            $scope.Rate1 = "icon super-star";
            $scope.Rate2 = "icon super-star";
            $scope.Rate3 = "icon super-star";
            $scope.Rate4 = "icon super-star";
            $scope.Rate5 = "icon super-star";
        };
    });