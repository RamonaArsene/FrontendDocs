/**
 * Created by ramona.arsene on 7/3/2017.
 */
hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {

    return {
        getDepartment: function (getDepartmentFc) {
            return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                .success(function (data) {
                    return getDepartmentFc(data);
                })
                .error(function (err) {
                    return {
                        "departmentId": 1
                    };
                });
        }
    }
    }]
);