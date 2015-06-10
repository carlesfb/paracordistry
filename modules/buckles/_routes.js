angular
	.module('paracordistry.buckles')
	.config(
		function($routeProvider) {
		    $routeProvider
		        .when('/buckles', {
		            templateUrl : '/modules/buckles/views/buckles.html',
		            controller 	: 'BucklesController',
		            controllerAs: 'buckles'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);