'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:JobsCtrl
 * @description
 * # JobsCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('JobsCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data.json').
      success(function(data, status, headers, config) {
        $scope.datas = data;
      }).
      error(function(data, status, headers, config) {
        // log error
      });
  });
