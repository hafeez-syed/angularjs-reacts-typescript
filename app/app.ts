import * as angular from 'angular';
import 'angular-mocks';
import 'angular-resource';
import 'angular-route';
import './common/services/common.services';
//import './common/services/productResourceMock';
import './checkCtrl';

let main;

namespace app {
    main = angular.module('productManagement', [
            'ngRoute'
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
                templateUrl: '/../../checking.html',
                controller: function($scope) {console.log('Helllo!');}
            })
            /*.when('/productList', {
                template: '<div>' +
                'Hello from angular'+
                '</div>'
            })
            .when('/productDetail/:productId', {
                templateUrl: '/app/products/productDetailView.html',
                controller: "ProductDetailCtrl as vm"
            })
            .otherwise('/productList')*/;
    }
}