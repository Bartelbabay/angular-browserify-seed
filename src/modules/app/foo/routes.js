'use strict';

module.exports = /*ngInject*/
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/foo/templates/index.html',
                controller: 'indexController'
            })
            .when('/album/:id', {
                templateUrl: 'app/foo/templates/album.html',
                controller: 'albumController'
            })
            .when('/image/:id', {
                templateUrl: 'app/foo/templates/image.html',
                controller: 'imageController'
            })
            .otherwise({
                redirectTo: '/bar'
            });
    };