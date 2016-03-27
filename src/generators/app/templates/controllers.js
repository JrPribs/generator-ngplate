'use strict';

/* Controllers */

var <%- appControllers %> = angular.module('<%- appControllers %>', ['ngMaterial']);

<%- appControllers %>.controller('homeCtrl', ['$scope', '$http', '$mdSidenav',
    function($scope, $http, $mdSidenav) {
        $scope.navItems = global.navItems;
        $scope.sectionName = 'Home';
        $scope.openLeftMenu = function() {
            $mdSidenav('nav').toggle();
        };
    }
]);
