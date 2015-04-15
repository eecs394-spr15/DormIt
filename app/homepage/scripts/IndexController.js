angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic, parse) {

      $scope.sort = 0;
      $scope.isSet = function(tabName){
        return $scope.sort === tabName;
      };
      $scope.reverse = false;

      parse.getList().then(function(res){
        var dormArray = [];
        res.forEach(function(val){
          val.attributes.id = val.id;
          dormArray.push(val.attributes);
        });
        $scope.dormList = dormArray;
      });


      function compare(el1, el2, index) {
        return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
      }

      $scope.sortByName = function() {
        $scope.sort = 2;
        $scope.reverse = !$scope.reverse;
        if ($scope.reverse == true) {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
            if (nameA < nameB)
              return -1;
            if (nameA > nameB)
              return 1;
            return 0;
          });
        }
        else {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
            if (nameA < nameB)
              return 1;
            if (nameA > nameB)
              return -1;
            return 0;
          });
        }
      }

      $scope.sortByLocation = function() {
        $scope.sort = 1;
        $scope.reverse = !$scope.reverse;
        if ($scope.reverse) {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var locationA = a.location.toLowerCase(), locationB = b.location.toLowerCase()
            if (locationA < locationB)
              return -1;
            if (locationA > locationB)
              return 1;
            return 0;
          });
        }
        else {
          $scope.dormList = $scope.dormList.sort(function (a, b) {
            var locationA = a.location.toLowerCase(), locationB = b.location.toLowerCase()
            if (locationA < locationB)
              return 1;
            if (locationA > locationB)
              return -1;
            return 0;
          });
        }
      }

      $scope.sortByRating = function(){
        $scope.sort = 3;
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
