let reactComponentService = require('react-components-2');

namespace app.ngHost {
    export interface IReactComponents {
    }

    export class ReactComponentService implements IReactComponents {

        constructor() {
        }

        public getComponents(componentName: string): any {
            let rc = reactComponentService[componentName];

            if (typeof rc === 'object') {
                return rc[componentName];
            }
            return rc;
        }
    }

    angular
        .module('ngHost')
        .service('ReactComponentService', ReactComponentService);
}