//import './common/services/';
import * as angular from 'angular';
import 'angular-mocks';
import 'angular-resource';
import 'angular-route';
//require('angular');
//require('angular-route');
//require('angular-resource');
//require('angular-mocks');

import './common/services/common.services'
import './common/services/productResourceMock'

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

namespace app {
    let main = angular.module('productManagement', [
            'ngRoute',
            'common.services',
            'productResourceMock'
        ]);

    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
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
}