angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic) {
      // Controller functionality
      $scope.dormList = [
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/sargent.jpg",
          name:"Sargent",
          location:"North",
          size:"Large",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/hinman.jpg",
          name:"1835 Hinman",
          location:"South",
          size:"Large",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/foster-walker.jpg",
          name:"Foster-Walker",
          location:"South",
          size:"Large",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/jones.jpg",
          name:"Jones",
          location:"South",
          size:"Small",
          type:"Residential College",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/elder.jpg",
          name:"Elder",
          location:"North",
          size:"Large",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/bobb.jpg",
          name:"Bobb",
          location:"North",
          size:"Large",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/allison.jpg",
          name:"Allison",
          location:"South",
          size:"Large",
          type:"Residence Hall",
          link:"mockdorm-allison#mockdorm"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/slivka.jpg",
          name:"Slivka",
          location:"North",
          size:"Large",
          type:"Residential College",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/ayers.jpg",
          name:"Ayers",
          location:"North",
          size:"Large",
          type:"Residential College",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/lindgren.jpg",
          name:"Lindgren",
          location:"North",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/kemper.jpg",
          name:"Kemper",
          location:"North",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/hobart.jpg",
          name:"Hobart",
          location:"South",
          size:"Small",
          type:"Residential College",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/goodrich.jpg",
          name:"Goodrich",
          location:"North",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/parc.jpg",
          name:"Parc",
          location:"South",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/rogers.jpg",
          name:"Rogers",
          location:"South",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/shepard.jpg",
          name:"Shepard",
          location:"South",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/willard.jpg",
          name:"Willard",
          location:"South",
          size:"Large",
          type:"Residential College",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/seabury.jpg",
          name:"Seabury",
          location:"North",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/nmq.jpg",
          name:"North Mid-Quads",
          location:"South",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/smq.jpg",
          name:"South Mid-Quads",
          location:"South",
          size:"Small",
          type:"Residence Hall",
          link:"#"
        }
      ];

      $scope.reverse = false;

      function compare(el1, el2, index) {
        return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
      }

      $scope.sortByName = function() {
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
