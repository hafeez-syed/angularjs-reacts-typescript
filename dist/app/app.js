"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
require("angular-resource");
require("angular-route");
require("./common/services/common.services");
require("./common/services/productResourceMock");
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
            templateUrl: '/checking.html',
            controller: 'CheckCtrl as vm'
        })
            .when('/productList', {
            template: '<div>' +
                'Hello from angular' +
                '</div>'
        })
            .when('/productDetail/:productId', {
            templateUrl: '/app/products/productDetailView.html',
            controller: "ProductDetailCtrl as vm"
        })
            .otherwise('/productList');
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map