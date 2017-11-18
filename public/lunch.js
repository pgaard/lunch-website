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
    
    $scope.lunches = $firebaseArray(ref);
    $scope.lunches.$loaded().then(function(list){
        angular.forEach(list, function(value){
            if(!value.Rating) value.Rating = 0
        });
    });

    $scope.sortColumn = "Date";
    $scope.sortReverse = true;

    $scope.sort = function(sortColumn){
        if($scope.sortColumn == sortColumn){
            $scope.sortReverse = !$scope.sortReverse;
        }
        else{
            $scope.sortColumn = sortColumn;
            $scope.sortReverse = true;
        }
    }
});