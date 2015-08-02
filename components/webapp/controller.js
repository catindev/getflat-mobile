angular.module('webapp').controller('webAppController',
    function ($rootScope) {
        var app = this;
        $rootScope.debug = true;
        $rootScope.$on('$viewContentLoaded', function readyToTrick() {
          console.info('Content ready');
        });

    }
);
