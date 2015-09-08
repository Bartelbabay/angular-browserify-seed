'use strict';

module.exports = /*@ngInject*/
    function ngInfiniteScroll ($timeout, Data, Resource) {

        return {
            restrict: 'A',
            scope: {
                options: '=',
                items: '='
            },
            link: function ($scope, element) {
                $scope.lastRemain = undefined;
                $scope.offset = 0;
                $scope.inProcess = false;
                $scope.options = angular.extend({
                    limit: 10,
                    threshold: 50,
                    data: []
                }, $scope.options);
                $scope.hasItems = true;

                if (!$scope.options.resource && !Array.isArray($scope.options.data)) {
                    $scope.options.data = [$scope.options.data];
                }
                $scope.strategy = $scope.options.resource !== undefined ? Resource : Data;
                $scope.strategy.addItems($scope);
                element.bind('scroll', function () {
                    var remain = element[0].scrollHeight - (element[0].clientHeight + element[0].scrollTop);
                    if (remain < $scope.options.threshold
                        && (!$scope.lastRemain || (remain - $scope.lastRemain) < 0)
                        && $scope.hasItems && !$scope.inProcess) {
                        $scope.$apply(function () {
                            $scope.strategy.addItems($scope);
                        });
                    }

                    $scope.lastRemain = remain;
                });
            }
        }

    }