//import * as angular from 'angular';
var app;
(function (app) {
    var check;
    (function (check) {
        var CheckCtrl = /** @class */ (function () {
            function CheckCtrl() {
                debugger;
                console.log('CHECK Controller .. . .');
            }
            return CheckCtrl;
        }());
        check.CheckCtrl = CheckCtrl;
        //main.controller('CheckCtrl', CheckCtrl);
        angular
            .module('checkModule', [])
            .controller('CheckCtrl', CheckCtrl);
    })(check = app.check || (app.check = {}));
})(app || (app = {}));
//# sourceMappingURL=checkCtrl.js.map