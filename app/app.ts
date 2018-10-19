import * as angular from 'angular';
import 'angular-mocks';
import 'angular-resource';
import 'angular-route';

import './common/services/common.services';
import './common/services/apiService';

namespace app {
    let main = angular.module('ngReactApp', [
            'ngRoute',
            'common.services'
    ]);

    require('./items/singleRepo');
    require('./items/repos');
    require('./items/recipe');
    require('./items/food');
    main.config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];


    function routeConfig($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
        $routeProvider
            .when('/', {
                templateUrl: './app/items/repos.html',
                controller: 'PopularReposCtrl as vm'
            })
            .when('/repos', {
                templateUrl: './app/items/repos.html',
                controller: 'PopularReposCtrl as vm'
            })
            .when('/food', {
                templateUrl: './app/items/food.html',
                controller: 'FoodCtrl as vm'
            })
        ;
        $locationProvider.hashPrefix('');
    }
}