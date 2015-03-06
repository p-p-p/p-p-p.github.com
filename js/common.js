define([], function(){

	// base
	var PP = (function(undefined){
		var P = {
			
		}
		return P;

	})();

	// browser
	(function(P, undefined){

		P.isIE = function(ver){
			var b = document.createElement("b");
			b.innerHTML = '<!-- [if IE '+ver+']><i></i><![endif] -->';
			return b.getElementsByTagName('i').length === 1;
		}

	})(PP);


	return PP;
})