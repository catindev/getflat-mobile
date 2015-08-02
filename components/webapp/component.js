angular.module('webapp', [
    'tenphi.bem',
    'getflat.rest',
    'getflat.flat-page',
    'getflat.new-ad',
    'getflat.home'
])

.config(function ($locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});
