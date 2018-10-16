namespace app.productDetail {
    interface IProductDetailModel {
        title: string;
        product: app.product.IProduct;
    }

    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetailModel{
        title: string;
        product: app.product.IProduct;

        static $inject = ['$routeParams', 'dataAccessService'];
        constructor(
            private $routeParams: IProductParams,
            private dataAccessService: app.common.DataAccessService
        ) {
            console.log('PRODUCT Detail Controller .. . .');
            this.title = 'Product Detail';

            let productResource = dataAccessService.getProductResource();

            productResource.get(
                {productId: $routeParams.productId},
                (data: app.product.IProduct) => {
                this.product = data;
            });
        }
    }

    angular
        .module('productManagement')
        .controller('ProductDetailCtrl', ProductDetailCtrl);
}