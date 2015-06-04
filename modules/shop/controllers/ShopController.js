angular
	.module('paracordistry.shop')
	.controller('ShopController', [ '$http', 'productsService', function($http, productsService) {
	    var vm = this;
	    vm.products = [];
		
		$http.get('http://localhost:8080/RESTfulExample/paracordistry/getProducts')
			.success(function(data){
				vm.products = data;
	    	})
	    	.error(function(data, status, headers, config) {
      			console.log("AJAX failed to get data, status=" + status);
      		});
	}]);
