angular
	.module('paracordistry.shop')
	.controller('DetailController', [ '$http','$routeParams', function($http, $routeParams) {
	    var vm = this;
	    
		vm.tab = 1;
	    vm.isSet = function(checkTab) {
	        return vm.tab === checkTab;
	    };

	    vm.setTab = function(activeTab) {
	        vm.tab = activeTab;
	    };

	    $http.get('http://localhost:8080/paracordistryAPI/products/' + $routeParams.productId)
			.success(function(data){
				console.log(data);
				vm.product = data;
	    	})
	    	.error(function(data, status, headers, config) {
      			console.log("AJAX failed to get data, status=" + status);
      		});

	}]);
