var App = angular.module("hexatownApp", []);


App.controller("mainCtrl", ['$scope', 'FeedService', function($scope, Feed) {
    $scope.feeds = 123;
    Feed.parseFeed().then(function(res) {
        $scope.feeds = res; //.data.responseData.feed.entries;
    });

}]);



App.factory('FeedService', ['$http', function($http) {
    return {
        parseFeed: function() {
            return $http.get('https://365admin.stamplayapp.com/api/codeblock/v1/run/mediumrssfeed');
        }
    }
}]);