angular
    .module('dormPage')
    .controller('DormPageController', function($scope, supersonic, parse) {
        // Controller functionality here
        var dormId = steroids.view.params.id;

        parse.getDorm(dormId).then(function(res){
            $scope.dorm = res.attributes;
            $scope.dorm.id = res.id;
        });

    });