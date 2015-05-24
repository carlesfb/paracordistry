angular
    .module('paracordistry.about')
    .config(
        function($routeProvider) {
            $routeProvider
                .when('/about', {
                    templateUrl : '/modules/about/views/about.html',
                    controller  : 'AboutController',
                    controllerAs: 'about'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }
    );