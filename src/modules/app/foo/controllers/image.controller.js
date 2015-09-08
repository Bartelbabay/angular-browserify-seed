'use strict';

module.exports = /*@ngInject*/
    function imageController($scope, $route, photoService) {

        $scope.photoId = $route.current.params.id;
        $scope.initialized = 0;

        var initialize = function (data) {
            $scope.data = data;
            $scope.initialized = 1;
        }

        photoService.retrieveById($scope.photoId, initialize);
    };