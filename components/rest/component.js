angular.module('getflat.rest',[ ])
.factory('getflatRest',
    function ($rootScope, $http) {

        function log(type, content){
            if ('debug' in $rootScope) console[type](content);
        }

        function _defaults(options) {
            var uri = options.uri || options.url || '';
            return {
                id: options.id || 'app',
                method: options.method || 'GET',
                url: '/rest/' + uri,
                params: options.params || {},
                headers: options.headers || {}
            };
        };

        function _response(id, type, data, status, headers, config) {
            $rootScope.$emit('rest.response:' + id + ':' + type, {
                data: data,
                status: status,
                headers: headers,
                config: config
            });
        };

        $rootScope.$on("rest.request", function(event, options) {
            options = _defaults(options);
            log('info', 'getflat.rest: request from ' + options.module );
            $http(options)
                .success(function (data, status, headers, config) {
                    log('info', 'getflat.rest: success for ' + options.module );
                    return _response( options.module, 'success', data, status, headers, config );
                })
                .error(function (data, status, headers, config) {
                    log('error', 'getflat.rest: error for ' + options.module );
                    return _response( options.module, 'error', data, status, headers, config );
                });
        });

        return { };
    }
)
.run([ '$rootScope', 'getflatRest', function($rootScope, egovRest){
    console.info('getflat.rest is working');
}]);
