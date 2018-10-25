import * as angular from 'angular';

namespace app.ngHost {
    angular.module('ngHost', []);
    require('./items/reactComponent.service');
    require('./items/oneNgHost');
}