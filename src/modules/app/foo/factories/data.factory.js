'use strict';

module.exports = /*@ngInject*/
        function Data () {
            return {
                addItems: function ($scope) {
                    $scope.inProcess = true;

                    var from = $scope.offset * $scope.options.limit;

                    if (from < $scope.options.data.length) {
                        var to = from + $scope.options.limit;
                        to = to > $scope.options.data.length ? $scope.options.data.length : to;

                        for (var i = from; i < to; i++) {
                            $scope.items = $scope.items.concat($scope.options.data[i]);
                        }

                        $scope.offset++;
                    } else {
                        $scope.hasItems = false;
                    }

                    $scope.inProcess = false;
                }
            };
        }