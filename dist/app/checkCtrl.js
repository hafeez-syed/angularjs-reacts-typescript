var app;
(function (app) {
    var CheckCtrl = /** @class */ (function () {
        function CheckCtrl() {
            console.log('CHECK Controller .. . .');
        }
        return CheckCtrl;
    }());
    app.CheckCtrl = CheckCtrl;
    angular
        .module('productManagement')
        .controller('CheckCtrl', CheckCtrl);
})(app || (app = {}));
//# sourceMappingURL=checkCtrl.js.map