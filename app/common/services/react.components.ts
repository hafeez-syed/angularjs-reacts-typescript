let reactComponents = require('react-components-2');
//const reactComponents = import 'react-components-2';
//import default from 'react-components-2';

namespace app.common {
    export interface IReactComponents {
    }

    export class ReactComponentService implements IReactComponents {

        constructor() {
        }

        public getComponents(componentName: string): any {
            //debugger;
            let rcm = reactComponents;
            let rc = reactComponents[componentName];
            return rc;
        }
    }

    angular
        .module('common.services')
        .service('ReactComponentService', ReactComponentService);
}