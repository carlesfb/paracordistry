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
		        .when('/shop/detail/:productId', {
		        	templateUrl : '/modules/shop/views/detail.html',
		        	controller 	: 'DetailController',
		        	controllerAs: 'detail'
		        })
		        .otherwise({
		            redirectTo: '/'
	        	});
		}
	);