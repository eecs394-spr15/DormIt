angular
    .module('dormPage')
    .controller('DormPageController', function($scope, supersonic, parse, $sce) {

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
            $scope.dormAddrCode = $sce.trustAsResourceUrl(res.attributes.addrCode);
            $scope.ratelist = [{title:'Socialness', rate:res.attributes.socialness},
                {title:'Room size',rate:res.attributes.roomsize},
                {title:'Food',rate:res.attributes.Food},
                {title:'Amenities',rate:res.attributes.Amenities},
                {title:'Overall',rate:res.attributes.star}];
        });

        parse.getReviews(dormId).then(function(res){
            var commentList = [];
            res.forEach(function(value){
                commentList.push(value.attributes);
            });
            $scope.reviewList= commentList;
        })

    });



