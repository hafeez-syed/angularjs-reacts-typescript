/// <reference types="angular-resource" />
declare namespace app.common {
    import IProduct = app.product.IProduct;
    interface IApiService {
        getPopularLanguages(): ng.resource.IResourceClass<IProductResource>;
    }
    interface IProductResource extends ng.resource.IResource<IProduct> {
    }
    class ApiService implements IApiService {
        private $resource;
        static $inject: string[];
        constructor($resource: ng.resource.IResourceService);
        getPopularLanguages(): ng.resource.IResourceClass<IProductResource>;
    }
}
