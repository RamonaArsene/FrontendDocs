/**
 * Created by Gianina.Carp on 6/28/2017.
 */
angular.module('hrApp').controller('OtherController', ['$scope', function ($scope) {
    $scope.title = "Sommething Big and Beauty";
    $scope.setTitle = function() {
        $scope.title = $scope.$parent.title;
    }
}]);

