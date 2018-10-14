/**
 * Created by Hafeez Syed on 25/3/18.
 */
var app;
(function (app) {
    var common;
    (function (common) {
        var DataAccessService = /** @class */ (function () {
            function DataAccessService($resource) {
                this.$resource = $resource;
            }
            DataAccessService.prototype.getProductResource = function () {
                return this.$resource('/api/products/:productId');
            };
            DataAccessService.$inject = ['$resource'];
            return DataAccessService;
        }());
        common.DataAccessService = DataAccessService;
        angular
            .module('common.services')
            .service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=dataAccessService.js.map