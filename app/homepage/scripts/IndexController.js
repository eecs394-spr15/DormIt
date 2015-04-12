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

      /*$scope.dormList = listDorms.sort(function(a, b) {
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1;
        if (nameA > nameB)
          return 1;
        return 0;
      });*/

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
      }





    });
