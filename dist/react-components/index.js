var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ReactApp = /** @class */ (function (_super) {
    __extends(ReactApp, _super);
    function ReactApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReactApp.prototype.render = function () {
        return (React.createElement("div", null, "Hell from React component"));
    };
    return ReactApp;
}(React.Component));
ReactDOM.render(React.createElement(ReactApp, null), document.getElementById('app'));
//# sourceMappingURL=index.js.map