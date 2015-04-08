angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic) {
      // Controller functionality
      var listDorms = [
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
          link:"#"
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

      function compare(el1, el2, index) {
        return el1[index] == el2[index] ? 0 : (el1[index] < el2[index] ? -1 : 1);
      }

      $scope.dormList = listDorms.sort(function(a, b) {
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })

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

