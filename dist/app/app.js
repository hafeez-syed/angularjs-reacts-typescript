//import './common/services/';
require('angular');
require('angular-route');
//require('/');
//import * as angular from 'angular';
var app;
(function (app) {
    var main = angular.module('productManagement', [
        'ngRoute',
        'common.services',
        'productResourceMock'
    ]);
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks: true
        });
        $routeProvider
            .when('/', {
            templateUrl: '/src/app/products/productListView.html',
            controller: "ProductListCtrl as vm"
        })
            .when('/productList', {
            templateUrl: '/src/app/products/productListView.html',
            controller: "ProductListCtrl as vm"
        })
            .when('/productDetail/:productId', {
            templateUrl: '/src/app/products/productDetailView.html',
            controller: "ProductDetailCtrl as vm"
        })
            .otherwise('/productList');
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map