angular.module('webapp', [
    'ngRoute',
    'tenphi.bem'
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

    }
);
