hrApp.controller('JobViewController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory) {

    $scope.job = {}
    ;

        $http.get(CommonResourcesFactory.findOneJobUrl + $routeParams.jobId)
            .success(function (data) {
                $scope.job = data;
            })
        // $scope.back = function () {
        //     $location.url('/employeeList');
        // }


    }]);