"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Hafeez Syed on 24/3/18.
 */
var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = /** @class */ (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app = exports.app || (exports.app = {}));
//# sourceMappingURL=products.js.map