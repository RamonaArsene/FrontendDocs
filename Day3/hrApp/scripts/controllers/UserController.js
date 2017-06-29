/**
 * Created by Gianina.Carp on 6/29/2017.
 */
hrApp.controller('UserController', ['$scope', '$http', '$location', 'UserService',
    function ($scope, $http, $location, UserService) {
        $scope.usersList = false;
        $scope.user =
            {firstName: '',
              lastName: '',
              email: '',
              id: ''
            };

        $scope.users = [];

        $scope.back = function () {
            $location.url('/');
        };

        $scope.reset = function () {
            $scope.user =
                {firstName: '',
                lastName: '',
                email: '',
                id: ''
            };
        };

        $scope.save = function () {
            UserService.save($scope.user);
        };

        $scope.show = function () {
            $scope.users = UserService.getUsers();
            if ($scope.usersList == true) {
                $scope.usersList = false;
            } else {
                $scope.usersList = true;
            }
        }


    }]);