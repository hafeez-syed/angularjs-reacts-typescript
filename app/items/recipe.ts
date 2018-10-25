import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import {Recipe} from "../../react-components/recipe";
import {Avatar} from "../../react-components/Avatar";

namespace app.items {
    angular
        .module('ngReactApp')
        .directive('recipe', () => {
        return {
            restrict: 'AE',
            replace: true,
            scope:  {
                food: '=',
                order: '=',
                componentName: '@'
            },
            templateUrl: './app/items/recipe.html',
            controller: ['$scope', 'ReactComponentService', RecipeController],
            link: (scope) => {
                let componentOrder: any;

                scope.$watch('order', (newValue, oldValue) => {
                    if (newValue) {
                        componentOrder = newValue;
                    }
                });

                scope.$watch('food', (newValue, oldValue) => {
                    if (newValue) {
                        scope;
                        debugger;
                        //let oneReactComponent: any = scope.reactComponent;
                        //console.log(oneReactComponent);
                        ReactDOM.render(
                            React.createElement(Avatar, {food: newValue}),
                            document.getElementsByClassName('food-recipe')[componentOrder || 0]
                        )
                    }
                });
            }
        }
    });

    export class RecipeController {
        public reactComponent: any;
        constructor(private $scope: any, private reactComponentsService: any) {
            //console.log(this.reactComponentsService.getComponents());
            //console.log(this.$scope.componentName);
            //console.log(this.reactComponentsService.getComponents()[this.$scope.componentName]);
            this.$scope.reactComponent = this.reactComponentsService.getComponents(this.$scope.componentName);
            console.log(this.$scope.reactComponent);
        }
    }
}
