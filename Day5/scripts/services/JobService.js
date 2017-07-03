/**
 * Created by ramona.arsene on 7/3/2017.
 */
hrApp.service('JobService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {


    return {
        getJob: function (getJobsFc) {
            return $http.get(CommonResourcesFactory.findAllJobsUrl)
                .success(function (data) {
                    return getJobsFc (data);
                })
                .error(function (err) {
                    return {
                        "jobId": 1
                    };
                });
        }


    }

    }]
);