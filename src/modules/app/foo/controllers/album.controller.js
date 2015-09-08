'use strict';

module.exports = /*@ngInject*/
    function albumController($scope, $route, photoService) {

        $scope.albumId = $route.current.params.id;

        $scope.data = [];
        $scope.limit = 10;

        $scope.list = [];
        $scope.initialized = 0;

        var initialize = function (data) {
            $scope.data = data;
            $scope.initialized = 1;
        }

        photoService.retrieveByAlbum($scope.albumId, initialize);
    };