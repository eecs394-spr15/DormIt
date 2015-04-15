angular
    .module('dormPage')
    .controller('DormPageController', function($scope, supersonic, parse) {
        // Controller functionality here

        $scope.tab=1;
        $scope.setTab = function(newValue){
            $scope.tab = newValue;
        };
        $scope.isSet = function(tabName){
            return $scope.tab === tabName;
        };
        var dormId = steroids.view.params.id;

        parse.getDorm(dormId).then(function(res){
            $scope.dorm = res.attributes;
            $scope.dorm.id = res.id;
        });

    });

