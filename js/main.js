var angularApp = angular.module("angularApp", ['ngMaterial']);


angularApp.controller("mainCtrl", function($scope, $http, $log, $q) {
    $scope.count = 123;
});