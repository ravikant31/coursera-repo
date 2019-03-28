(function(){
"use strict"

angular.module("LunchCheck", [])

.controller("LunchCheckController", ["$scope", function($scope){
        $scope.checkIfTooMuch = function(dishes) {
            if (angular.isUndefined(dishes) || dishes === "") {
                $scope.message = "Please enter data first";
            } else {
                var allDishes = dishes.split(",");
                if (allDishes.length > 3) {
                    $scope.message = "Too much!"
                } else {
                    $scope.message = "Enjoy!"
                }
            }
        }
    }]);
})();