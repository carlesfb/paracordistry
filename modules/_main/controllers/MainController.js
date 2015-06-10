angular
	.module('paracordistry')
	.controller('MainController', function() {
	    var vm = this;
	    
		vm.tab = 1;
	    vm.isSet = function(checkTab) {
	        return vm.tab === checkTab;
	    };

	    vm.setTab = function(activeTab) {
	        vm.tab = activeTab;
	    };

	});