(function(){
    'user strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
		var tolist = this;
		tolist.items = ShoppingListCheckOffService.getItms();
		tolist.buy = function(itmIndex){
			ShoppingListCheckOffService.buy(itmIndex);};}
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var alredylist = this;
		alredylist.items = ShoppingListCheckOffService.getBought();}
	
	function ShoppingListCheckOffService(){
		var service = this;
		var pack = [
            {name: "cookies", quantity: 10},
            {name: "grapes", quantity: 6},
            {name: "biscuits", quantity: 2},
            {name: "mangoes", quantity: 8},
            {name: "breads", quantity: 9}];
        var alreadyBought = [];
        
        service.buy = function(itmIndex){
			var item = pack[itmIndex];
			alreadyBought.push(item);
			pack.splice(itmIndex, 1);};
        
        service.getItms = function(){
			return pack;}
		
		service.getBought = function(){
			return alreadyBought;}
	}    
})();
