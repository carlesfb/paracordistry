angular
	.module('paracordistry.shop')
	.controller('ShopController', [ '$http', function($http) {
	    var vm = this;
	    vm.products = [];
		vm.tab = 1;

	    $http.get('products.json').success(function(data){
	        vm.products = data;
	    });

	    vm.isSet = function(checkTab) {
	        return vm.tab === checkTab;
	    };

	    vm.setTab = function(activeTab) {
	        vm.tab = activeTab;
	    };
	}]);
