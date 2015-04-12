angular.module('services', ['parse-angular'])
    .factory('parse',function(){
        Parse.initialize("nINxoSRZH6bjFVAXqlNNAcSlz52zn2AOE6WfYAnX", "qgLTDp7xMEOdvKSwZYSDCczuIocaeV0TETj5LWQs");

        var Dorms = Parse.Object.extend("dorms");
        var parseFactory = {};

        parseFactory.getList = function(){
            var query = new Parse.Query('dorms')
            return query.find()
        }

        return parseFactory

    })
