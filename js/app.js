
//(function(angular) {
  'use strict';
var myApp = angular.module('myApp', ['ngRoute','ngResource']);

myApp.controller('main', function($http, userservice, $scope) {
  var ctrl = this;

  ctrl.users = [];
  ctrl.newUser = {
    name: ''
  };

  ctrl.getUsers = function() {
    $http.get('/users').then(function(response) {
      ctrl.users = response.data;
    });
  };

  ctrl.addUser = function(user) {
    $http.post('/users', user).then(function() {
      ctrl.newUser = {name: ''};
      return ctrl.getUsers();
    });
  };

  ctrl.getUsers();

  $scope.$watch(function(){
    $scope.PreviewName = userservice.Preview.Name;
    $scope.PreviewMail = userservice.Preview.Mail;
  });
  
  

})
.config(function($routeProvider){
        $routeProvider.when('/list',
        {
            templateUrl:'views/list-view.html',
            controller:'ListViewController'
        });
        $routeProvider.when('/tilepanel',
        {
            templateUrl:'views/tile-panel.html',
            controller:'TilePanelController'
        });
        $routeProvider.when('/trellopanel',
        {
            templateUrl:'views/trello-panel.html',
            controller:'TrelloPanelController'
        });

        $routeProvider.when('/hw',
        {
            templateUrl:'views/hello-world.html',
            controller:'TrelloPanelController'
        });

        $routeProvider.otherwise({redirectTo: '/hw'});
     });


myApp.factory('userservice', ['$http', function($http) {
        return { async: function() {
          return $http.get('/users')  //1. this returns promise
        },
        Preview:{
            Name:''
        }
      };
  }]);

//})(window.angular);

//require(["util"], function(util) {
 
//});