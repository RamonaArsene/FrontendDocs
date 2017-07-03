/**
 * Created by ginel.guiu on 6/29/2017.
 */

hrApp.controller('UserController',['$scope', '$location', function($scope,$location){
    $scope.user={};

    $scope.users=[];

    $scope.showList=false;

    $scope.saveUser=function() {
        $scope.users.push(angular.copy($scope.user));
        alert('Userul a fost salvat');
    }
    $scope.back=function(){
        $location.url('/');
    }
    $scope.reset=function() {
        $scope.user.firstName = undefined;
        $scope.user.lastName = undefined;
        $scope.user.age = "";
        $scope.user.phoneNumber = undefined;
    }
    $scope.toggleList=function(){
        $scope.showList=!$scope.showList;
    }
}]);