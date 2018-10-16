"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
//import * as ApiService from  './services/apiService';
//import * as ApiService from './services/apiService';
//let api = require('./services/apiService');
var app;
(function (app) {
    var language;
    (function (language) {
        angular
            .module('app.language', []);
        var CheckCtrl = /** @class */ (function () {
            function CheckCtrl() {
                console.log('CHECK Controller .. . .');
                //let service;
            }
            return CheckCtrl;
        }());
    })(language = app.language || (app.language = {}));
})(app || (app = {}));
//# sourceMappingURL=checkCtrl.js.map