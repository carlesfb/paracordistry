angular
	.module('paracordistry.size')
	.config(
		function($routeProvider) {
		    $routeProvider
		        .when('/size', {
		            templateUrl : '/modules/size/views/size.html',
		            controller 	: 'SizeController',
		            controllerAs: 'size'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);