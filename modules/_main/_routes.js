angular
.module('paracordistry')
.config(
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl	: 'modules/_main/views/home.html',
                controller 	: 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);