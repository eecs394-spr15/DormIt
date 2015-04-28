angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic, parse) {

        $scope.iconstatus = 0;
      $scope.sort = 0;
      $scope.isSet = function(tabName){
        return $scope.sort === tabName;
      };
      $scope.reverse = false;

      $scope.refresh_dorm = function(){
        parse.getList().then(function(res){
          var dormArray = [];
          res.forEach(function(val){
            val.attributes.id = val.id;
            dormArray.push(val.attributes);
          });
          $scope.dormList = dormArray;
        });
      };
      $scope.refresh_dorm();

      function compare(el1, el2, index) {
        return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
      }

      $scope.priceOrder = -1;
      $scope.ratingOrder = -1

      $scope.sortByPrice = function() {
        $scope.sort = 1;
        $scope.reverse = !$scope.reverse;
        if ($scope.reverse == true) {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var priceA = a.price, priceB = b.price;
            if (priceA < priceB)
              return -1;
            if (priceA > priceB)
              return 1;
            return 0;
          });
          $scope.priceOrder = 0;
        }
        else {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var priceA = a.price, priceB = b.price;
            if (priceA < priceB)
              return 1;
            if (priceA > priceB)
              return -1;
            return 0;
          });
          $scope.priceOrder = 1;
        }
      };

      $scope.sortByRating = function() {
        $scope.sort = 2;
        $scope.reverse = !$scope.reverse;
        if ($scope.reverse) {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var ratingA = a.star, ratingB = b.star;
            if (ratingA < ratingB)
              return -1;
            if (ratingA > ratingB)
              return 1;
            return 0;
          });
          $scope.ratingOrder = 0;
        }
        else {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var ratingA = a.star, ratingB = b.star;
            if (ratingA < ratingB)
              return 1;
            if (ratingA > ratingB)
              return -1;
            return 0;
          });
          $scope.ratingOrder = 1;
        }
      };

      $scope.clear = function() {
        $scope.ratingOrder = -1;
        $scope.priceOrder = -1;
        $scope.sort = 0;
        $scope.queryLoc = {};
        $scope.querySize = {};
        $scope.queryType = {};
        $scope.query.name='';
        $scope.dormList = $scope.dormList.sort(function (a, b) {
          var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB)
            return -1;
          if (nameA > nameB)
            return 1;
          return 0;
        });
      };

      $scope.queryLoc = {};
      $scope.filterByLoc = function(dorm){
        return $scope.queryLoc[dorm.location] || noFilter($scope.queryLoc);
      };

      $scope.querySize = {};
      $scope.filterBySize = function(dorm){
        return $scope.querySize[dorm.size] || noFilter($scope.querySize);
      };

      $scope.queryType = {};
      $scope.filterByType = function(dorm){
        return $scope.queryType[dorm.type] || noFilter($scope.queryType);
      };

      $scope.queryStar = 0;
      $scope.filterByStar = function(dorm){
        return dorm.star >= $scope.queryStar;
      };

      function noFilter(filterObj){
        for(var k in filterObj){
          if(filterObj[k]){
            return false;
          }
        }
        return true;
      }

      $scope.chevron = "super-chevron-down";
      $scope.switchButton = function(){
        if ($scope.chevron == "super-chevron-down")
          $scope.chevron = "super-chevron-up";
        else
          $scope.chevron = "super-chevron-down";
      };
    })
    .directive("scroll", function ($window, $document,$timeout) {
        return function(scope, element, attrs) {
            angular.element($window).bind("scroll", function() {
                var height = $document[0].body.offsetHeight - this.innerHeight;
                if(this.pageYOffset <= 0){
                    scope.iconstatus = 1;
                    $timeout(function(){
                        scope.iconstatus=0;
                        $window.scrollBy(0,1);
                    },1250);
                    scope.refresh_dorm();
                };
            });
        };
    });
