'use strict';

module.exports = /*@ngInject*/
    function Resource () {
        return {
            addItems: function ($scope) {
                $scope.inProcess = true;
                $scope.options.resource.query(
                  { offset: $scope.offset * $scope.options.limit, limit: $scope.options.limit },
                  function (data) {
                      if (data.models.length == 0) {
                          $scope.hasItems = false;
                      } else {
                          for (var i = 0; i < data.models.length; i++) {
                              $scope.items = $scope.items.concat(data.models[i]);
                          }
                      }

                      $scope.inProcess = false;
                  }
                );

            }
        };
    }