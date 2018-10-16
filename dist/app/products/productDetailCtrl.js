/**
 * Created by Hafeez Syed on 7/4/18.
 */
var app;
(function (app) {
    var productDetail;
    (function (productDetail) {
        class ProductDetailCtrl {
            constructor($routeParams, dataAccessService) {
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = 'Product Detail';
                let productResource = dataAccessService.getProductResource();
                productResource.get({ productId: $routeParams.productId }, (data) => {
                    this.product = data;
                });
            }
        }
        ProductDetailCtrl.$inject = ['$routeParams', 'dataAccessService'];
        angular
            .module('productManagement')
            .controller('ProductDetailCtrl', ProductDetailCtrl);
    })(productDetail = app.productDetail || (app.productDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=productDetailCtrl.js.map