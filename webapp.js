angular.module('webapp', [
    'ngRoute',
    'tenphi.bem',
    'getflat.rest'
])


.config(function ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'components/home-page/template.html',
            controller: 'homePageController'
        }).
        otherwise({ redirectTo: '/' });
})

.controller('webAppController',
    function ($rootScope) {

        var app = this;

        $rootScope.debug = true;

    }
);
