import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Recipe} from "../../react-components/recipe";

namespace app.items {
    angular
        .module('ngReactApp')
        .directive('recipe', () => {
        return {
            restrict: 'AE',
            replace: true,
            scope:  {
                food: '=',
                order: '='
            },
            templateUrl: './app/items/recipe.html',
            controller: () => {
            },
            link: (scope) => {
                let componentOrder: any;

                scope.$watch('order', (newValue, oldValue) => {
                    if (newValue) {
                        componentOrder = newValue;
                    }
                });

                scope.$watch('food', (newValue, oldValue) => {
                    if (newValue) {
                        ReactDOM.render(
                            React.createElement(Recipe, {food: newValue}),
                            document.getElementsByClassName('food-recipe')[componentOrder || 0]
                        )
                    }
                });
            }
        }
    });
}
