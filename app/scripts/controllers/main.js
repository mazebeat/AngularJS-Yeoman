'use strict';

/**
 * @ngdoc function
 * @name angularJsYeomanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsYeomanApp
 */
angular.module('angularJsYeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
