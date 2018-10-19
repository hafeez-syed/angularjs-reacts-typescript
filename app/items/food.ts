import * as angular from 'angular';

namespace app.items {

    export class Food {
        public foodRecipes: any = [];

        constructor(private $scope: any, private apiService: any, private $q: any) {
            this.activate().then((data: any) => {
                this.foodRecipes = data;
                console.log('Food recipes controller .. . .');
            });
        }

        public activate() {
            let defer = this.$q.defer();
            this.apiService.getFoodRecipes()
                .then((responseData: any) => {
                    defer.resolve(responseData);
                });
            return defer.promise;
        }
    }

    Food.$inject = ['$scope', 'apiService', '$q'];

    angular
        .module('ngReactApp')
        .controller('FoodCtrl', Food);
}
