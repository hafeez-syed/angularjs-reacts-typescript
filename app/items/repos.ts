import * as angular from 'angular';

namespace app.items {

    export class PopularRepos {
        public data: any = [];
        public name: string = 'hafeez';
        public gitHubRepos: any = [];
        public success: boolean = false;
        constructor(private $scope: any, private apiService: any, private $q: any) {
            this.activate().then((data: any) => {
                this.gitHubRepos = data;
                console.log('Popular repos controller .. . .');
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

    PopularRepos.$inject = ['$scope', 'apiService', '$q'];

    angular
        .module('ngReactApp')
        .controller('PopularReposCtrl', PopularRepos);
}
