"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app;
(function (app) {
    var items;
    (function (items) {
        var Language = /** @class */ (function () {
            function Language($scope, apiService, $q) {
                var _this = this;
                this.$scope = $scope;
                this.apiService = apiService;
                this.$q = $q;
                this.data = [];
                this.name = 'hafeez';
                this.gitHubData = [];
                this.success = false;
                this.activate().then(function (data) {
                    _this.gitHubData = data;
                    console.log('Language Controller .. . .');
                });
            }
            Language.prototype.activate = function () {
                var defer = this.$q.defer();
                this.apiService.getPopularLanguages('javascript')
                    .then(function (responseData) {
                    defer.resolve(responseData);
                });
                return defer.promise;
            };
            return Language;
        }());
        items.Language = Language;
        Language.$inject = ['$scope', 'apiService', '$q'];
        angular
            .module('ngReactApp')
            .controller('LanguageCtrl', Language);
    })(items = app.items || (app.items = {}));
})(app || (app = {}));
//# sourceMappingURL=languages.js.map