/// <reference types="angular-resource" />
declare namespace app.common {
    import IProduct = app.product.IProduct;
    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }
    interface IProductResource extends ng.resource.IResource<IProduct> {
    }
    class DataAccessService implements IDataAccessService {
        private $resource;
        static $inject: string[];
        constructor($resource: ng.resource.IResourceService);
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }
}
