'use strict';

module.exports = /*@ngInject*/
    function indexController($scope, photoService) {

        $scope.data = [];
        $scope.limit = 10;

        $scope.list = [];
        $scope.initialized = 0;

        var initialize = function (data) {
            $scope.data = data;
            $scope.initialized = 1;
        }

        photoService.retrieve(initialize);

    };