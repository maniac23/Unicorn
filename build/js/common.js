$(document).ready(function() {

	$(".top-menu-toggle").click(function() {
		$(this).toggleClass("on");
		$(".top-menu-main").slideToggle();
		return false;
	});

	// owl carousel
	$('.owl-carousel').owlCarousel({
    loop:true,
    nav: false,
    margin:60,
    dots: true,
    animateIn: true,
    animateOut: true,
    items: 3,
    center: true,
    autoWidth: true,
    responsiveClass:true,
    responsive:{
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
     
        }
      }
});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.magnificPopup.close();
				$(".forms").trigger("reset");
			}, 1000);
		});
		return false;
	});


	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});