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
});

var myApp1 = angular.module("myModel1",[]).controller("myController1", function($scope){
    $scope.message = "Two Way Data Binding";

    var user = {
        firstName:"Abin",
        lastName:"Abraham",
        gender : "Male",

    }
    $scope.user = user


});

var myApp2 = angular.module("myModel2",[]).controller("myController2", function($scope){

    var employees = [{firstName:"Jacob",lastName:"Davis",gender:"Male",salary:55000},
    {firstName:"Riay",lastName:"Raven",gender:"FeMale",salary:52000},
    {firstName:"Done",lastName:"Rekha",gender:"Male",salary:25000},
    {firstName:"Milan",lastName:"Khan",gender:"FeMale",salary:70000}]

    $scope.employees= employees

    var technologies = [
        {name:"Python",likes:0,dislikes:0},
        {name:"C++",likes:0,dislikes:0},
        {name:"Java",likes:0,dislikes:0}
    ];

    $scope.technologies = technologies;

    $scope.incrementLike = function(technology){
        technology.likes++;
    };

    $scope.incrementDislike = function(technology){
        technology.dislikes++;
    };
});