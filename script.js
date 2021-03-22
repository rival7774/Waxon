$(document).ready(function(){
	$('.slaider').slick({
		dots:true,
		adaptiveHeight:true,
		fade:true, //***замена слайдеров без листания другие слайды не видно****
		// appendDots:$('.cont__dots') перемещение кругляшков в другой див
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows: false
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.slaider1').slick({
		//dots:true,  //включение точек
		// adaptiveHeight:true,
		slidesToShow:3,
		// centerMode:true,
		// fade:true, //***замена слайдеров без листания другие слайды не видно****
		appendArrows:$('.cont__arrow'), //перемещение стрелок в другой див
		responsive:[
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});