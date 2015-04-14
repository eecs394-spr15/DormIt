angular.module('services', ['parse-angular'])
    .factory('parse',function(){
        Parse.initialize("nINxoSRZH6bjFVAXqlNNAcSlz52zn2AOE6WfYAnX", "qgLTDp7xMEOdvKSwZYSDCczuIocaeV0TETj5LWQs");

        var parseFactory = {};

        parseFactory.getList = function(){
            var query = new Parse.Query('dorms');
            query.ascending('name');
            return query.find()
        };

        parseFactory.getDorm = function(id){
            var query = new Parse.Query('dorms');
            return query.get(id);

        };

        return parseFactory

    })
