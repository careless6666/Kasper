(function(angular) {
  'use strict';
var myAppDev = angular.module('myAppE2E', ['myApp', 'ngMockE2E','ngResource']);

myAppDev.run(function($httpBackend, $resource) {
  var users = [];  

  for (var i = 0; i < 50; i++) {
    users.push({
    Name: 'User ' + i,
    Domain:'domain' + i,
    Mail: 'mail' + i + '@mail.ru',
    Department: 'Department' + i,
    Phone: '8 (912) 779 ' + pad(i,4),
    GroupId: 1
  })
  };

  for (var i = 51; i < 70; i++) {
    users.push({
    Name: 'User ' + i,
    Domain:'domain' + i,
    Mail: 'mail' + i + '@mail.ru',
    Department: 'Department' + i,
    Phone: '8 (912) 779 ' + pad(i,4),
    GroupId: 2
  })
  };

  $httpBackend.whenGET('/users').respond(users);

  $httpBackend.whenPOST('/users').respond(function(method, url, data) {
    var user = angular.fromJson(data);
    users.push(user);
    return [200, user, {}];
  });

  $httpBackend.whenGET('views/list-view.html').passThrough();;
  $httpBackend.whenGET('views/tile-panel.html').passThrough();;
  $httpBackend.whenGET('views/trello-panel.html').passThrough();;

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

});
})(window.angular);
