/**
 * Created by ramona.arsene on 7/3/2017.
 */
hrApp.service('ManagerService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {

    var managers =[];
    return {
        getManager: function (getManagersFc) {
            return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
                .success(function (data) {
                        for (var i in data) {
                            var ok = 0;
                           if(data[i].managerId != null){
                               for (var j in managers) {
                                   if (managers[j].employeeId == data[i].managerId.employeeId){
                                       ok = 1;
                                   }
                               }
                              if(ok == 0){
                                  managers.push(data[i].managerId);
                              }
                           }
                        }
                        return getManagersFc(managers);

                })
                .error(function (err) {
                    return {
                        "managerId": 1,
                    };
                });
        }
    }
    }]
);