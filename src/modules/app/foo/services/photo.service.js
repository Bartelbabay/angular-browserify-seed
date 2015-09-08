'use strict';

module.exports = /*@ngInject*/
    function photoService($http, $q) {
        return {

            albumPhotosUrl: "http://jsonplaceholder.typicode.com/albums/:album_id/photos",
            photoUrl: "http://jsonplaceholder.typicode.com/photos/:photo_id",

            retrieve: function (prom) {
                $http.get('http://jsonplaceholder.typicode.com/photos').then(function (response) {
                    prom(response.data);
                });
            },
            retrieveByAlbum: function (albumId, prom) {
                $http.get(this.albumPhotosUrl.replace(':album_id', albumId)).then(function (response) {
                    prom(response.data);
                });
            },
            retrieveById: function (photoId, prom) {
                $http.get(this.photoUrl.replace(':photo_id', photoId)).then(function (response) {
                    prom(response.data);
                });
            }
        };
    };