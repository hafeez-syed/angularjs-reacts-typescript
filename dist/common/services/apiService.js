//import * as angular from 'angular';
var app;
(function (app) {
    var common;
    (function (common) {
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
        common.ApiService = ApiService;
        angular
            .module('common.services')
            .service('apiService', ApiService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=apiService.js.map