angular
	.module('paracordistry.shop')
	.config(
		function($routeProvider) {
		    $routeProvider
		        .when('/shop', {
		            templateUrl : '/modules/shop/views/shop.html',
		            controller 	: 'ShopController',
		            controllerAs: 'shop'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);