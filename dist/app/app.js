"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
require("angular-mocks");
require("angular-resource");
require("angular-route");
require("./common/services/common.services");
//import './common/services/productResourceMock';
require("./checkCtrl");
var main;
var app;
(function (app) {
    main = angular.module('productManagement', [
        'ngRoute'
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
            templateUrl: '/../../checking.html',
            controller: function ($scope) { console.log('Helllo!'); }
        });
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map