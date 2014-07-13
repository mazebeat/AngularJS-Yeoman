'use strict';

/**
 * @ngdoc function
 * @name angularJsYeomanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsYeomanApp
 */
angular.module('angularJsYeomanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
