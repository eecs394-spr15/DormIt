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
        $scope.current = 1;

        $scope.submit = function() {
            parse.submitReview($scope.review).then(function(res) {
                supersonic.ui.layers.pop();
            });
        };

        $scope.getSelectedRating = function (rating) {
            console.log(rating);
        };




        $scope.Rate11 = "icon super-ios7-star-outline";
        $scope.Rate12 = "icon super-ios7-star-outline";
        $scope.Rate13 = "icon super-ios7-star-outline";
        $scope.Rate14 = "icon super-ios7-star-outline";
        $scope.Rate15 = "icon super-ios7-star-outline";

        $scope.number1 = 0;
        $scope.clickStar = function(starNumber){
            $scope.number1 = starNumber;
        };

        $scope.select11 = function(){
            $scope.Rate11 = "icon super-star";
            $scope.Rate12 = "icon super-ios7-star-outline";
            $scope.Rate13 = "icon super-ios7-star-outline";
            $scope.Rate14 = "icon super-ios7-star-outline";
            $scope.Rate15 = "icon super-ios7-star-outline";
        };
        $scope.select12 = function(){
            $scope.Rate11 = "icon super-star";
            $scope.Rate12 = "icon super-star";
            $scope.Rate13 = "icon super-ios7-star-outline";
            $scope.Rate14 = "icon super-ios7-star-outline";
            $scope.Rate15 = "icon super-ios7-star-outline";
        };
        $scope.select13 = function(){
            $scope.Rate11 = "icon super-star";
            $scope.Rate12 = "icon super-star";
            $scope.Rate13 = "icon super-star";
            $scope.Rate14 = "icon super-ios7-star-outline";
            $scope.Rate15 = "icon super-ios7-star-outline";
        };
        $scope.select14 = function(){
            $scope.Rate11 = "icon super-star";
            $scope.Rate12 = "icon super-star";
            $scope.Rate13 = "icon super-star";
            $scope.Rate14 = "icon super-star";
            $scope.Rate15 = "icon super-ios7-star-outline";
        };
        $scope.select15 = function(){
            $scope.Rate11 = "icon super-star";
            $scope.Rate12 = "icon super-star";
            $scope.Rate13 = "icon super-star";
            $scope.Rate14 = "icon super-star";
            $scope.Rate15 = "icon super-star";
        };

        $scope.Rate21 = "icon super-ios7-star-outline";
        $scope.Rate22 = "icon super-ios7-star-outline";
        $scope.Rate23 = "icon super-ios7-star-outline";
        $scope.Rate24 = "icon super-ios7-star-outline";
        $scope.Rate25 = "icon super-ios7-star-outline";
        $scope.select1 = function(){
            $scope.Rate21 = "icon super-star";
            $scope.Rate22 = "icon super-ios7-star-outline";
            $scope.Rate23 = "icon super-ios7-star-outline";
            $scope.Rate24 = "icon super-ios7-star-outline";
            $scope.Rate25 = "icon super-ios7-star-outline";
        };
        $scope.select22 = function(){
            $scope.Rate21 = "icon super-star";
            $scope.Rate22 = "icon super-star";
            $scope.Rate23 = "icon super-ios7-star-outline";
            $scope.Rate24 = "icon super-ios7-star-outline";
            $scope.Rate25 = "icon super-ios7-star-outline";
        };
        $scope.select23 = function(){
            $scope.Rate21 = "icon super-star";
            $scope.Rate22 = "icon super-star";
            $scope.Rate23 = "icon super-star";
            $scope.Rate24 = "icon super-ios7-star-outline";
            $scope.Rate25 = "icon super-ios7-star-outline";
        };
        $scope.select24 = function(){
            $scope.Rate21 = "icon super-star";
            $scope.Rate22 = "icon super-star";
            $scope.Rate23 = "icon super-star";
            $scope.Rate24 = "icon super-star";
            $scope.Rate25 = "icon super-ios7-star-outline";
        };
        $scope.select25 = function(){
            $scope.Rate21 = "icon super-star";
            $scope.Rate22 = "icon super-star";
            $scope.Rate23 = "icon super-star";
            $scope.Rate24 = "icon super-star";
            $scope.Rate25 = "icon super-star";
        };

        $scope.Rate31 = "icon super-ios7-star-outline";
        $scope.Rate32 = "icon super-ios7-star-outline";
        $scope.Rate33 = "icon super-ios7-star-outline";
        $scope.Rate34 = "icon super-ios7-star-outline";
        $scope.Rate35 = "icon super-ios7-star-outline";
        $scope.select31 = function(){
            $scope.Rate31 = "icon super-star";
            $scope.Rate32 = "icon super-ios7-star-outline";
            $scope.Rate33 = "icon super-ios7-star-outline";
            $scope.Rate34 = "icon super-ios7-star-outline";
            $scope.Rate35 = "icon super-ios7-star-outline";
        };
        $scope.select32 = function(){
            $scope.Rate31 = "icon super-star";
            $scope.Rate32 = "icon super-star";
            $scope.Rate33 = "icon super-ios7-star-outline";
            $scope.Rate34 = "icon super-ios7-star-outline";
            $scope.Rate35 = "icon super-ios7-star-outline";
        };
        $scope.select33 = function(){
            $scope.Rate31 = "icon super-star";
            $scope.Rate32 = "icon super-star";
            $scope.Rate33 = "icon super-star";
            $scope.Rate34 = "icon super-ios7-star-outline";
            $scope.Rate35 = "icon super-ios7-star-outline";
        };
        $scope.select34 = function(){
            $scope.Rate31 = "icon super-star";
            $scope.Rate32 = "icon super-star";
            $scope.Rate33 = "icon super-star";
            $scope.Rate34 = "icon super-star";
            $scope.Rate35 = "icon super-ios7-star-outline";
        };
        $scope.select35 = function(){
            $scope.Rate31 = "icon super-star";
            $scope.Rate32 = "icon super-star";
            $scope.Rate33 = "icon super-star";
            $scope.Rate34 = "icon super-star";
            $scope.Rate35 = "icon super-star";
        };

        $scope.Rate41 = "icon super-ios7-star-outline";
        $scope.Rate42 = "icon super-ios7-star-outline";
        $scope.Rate43 = "icon super-ios7-star-outline";
        $scope.Rate44 = "icon super-ios7-star-outline";
        $scope.Rate45 = "icon super-ios7-star-outline";
        $scope.select41 = function(){
            $scope.Rate41 = "icon super-star";
            $scope.Rate42 = "icon super-ios7-star-outline";
            $scope.Rate43 = "icon super-ios7-star-outline";
            $scope.Rate44 = "icon super-ios7-star-outline";
            $scope.Rate45 = "icon super-ios7-star-outline";
        };
        $scope.select42 = function(){
            $scope.Rate41 = "icon super-star";
            $scope.Rate42 = "icon super-star";
            $scope.Rate43 = "icon super-ios7-star-outline";
            $scope.Rate44 = "icon super-ios7-star-outline";
            $scope.Rate45 = "icon super-ios7-star-outline";
        };
        $scope.select43 = function(){
            $scope.Rate41 = "icon super-star";
            $scope.Rate42 = "icon super-star";
            $scope.Rate43 = "icon super-star";
            $scope.Rate44 = "icon super-ios7-star-outline";
            $scope.Rate45 = "icon super-ios7-star-outline";
        };
        $scope.select44 = function(){
            $scope.Rate41 = "icon super-star";
            $scope.Rate42 = "icon super-star";
            $scope.Rate43 = "icon super-star";
            $scope.Rate44 = "icon super-star";
            $scope.Rate45 = "icon super-ios7-star-outline";
        };
        $scope.select45 = function(){
            $scope.Rate41 = "icon super-star";
            $scope.Rate42 = "icon super-star";
            $scope.Rate43 = "icon super-star";
            $scope.Rate44 = "icon super-star";
            $scope.Rate45 = "icon super-star";
        };
    });