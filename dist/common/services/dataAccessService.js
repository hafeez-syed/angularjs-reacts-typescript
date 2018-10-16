var app;
(function (app) {
    var common;
    (function (common) {
        var ApiService = /** @class */ (function () {
            function ApiService($resource) {
                this.$resource = $resource;
            }
            ApiService.prototype.getPopularLanguages = function () {
                return this.$resource('/api/languages');
            };
            ApiService.$inject = ['$resource'];
            return ApiService;
        }());
        common.ApiService = ApiService;
        angular
            .module('common.services')
            .service('apiService', ApiService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=dataAccessService.js.map