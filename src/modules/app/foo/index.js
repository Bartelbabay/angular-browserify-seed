'use strict';

module.exports =
    angular.module('expressly.foo', [])
        .config(require('./routes.js'))
        .config(require('./i18n/en.js'))
        .service('photoService', ['$http', '$q', require('./services/photo.service')])
        .factory('Data', require('./factories/data.factory'))
        .factory('Resource', require('./factories/resource.factory'))
        .directive('ngInfiniteScroll', ['$timeout', 'Data', 'Resource', require('./directives/ng-infinite-scroll.directive')])
        .controller('barController', require('./controllers/bar.controller'))
        .controller('imageController', require('./controllers/image.controller'))
        .controller('albumController', require('./controllers/album.controller'))
        .controller('indexController', require('./controllers/index.controller'));