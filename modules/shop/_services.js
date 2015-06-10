angular
	.module('paracordistry.shop')
	.factory('productsService', function($resource){
		return $resource('http://localhost:8080/ParacordistryRestfulAPI/json/getProducts', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		})
	});