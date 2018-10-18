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

        public getFoodRecipes(item?: any): Promise<any> {
            let queryItem: any = item ? `&q=${item}` : ``;
            let url = `https://www.food2fork.com/api/search?key=028543b3f0556def4525c524a12b483f${queryItem}&page=2`;
            return fetch(url)
                .then(response => response.json())
                .then(data => data.recipes);
        }

        public getMovies(titleOrId?: string): Promise<any> {
            let regex = /^tt[0-9]+$/;
            let searchQuery: any = regex.test(titleOrId) ? `i=${titleOrId}` : `s=${titleOrId}`;
            let url = `http://www.omdbapi.com/?${searchQuery}&page=2&apikey=6f387ed6`;
            return fetch(url)
                .then(response => response.json())
                .then(data => data.Search || data);
        }
    }

    angular
        .module('common.services')
        .service('apiService', ApiService);
}