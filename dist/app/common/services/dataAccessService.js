/**
 * Created by Hafeez Syed on 25/3/18.
 */
var app;
(function (app) {
    var common;
    (function (common) {
        class DataAccessService {
            constructor($resource) {
                this.$resource = $resource;
            }
            getProductResource() {
                return this.$resource('/api/products/:productId');
            }
        }
        DataAccessService.$inject = ['$resource'];
        common.DataAccessService = DataAccessService;
        angular
            .module('common.services')
            .service('dataAccessService', DataAccessService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=dataAccessService.js.map