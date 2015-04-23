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

        parseFactory.submitReview = function(review){
            var dorm = new Parse.Query('dorms');
            dorm.get(review.dorm).then(function(res){
                var reviewCount = res.get('numReviews');
                res.set('star', calcAverage(reviewCount, res.get('star'), review.overall));
                res.set('socialness', calcAverage(reviewCount, res.get('socialness'), review.socialness));
                res.set('roomsize', calcAverage(reviewCount, res.get('roomsize'), review.roomsize));
                res.set('food', calcAverage(reviewCount, res.get('food'), review.food));
                res.set('amenities', calcAverage(reviewCount, res.get('amenities'), review.amenities));
                res.set('numReviews', reviewCount+1);
                res.save()
            });

            var submission = Parse.Object.extend("reviews");
            var sub = new submission();
            return sub.save(review);

        };

        parseFactory.getReviews = function(id){
            var query = new Parse.Query('reviews');
            query.equalTo("dorm", id);
            query.descending("createdAt");
            var ratings = query.find();
            return ratings;
        };

        parseFactory.getPictures = function(id){
            var query = new Parse.Query('pictures');
            query.equalTo("dorm", id);
            return query.find(/*{
                success: function(results) {
                    alert("Successfully retrieved " + results.length + " album.");
                    for (var i = 0; i < results.length; i++) {
                        var pics = results[i];
                        alert(pics.get("img1") + " to be displayed.");
                    }
                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            }*/);
        };

        function calcAverage(count, o, n){
            return ((o*count)+n)/(count+1);
        }
        return parseFactory

    });
