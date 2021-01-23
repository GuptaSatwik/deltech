'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', ['$scope',function($scope) {
  $scope.apple = 'apple1';
  console.log($scope.apple);
}]);