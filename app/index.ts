import * as angular from 'angular';
import 'angular-mocks';
import 'angular-resource';
import 'angular-route';
//import 'react-components-2';

//import './common/services/common.services';
//import './common/services/apiService';
//import './items/reactComponent.service';
//import './items/oneNgHost';

namespace app.ngHost {
    angular.module('ngHost', []);
    require('./items/reactComponent.service');
    require('./items/oneNgHost');
}