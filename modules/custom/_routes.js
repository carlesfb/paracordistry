angular
	.module('paracordistry.custom')
	.config(
		function($routeProvider) {
		    $routeProvider
		        .when('/custom', {
		            templateUrl : '/modules/custom/views/custom.html',
		            controller 	: 'CustomController',
		            controllerAs: 'custom'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);