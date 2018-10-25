let reactComponents = require('react-components-2');

namespace app.common {
    export interface IReactComponents {
    }

    export class ReactComponentService implements IReactComponents {

        constructor() {
        }

        public getComponents(componentName: string): any {
            let rc = reactComponents[componentName];

            if (typeof rc === 'object') {
                return rc[componentName];
            }
            return rc;
        }
    }

    angular
        .module('common.services')
        .service('ReactComponentService', ReactComponentService);
}