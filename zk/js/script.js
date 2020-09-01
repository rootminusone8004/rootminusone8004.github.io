(function($){
	$(document).ready(function(){
	$(".navba").hide();
	$(function(){
		$(window).scroll(function(){
			if($(this).scrollTop() > 400){
				$('.navba').fadeIn();
			}else{
				$('.navba').fadeOut();}}
		);
	});
});
}(jQuery));
