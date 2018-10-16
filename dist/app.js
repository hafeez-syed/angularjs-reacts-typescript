"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
require("angular-resource");
require("angular-route");
require("./common/services/common.services");
require("./common/services/apiService");
var app;
(function (app) {
    var main = angular.module('ngReactApp', [
        'ngRoute',
        'common.services'
    ]);
    require('./items/languages');
    main.config(routeConfig);
    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
            templateUrl: './app/items/languages.html',
            controller: 'LanguageCtrl as vm'
        })
            .when('/language', {
            templateUrl: './app/items/languages.html',
            controller: 'LanguageCtrl as vm'
        });
        $locationProvider.hashPrefix('');
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map