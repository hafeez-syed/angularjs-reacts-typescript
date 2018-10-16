"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var app;
(function (app) {
    var items;
    (function (items) {
        angular
            .module('ngReactApp')
            .directive('singleLanguage', function () {
            return {
                restrict: 'AE',
                replace: true,
                template: '<div>HIiiiiiiii.</div>',
                link: function () {
                    console.log('single language controller link');
                    debugger;
                }
            };
        });
    })(items = app.items || (app.items = {}));
})(app || (app = {}));
//# sourceMappingURL=single-language.js.map