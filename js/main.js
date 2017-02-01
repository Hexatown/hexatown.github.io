var App = angular.module("hexatownApp", []);


App.controller("mainCtrl", ['$scope', 'FeedService', function($scope, Feed) {
    $scope.feeds = "";
    Feed.parseFeed().then(function(rss) {
        if (rss.status === 200) {

            $scope.feeds = rss.data.body.rss; //.data.responseData.feed.entries;
        }

    });

}]);



App.factory('FeedService', ['$http', function($http) {
    return {
        parseFeed: function() {
            return $http.get('https://365admin.stamplayapp.com/api/codeblock/v1/run/mediumrssfeed');
        }
    }
}]);