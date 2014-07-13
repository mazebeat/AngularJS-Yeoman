'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
