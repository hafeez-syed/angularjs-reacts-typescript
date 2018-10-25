import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

namespace app.items {
    angular
        .module('ngReactApp')
        .directive('singleRepo', () => {
        return {
            restrict: 'E',
            replace: true,
            scope:  {
                props: '=',
                order: '=',
                componentName: '@',
                className: '@',
            },
            templateUrl: './app/items/singleRepo.html',
            controller: ['$scope', 'ReactComponentService', SingleRepoController],
            controllerAs: 'singleRepoCtrl'
        }
    });

    export class SingleRepoController {
        public reactComponent: any;
        public className: string;

        constructor(private $scope: any, private reactComponentsService: any) {
            this.reactComponent = this.reactComponentsService.getComponents(this.$scope.componentName);
            this.className = this.$scope.className;
            this.renderComponent();
        }

        private renderComponent() {
            ReactDOM.render(
                React.createElement(this.reactComponent, this.$scope.props.prop),
                document.getElementsByClassName(this.className)[this.$scope.order || 0]
            )
        }
    }
}
