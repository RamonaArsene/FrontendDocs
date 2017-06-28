/**
 * Created by Gianina.Carp on 6/28/2017.
 */
angular.module('hrApp').controller('ImageController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $scope.imageList = [
        [
            {
                model: "Model 1",
                name: "pictures/cana1.jpg",
                url:  "produse/cana1.html"
            },
            {
                model: "Model 2",
                name: "pictures/cana2.jpg",
                url:  "produse/cana2.html"
            }
        ],
        [
            {
                model: "Model 3",
                name: "pictures/cana3.jpg",
                url:  "produse/cana3.html"
            },
            {
                model: "Model 4",
                name: "pictures/cana4.jpg",
                url:  "produse/cana4.html"
            }
        ]
    ];

    $scope.cartList = [];

    $scope.pushInCart = function(object) {
        $scope.cartList.push(object);
        console.log(object);
    }

}]);