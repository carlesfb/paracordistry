angular
.module('paracordistry')
.config(
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl	: 'views/home.html',
                controller 	: 'MainController',
                controllerAs: 'main'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
);