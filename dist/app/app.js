"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import './common/services/';
const angular = require("angular");
require("angular-mocks");
require("angular-resource");
require("angular-route");
//require('angular');
//require('angular-route');
//require('angular-resource');
//require('angular-mocks');
require("./common/services/common.services");
require("./common/services/productResourceMock");
//require('./common/services/*');
//require('./common/services/productResourceMock');
//require('/');
//import * as angular from 'angular';s
const ora = require('ora');
const spinner = ora('Loading unicorns').start();
setTimeout(() => {
    spinner.color = 'yellow';
    spinner.text = 'Loading rainbows';
}, 1000);
var app;
(function (app) {
    let main = angular.module('productManagement', [
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