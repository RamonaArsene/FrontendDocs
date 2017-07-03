/**
 * Created by ramona.arsene on 6/30/2017.
 */
day4.controller('ColorsController', ['$scope', function ($scope){

    $scope.colors = [
        {
            "text" : "muted",
            "class": "text-muted",
            "type" : "boring"
        },
        {
            "text" : "primary",
            "class": "text-primary",
            "type" : "boring"
        },
        {
            "text" : "success",
            "class": "success",
            "type" : "boring"
        },
        {
            "text" : "info",
            "class": "text-info",
            "type" : "boring"    },
        {
            "text" : "warning",
            "class": "text-warning",
            "type" : "boring"
        },
        {
            "text": "danger",
            "class": "text-danger",
            "type": "boring"
        }
        ];
    $scope.colorClass;
    $scope.changeColor = function() {
        $scope.colorClass = $scope.selColor;
        console.log($scope.selColor);
    }



}]);