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
    var ref = firebase.database().ref().child("lunch");//.orderByChild("GroupId").equalTo("0aa02a51-2d13-40ac-9653-b0e6c4a38dfd");
    var query = ref.orderByChild("Date");//.limitToLast(10);
    $scope.lunches = $firebaseArray(query);
});