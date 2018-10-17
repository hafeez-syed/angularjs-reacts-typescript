import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Avatar} from "../../react-components/avatar";

namespace app.items {
    angular
        .module('ngReactApp')
        .directive('singleRepo', () => {
        return {
            restrict: 'AE',
            replace: true,
            scope:  {
                githubRepo: '=',
                order: '='
            },
            templateUrl: './app/items/singleRepo.html',
            controller: () => {
            },
            link: (scope) => {
                let componentOrder: any;

                scope.$watch('order', (newValue, oldValue) => {
                    if (newValue) {
                        componentOrder = newValue;
                    }
                });

                scope.$watch('githubRepo', (newValue, oldValue) => {
                    if (newValue) {
                        ReactDOM.render(
                            React.createElement(Avatar, {githubRepo: newValue}, 'Click Me'),
                            document.getElementsByClassName('repo-avatar')[componentOrder || 0]
                        )
                    }
                });
            }
        }
    });
}
