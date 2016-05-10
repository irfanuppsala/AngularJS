angular.module('app', []).controller('namesCtrl', function($scope) {

		$scope.names = [
		{name:'Jani',country:'Norway'}, 
		{name:'Carl',country:'Sweden'}, 
		{name:'Margareth',country:'England'}, 
		{name:'Hege',country:'Norway'}, 
		{name:'Joe',country:'Denmark'}, 
		{name:'Gustav',country:'Sweden'}, 
		{name:'Birgit',country:'Denmark'}, 
		{name:'Mary',country:'England'}, 
		{name:'Kai',country:'Norway'} 
		]; 
	$scope.orderByMe = function(x) { 
		/*function that is called when you click to sort*/ 
		$scope.myOrderBy = x; 
	}
});