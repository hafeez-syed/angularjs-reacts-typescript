"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app;
(function (app) {
    var item;
    (function (item) {
        var ApiService = /** @class */ (function () {
            function ApiService() {
            }
            ApiService.prototype.getPopularLanguages = function (language) {
                var url = "https://api.github.com/search/repositories?q=starts:%3E1+language:" + language + "&sort=stars&order=desc&type=Repositories";
                return fetch(url)
                    .then(function (response) { return response.json(); })
                    .then(function (data) { return data.items; });
            };
            return ApiService;
        }());
        angular
            .module('ngReactApp')
            .service('apiService', ApiService);
    })(item = app.item || (app.item = {}));
})(app || (app = {}));
//# sourceMappingURL=apiService.js.map