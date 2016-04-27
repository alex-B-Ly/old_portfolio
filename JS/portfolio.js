//SITE DETAILS TOGGLE

$(document).ready(function(){
	$(".site-detail-toggle").on("click", function(){
		if(window.innerWidth > 640){
			if($(this).prev().is(":visible")){
			$(this).prev().fadeOut();
			$(this).siblings().prev().toggleClass("img-hide");
			}else{
				$(this).prev().slideDown();
				$(this).siblings().prev().toggleClass("img-hide");
			}
		}else{
			if($(this).prev().is(":visible")){
			$(this).prev().slideUp();
			}else{
				$(this).prev().slideDown();
			}
		}
	});
});

// RESPONSIVE MENU

$(document).ready(function(){
	$(".resp-menu-icon").on("click", function(){
		if($(this).prev().is(":visible")){
			$(this).prev().slideUp();
		}else{
			$(this).prev().slideDown();
		}
	})
});