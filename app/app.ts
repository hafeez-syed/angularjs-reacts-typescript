/**
 * Created by Hafeez Syed on 23/3/18.
 */
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
            .when('/productList', {
                templateUrl: '/app/products/productListView.html',
                controller: "ProductListCtrl as vm"
            })
            .when('/productDetail/:productId', {
                templateUrl: '/app/products/productDetailView.html',
                controller: "ProductDetailCtrl as vm"
            })
            .otherwise('/productList');
    }
}