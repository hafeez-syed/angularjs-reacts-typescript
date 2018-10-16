import * as angular from 'angular';
import {Avatar} from  '../../react-components/'

namespace app.items {

    export class Language {
        public data: any = [];
        public name: string = 'hafeez';
        public gitHubData: any = [];
        public success: boolean = false;
        constructor(private $scope: any, private apiService: any, private $q: any) {
            this.activate().then((data: any) => {
                this.gitHubData = data;
                console.log('Language Controller .. . .');
            });
        }

        public activate() {
            let defer = this.$q.defer();
            this.apiService.getPopularLanguages('javascript')
                .then((responseData: any) => {
                    defer.resolve(responseData);
                });
            return defer.promise;
        }
    }

    Language.$inject = ['$scope', 'apiService', '$q'];

    angular
        .module('ngReactApp')
        .controller('LanguageCtrl', Language);
}
