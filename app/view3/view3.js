'use strict';

angular.module('myApp.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', '$scope','$routeParams','$location',[function($scope, $routeParams,$location) {
  $scope.percentage = $location.search().param;
  //var param1= $routeParams.param;
  alert("percentage"+$scope.percentage);
}]);