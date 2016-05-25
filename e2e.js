(function(angular) {
  'use strict';
var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E','ngResource']);

myAppDev.run(function($httpBackend, $resource) {
  var users = [
  {
    name: 'user1',
    domain:'domain1',
    mail: 'mail1@mail.ru',
    deparment: 'department1',
    phone: 'phone1'
   }, 
  {
    name: 'user2',
    domain:'domain2',
    mail: 'mail2@mail.ru',
    deparment: 'department2',
    phone: 'phone2'
  }];

  $httpBackend.whenGET('/users').respond(users);

  $httpBackend.whenPOST('/users').respond(function(method, url, data) {
    var user = angular.fromJson(data);
    users.push(user);
    return [200, user, {}];
  });

  $httpBackend.whenGET('views/list-view.html').passThrough();;
  $httpBackend.whenGET('views/title-panel.html').passThrough();;
  $httpBackend.whenGET('views/trello-panel.html').passThrough();;

});
})(window.angular);
