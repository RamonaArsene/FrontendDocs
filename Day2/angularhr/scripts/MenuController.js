/**
 * Created by Gianina.Carp on 6/28/2017.
 */
angular.module('hrApp').controller('MenuController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.demoActionList = [
        {
            label: "OtherScope",
            url: "views/childscope.html"
        },
        {
            label:"Demomath",
            url: "demomath.html"
        }
    ];
}]);