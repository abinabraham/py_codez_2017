var myApp = angular.module("myModule",[]);

myApp.controller("myController", function($scope){
    $scope.msg = "Yes its Angular Tuto !.."
    var user = {
        firstName:"Abin",
        lastName:"Abraham",

    }
    $scope.user = user
    var country = {
        name: "India",
        capital : "New Delhi",
        flag:"images/flg.png"
    }
    $scope.country = country
})