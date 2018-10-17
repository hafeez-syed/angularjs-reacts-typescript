"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var React = require("react");
var ReactDOM = require("react-dom");
var avatar_1 = require("../../react-components/avatar");
var app;
(function (app) {
    var items;
    (function (items) {
        angular
            .module('ngReactApp')
            .directive('singleRepo', function () {
            return {
                restrict: 'AE',
                replace: true,
                scope: {
                    githubRepo: '=',
                    order: '='
                },
                templateUrl: './app/items/singleRepo.html',
                controller: function () {
                },
                link: function (scope) {
                    var componentOrder;
                    scope.$watch('order', function (newValue, oldValue) {
                        if (newValue) {
                            componentOrder = newValue;
                        }
                    });
                    scope.$watch('githubRepo', function (newValue, oldValue) {
                        if (newValue) {
                            ReactDOM.render(React.createElement(avatar_1.Avatar, { githubRepo: newValue }, 'Click Me'), document.getElementsByClassName('repo-avatar')[componentOrder || 0]);
                        }
                    });
                }
            };
        });
    })(items = app.items || (app.items = {}));
})(app || (app = {}));
//# sourceMappingURL=singleRepo.js.map