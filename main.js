// Creación del módulo
var paracordistry = angular.module('paracordistry', ['ngRoute']);

// Configuración de las rutas
paracordistry.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl	: 'pages/home.html',
            controller 	: 'mainController',
            controllerAs: 'main'
        })
        .when('/quien', {
            templateUrl : 'pages/quien.html',
            controller 	: 'quienController',
            controllerAs: 'quien'
        })
        .when('/desvan', {
            templateUrl : 'pages/desvan.html',
            controller 	: 'desvanController',
            controllerAs: 'desvan'
        })
        .when('/tienda', {
            templateUrl : 'pages/tienda.html',
            controller 	: 'StoreController',
            controllerAs: 'tienda'
        })
        .otherwise({
            redirectTo: '/'
        });
});

// Controllers
paracordistry.controller('mainController', function() {
    var vm= this;
    vm.message = 'Hola, Mundo del Paracord!';
});

paracordistry.controller('quienController', function() {
});

paracordistry.controller('desvanController', function() {
});

paracordistry.controller('StoreController', [ '$http', function($http) {
    var vm= this;
    vm.products = [];

    $http.get('products.json').success(function(data){
        vm.products = data;
    });
}]);

paracordistry.controller('PanelController', function() {
    this.tab = 1;

    this.isSet = function(checkTab) {
        return this.tab === checkTab;
    };

    this.setTab = function(activeTab) {
        this.tab = activeTab;
    };
});
