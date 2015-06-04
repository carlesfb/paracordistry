angular
	.module('paracordistry.shop')
	.factory('productsService', function($resource){
		return $resource('http://localhost:8080/RESTfulExample/paracordistry/getProducts', {}, {
			query: {
				method: 'GET',
				params: {},
				isArray: true
			}
		})
	});