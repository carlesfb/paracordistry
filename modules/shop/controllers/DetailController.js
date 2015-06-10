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

	}]);
