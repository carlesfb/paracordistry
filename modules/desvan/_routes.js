angular
	.module('paracordistry.desvan')
	.config(
		function($routeProvider) {
		    $routeProvider
		        .when('/desvan', {
		            templateUrl : '/modules/desvan/views/desvan.html',
		            controller 	: 'DesvanController',
		            controllerAs: 'desvan'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);