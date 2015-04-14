angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic, parse) {

      parse.getList().then(function(res){
        var dormArray = [];
        res.forEach(function(val){
          dormArray.push(val.attributes);
        });
        $scope.dormList = dormArray;
      });


      function compare(el1, el2, index) {
        return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
      }

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

      $scope.queryStar = 2.5;
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
