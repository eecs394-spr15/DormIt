angular
    .module('dormPage')
    .controller('DormPageController', function($scope, supersonic, parse) {
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

        parse.getReviews(dormId).then(function(res){
            var commentList = [];
            res.forEach(function(value){
                commentList.push(value.attributes);
            });
            $scope.comments = commentList;
        })
    });

