angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic) {
      // Controller functionality
      $scope.dormList = [
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/sargent.jpg",
          name:"Sargent",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/hinman.jpg",
          name:"1835 Hinman",
          link:"#"
        }
      ];

      $scope.title = "DormIt";

      $scope.removeElement = function(){
        $scope.dormList = [
          {img:"http://www.northwestern.edu/living/housing-options/assets/sargent.jpg",
            name:"Sargent",
            link:"#"}]
      }
    });
$scope.query = {};
$scope.queryBy = '$';
$scope.orderProp="name";

