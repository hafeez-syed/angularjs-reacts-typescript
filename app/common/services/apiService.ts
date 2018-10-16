//import * as angular from 'angular';

namespace app.common {
    export interface IApiService {
        getPopularLanguages(language: any): Promise<any>
    }

    export class ApiService implements IApiService {

        constructor() {
        }

        public getPopularLanguages(language: any): Promise<any> {
            let url = `https://api.github.com/search/repositories?q=starts:%3E1+language:${language}&sort=stars&order=desc&type=Repositories`;
            return fetch(url)
                .then(response => response.json())
                .then(data => data.items);
        }
    }

    angular
        .module('common.services')
        .service('apiService', ApiService);
}