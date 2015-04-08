angular
    .module('homepage')
    .controller('IndexController', function($scope, supersonic) {
      // Controller functionality
      var listDorms = [
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/sargent.jpg",
          name:"Sargent",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/hinman.jpg",
          name:"1835 Hinman",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/foster-walker.jpg",
          name:"Foster-Walker",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/jones.jpg",
          name:"Jones",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/elder.jpg",
          name:"Elder",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/bobb.jpg",
          name:"Bobb",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/allison.jpg",
          name:"Allison",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/slivka.jpg",
          name:"Slivka",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/ayers.jpg",
          name:"Ayers",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/lindgren.jpg",
          name:"Lindgren",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/kemper.jpg",
          name:"Kemper",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/hobart.jpg",
          name:"Hobart",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/goodrich.jpg",
          name:"Goodrich",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/parc.jpg",
          name:"Parc",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/rogers.jpg",
          name:"Rogers",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/shepard.jpg",
          name:"Shepard",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/willard.jpg",
          name:"Willard",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/seabury.jpg",
          name:"Seabury",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/nmq.jpg",
          name:"North Mid-Quads",
          link:"#"
        },
        {
          img:"http://www.northwestern.edu/living/housing-options/assets/smq.jpg",
          name:"South Mid-Quads",
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
