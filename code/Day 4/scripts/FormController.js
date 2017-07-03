/**
 * Created by ramona.arsene on 6/30/2017.
 */
day4.controller('FormController', ['$scope', function ($scope){


   $scope.checkType = function(){
        if( $scope.myForm.input.$error.required){
            $scope.myForm.input.$valid = false;
            $scope.myForm.input.$invalid = true;
        }
        else {
            $scope.myForm.input.$valid = true;
            $scope.myForm.input.$invalid = false;
        }

        if($scope.myForm.input.$valid == true){
            $scope.myForm.input.$submitted = true;
        }
        else  $scope.myForm.input.$submitted = false;

    }
}]);