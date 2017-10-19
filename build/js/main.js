var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPod|iPad/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

$(document).ready(function(){
	if (isMobile.any()) {
		$('.product').click(function(){
			$(this).toggleClass('active').siblings('.product').removeClass('active');
			$(this).find(".alt").slideToggle(0);
			$(this).siblings('.product').find(".alt").slideUp(0);
			console.log ('click');
		})
	} else {
		$('.product').hover(function(){
			$('.alt').stop();
			$(this).toggleClass('active');
			$(this).find(".alt").slideToggle(400);
		}, function(){
			$(this).toggleClass('active');
			$(this).find(".alt").slideToggle(0);
		})
	}
})