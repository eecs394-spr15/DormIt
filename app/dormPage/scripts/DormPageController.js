angular
    .module('dormPage')
    .controller('DormPageController', function($scope, supersonic, parse, $sce, $window) {
        $scope.iconstatus="super-refresh";

        $scope.tab = 1;
        $scope.setTab = function (newValue) {
            $scope.tab = newValue;
        };
        $scope.isSet = function (tabName) {
            return $scope.tab === tabName;
        };
        var dormId = steroids.view.params.id;

        parse.getDorm(dormId).then(function (res) {
            $scope.dorm = res.attributes;
            $scope.dorm.id = res.id;
            $scope.dormAddrCode = $sce.trustAsResourceUrl(res.attributes.addrCode);
            $scope.ratelist = [{title: 'Socialness', rate: res.attributes.socialness},
                {title: 'Room size', rate: res.attributes.roomsize},
                {title: 'Food', rate: res.attributes.food},
                {title: 'Amenities', rate: res.attributes.amenities},
                {title: 'Overall', rate: res.attributes.star}];
        });

        $scope.refresh_review = function(){
            parse.getReviews(dormId).then(function(res){
                var commentList = [];
                res.forEach(function(value){
                    value.attributes.timestamp = value.createdAt.toString().slice(4, 16);
                    commentList.push(value.attributes);
                });
                $scope.reviewList= commentList;
            })};

        $scope.refresh_review();

        $scope.screenHeight = screen.height * 0.7;
        $scope.imageHeight = screen.height * 0.35;

        $scope.numPics = 0;
        $scope.displayIndex = 1;

        $scope.album = [];

        parse.getPictures(dormId).then(function(results) {
            for (var i = 0; i < results.length; i++) {
                var pics = results[i];

                for (var idx = 1; idx < 11; idx++) {
                    var iStr = "img" + idx;
                    if (pics.get(iStr) != undefined) {
                        $scope.album[(idx - 1)] = pics.get(iStr);
                        $scope.numPics += 1;
                    }
                }
            }
        });

        $scope.previousBtn = function() {
            if ($scope.displayIndex > 1) {
                $scope.displayIndex -= 1;
            }
            else {
                $scope.displayIndex = $scope.numPics;
            }
        };

        $scope.nextBtn = function() {
            if ($scope.displayIndex < $scope.numPics) {
                $scope.displayIndex +=1;
            }
            else {
                $scope.displayIndex = 1;
            }
        };
    })

    .directive("scroll", function ($window, $document,$timeout) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                var height = $document[0].body.offsetHeight - this.innerHeight;
                if(this.pageYOffset >= height){
                    scope.iconstatus = "super-refreshing";
                    $timeout(function(){
                        scope.iconstatus="super-refresh";
                        $window.scrollBy(0,-3);
                    },1250);
                    scope.refresh_review();
                    scope.$watch('reviewList.length', function(newValue,oldValue) {
                        if(newValue>oldValue){
                        $window.scrollTo(0,height+45)};
                    })
                };
            });
        };
    });



