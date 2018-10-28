import * as angular from 'angular';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

namespace app.ngHost {
    angular
        .module('ngHost')
        .directive('oneNgHost', () => {
        return {
            restrict: 'E',
            replace: true,
            scope:  {
                props: '=',
                order: '=',
                componentName: '@',
                className: '@',
            },
            //templateUrl: './app/items/oneNgHost.html',
            template: '<div>\n' +
            '    <div class="ng-react-host"></div>\n' +
            '</div>',
            controller: ['$scope', 'ReactComponentService', OneNgHostController],
            controllerAs: '0neNgHostCtrl'
        }
    });

    export class OneNgHostController {
        public reactComponent: any;
        public className: string;

        constructor(private $scope: any, private reactComponentsService: any) {
            debugger;
            this.reactComponent = this.reactComponentsService.getComponents(this.$scope.componentName);
            this.className = this.$scope.className;
            this.renderComponent();
            console.log('hello...');
        }

        private renderComponent() {
            ReactDOM.render(
                React.createElement(this.reactComponent, this.$scope.props.prop),
                document.getElementsByClassName(this.className)[this.$scope.order || 0]
            )
        }
    }
}
