
//(function(angular) {
  'use strict';
var myApp = angular.module('myApp', ['ngRoute','ngResource']);

myApp.controller('main', ['$http','userservice' , function($http) {
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

}])
.config(function($routeProvider){
        $routeProvider.when('/list',
        {
            templateUrl:'views/list-view.html',
            controller:'ListViewController'
        });
        $routeProvider.when('/titlepanel',
        {
            templateUrl:'views/title-panel.html',
            controller:'TitlePanelController'
        });
        $routeProvider.when('/trellopanel',
        {
            templateUrl:'views/trello-panel.html',
            controller:'TrelloPanelController'
        });

        $routeProvider.otherwise({redirectTo: '/list'});
     });


myApp.factory('userservice', ['$http', function($http) {
        return { async: function() {
          return $http.get('/users')  //1. this returns promise
        }
      };
  }]);

//})(window.angular);

