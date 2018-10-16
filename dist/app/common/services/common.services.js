var app;
(function (app) {
    var common;
    (function (common) {
        console.log('common services .. . .');
        angular
            .module('common.services', ['ngResource', 'ngMockE2E']);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=common.services.js.map