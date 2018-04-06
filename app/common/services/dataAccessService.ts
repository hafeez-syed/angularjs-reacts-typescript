/**
 * Created by Hafeez Syed on 25/3/18.
 */

namespace app.common {
    import IProduct = app.domain.IProduct;

    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>
    }

    interface IProductResource extends ng.resource.IResource<IProduct> {

    }

    export class DataAccessService implements IDataAccessService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {

        }

        getProductResource(): ng.resource.IResourceClass<IProductResource> {
            return this.$resource('/api/products/:productId');
        }
    }

    angular
        .module('common.services')
        .service('dataAccessService', DataAccessService)
}