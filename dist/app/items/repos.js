"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app;
(function (app) {
    var items;
    (function (items) {
        var PopularRepos = /** @class */ (function () {
            function PopularRepos($scope, apiService, $q) {
                var _this = this;
                this.$scope = $scope;
                this.apiService = apiService;
                this.$q = $q;
                this.data = [];
                this.name = 'hafeez';
                this.gitHubRepos = [];
                this.success = false;
                this.activate().then(function (data) {
                    _this.gitHubRepos = data;
                    console.log('Popular repos controller .. . .');
                });
            }
            PopularRepos.prototype.activate = function () {
                var defer = this.$q.defer();
                this.apiService.getPopularLanguages('javascript')
                    .then(function (responseData) {
                    defer.resolve(responseData);
                });
                return defer.promise;
            };
            return PopularRepos;
        }());
        items.PopularRepos = PopularRepos;
        PopularRepos.$inject = ['$scope', 'apiService', '$q'];
        angular
            .module('ngReactApp')
            .controller('PopularReposCtrl', PopularRepos);
    })(items = app.items || (app.items = {}));
})(app || (app = {}));
//# sourceMappingURL=repos.js.map