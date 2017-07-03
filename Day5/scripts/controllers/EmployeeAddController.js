hrApp.controller('EmployeeAddController', ['$scope', '$http', '$location', 'CommonResourcesFactory', 'DepartmentService', 'JobService', 'ManagerService',
    function($scope, $http, $location, CommonResourcesFactory, DepartmentService, JobService, ManagerService) {
        $scope.employee = {};
        $scope.managers = [];
        $scope.jobs = [];
        $scope.deps = [];
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        /**
         * Reset form
         */
        $scope.reset = function () {
            this.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */
        $scope.create = function (addEmployee) {
            $http({url: CommonResourcesFactory.addEmployeeUrl, method: 'POST', data: addEmployee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };



        $scope.getJobsFc = function(job){
            $scope.jobs = job;
        }
        JobService.getJob($scope.getJobsFc);

        $scope.getDepartmentFc = function(dep){
            $scope.deps = dep;
        }
        DepartmentService.getDepartment($scope.getDepartmentFc);

        console.log($scope.jobs.length);
        console.log($scope.deps.length);

       $scope.getManagersFct = function(managers){
                $scope.managers = managers;
       }

       ManagerService.getManager($scope.getManagersFct);

        console.log($scope.managers);

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern = /^[0]\.\d{1}(\d)?$/;


        $scope.reset = function () {
            $scope.employee =
                {firstName: '',
                    lastName: '',
                    email: '',
                    id: ''
                };
        };


}]);