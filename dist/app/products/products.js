var app;
(function (app) {
    var product;
    (function (product) {
        angular
            .module('app.product', []);
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
        product.Product = Product;
    })(product = app.product || (app.product = {}));
})(app || (app = {}));
//# sourceMappingURL=products.js.map