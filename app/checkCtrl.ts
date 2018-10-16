//import * as angular from 'angular';

namespace app.check {

    export class CheckCtrl{
        constructor() {

            debugger;
            console.log('CHECK Controller .. . .');
        }
    }

    //main.controller('CheckCtrl', CheckCtrl);

    angular
        .module('checkModule', [])
        .controller('CheckCtrl', CheckCtrl);
}
