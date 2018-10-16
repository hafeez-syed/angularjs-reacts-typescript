declare namespace app.common {
    interface IApiService {
        getPopularLanguages(language: any): Promise<any>;
    }
    class ApiService implements IApiService {
        constructor();
        getPopularLanguages(language: any): Promise<any>;
    }
}
