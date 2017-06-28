/**
 * Created by Gianina.Carp on 6/28/2017.
 */
angular.module('hrApp').controller('ArithmeticController', ['$rootScope', '$scope', function ($rootScope, $scope) {


    $scope.numberA;
    $scope.numberB;
    $scope.rez = 0;

    $scope.getOperation = function(op){
       switch(op){
           case '+':
                    $scope.rez = $scope.numberA + $scope.numberB;
                    break;
           case '*':
                    $scope.rez = $scope.numberA * $scope.numberB;
                    break;
           case '/':
                    $scope.rez = $scope.numberA / $scope.numberB;
                    break;
           case '-':
                    $scope.rez = $scope.numberA - $scope.numberB;
                    break;
           default: $scope.rez = 0;
       }
    }
}]);