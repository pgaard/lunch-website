/**
 * Created by pgaard on 4/23/17.
 */
var app = angular.module("lunchApp", ["firebase"]);

app.filter("ratingDisplay", function(){
   return function(number){
       if (isNaN(number) || number == 0){
           return "";
       }
       return number;
   }
});

app.controller("LunchController", function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child("lunch");


    $scope.load = function(sortColumn){
        $scope.lunches = $firebaseArray(ref.orderByChild(sortColumn));
    }

    $scope.load('Date');
});