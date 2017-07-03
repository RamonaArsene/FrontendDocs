var day4 = angular.module('day4', ['ngRoute']);

day4.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/colors', {
            templateUrl: 'views/colors.html',
            controller: 'ColorsController'
            }).
            when('/form', {
                templateUrl: 'views/form.html',
                controller: 'FormController'
                })



}]);