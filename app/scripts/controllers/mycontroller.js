'use strict';

/**
 * @ngdoc function
 * @name angularJsYeomanApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the angularJsYeomanApp
 */
angular.module('angularJsYeomanApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
