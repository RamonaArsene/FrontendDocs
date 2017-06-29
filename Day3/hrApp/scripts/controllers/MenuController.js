hrApp.controller('MenuController', ['$scope', 'employeeActionsService', function($scope, employeeActionsService){
    $scope.employeeActionList = [];

    var getValues = function(){
        for(var i in employeeActionsService){

            $scope.employeeActionList.push(employeeActionsService[i]);
        }
    }

    getValues();
    // TODO #12 - load menu items from Value

    $scope.currentDate = new Date();

}]);
