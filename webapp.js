angular.module('webapp', [
    'ngRoute',
    'tenphi.bem',
    'getflat.rest',
    'getflat.home',
    'gm.widgets.header',
    'gm.widgets.back-header'
])


.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'components/home-page/template.html',
            controller: 'homePageController',
            controllerAs: 'home'
        }).
        otherwise({ redirectTo: '/' });
})

.controller('webAppController',
    function ($rootScope) {

        var app = this;

        $rootScope.debug = true;

    }
);
