require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery',
		onepage: '../js/jquery.onepage-scroll',
		common: '../js/common'
	},
	shim: {
		onepage: ['jquery']
	}
})

require( ['jquery', 'onepage', 'common'], function(jquery, onepage, P){


	$(function(){

		if(!(P.isIE(9) || P.isIE(8) || P.isIE(7)) ){
			$(".main").onepage_scroll({
				sectionContainer: ".section",
				easing: "ease",
				animationTime: 1000,
				pagination: true,
				beforeMove: function(index){

				},
				afterMove: function(index){

				},
				loop: false,
				keyboard: true,
				responsiveFallback: false,
				direction: "vertical"
			})
		}

		// menu 
		$("#menu-panel-button").click(function(){
			$("#menu-panel").toggle();
		})

		// panel click 
		$("#menu-panel ul li a").click(function(){
			var index = $("#menu-panel ul li a").index($(this));
			$(".main").moveTo(index+1);
		})




	})

})

