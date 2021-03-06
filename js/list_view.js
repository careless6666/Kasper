"use strict";
define(['jquery'], function ($) {

    myApp.controller('ListViewController', function (userservice, $scope) {
            userservice.async().then(function (d) {
                if (d.status == 200) {
                    $scope.Users = d.data;
                }
            });

            $scope.ShowProfile = function (e) {
                userservice.Preview.Name = e.Name;
                userservice.Preview.Mail = e.Mail;
                $("#userModal").modal();
            }
        }
    )
});