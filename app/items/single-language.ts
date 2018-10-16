import * as angular from 'angular';
import {debug} from "util";

namespace app.items {
    angular
        .module('ngReactApp')
        .directive('singleLanguage', () => {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div>HIiiiiiiii.</div>',
            link: () => {
                console.log('single language controller link');
                debugger;
            }
        }
    });
}
