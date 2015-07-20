angular.module('getflat.rest', [ ]).

factory('getflatRest',
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
                data: options.params || {},
                headers: options.headers || {}
                //cache: true
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
            log('info', 'rest: request ' + options.id );
            $http(options)
                .success(function (data, status, headers, config) {
                    log('info', 'rest: success for ' + options.id );
                    return _response( options.id, 'success', data, status, headers, config );
                })
                .error(function (data, status, headers, config) {
                    log('error', 'rest: error for ' + options.id );
                    return _response( options.id, 'error', data, status, headers, config );
                });
        });

        return { };
    }
)
.run([ '$rootScope', 'getflatRest', function($rootScope, getflatRest){
    console.info('rest working nice :]');
}]);
