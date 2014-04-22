//$(document).ready(

//$(function(){})  - заменяет $(document).ready(function() {})
//$('ТУТ НУЖНЫЙ ДИВ').НАЗВАНИЕ_ПЛАГИНА({опция1:true,опция2: false});
	
	$(function() {

		$('.secondSlider').happySlider({/*circular: true,thumbnails*/pager: true, pagerWrp: true,quantity: 1, thumbnailsQuantity: 6});

		$('.calc-wrapper').each(function() {
			var form = $(this),
				result = form.find('.result'),
				select1 = form.find('.select1');
			/*select2=form.find('.select2');
			select2.on('change',function(){
				console.log(select2.val());*/

			form.find('select').on('change', function() {
				console.log($(this).val());
				result.val($(this).val());
				var select1 = parseInt($('.select1').val()),
					select2 = parseInt($('.select2').val()),
					sum = form.find('.sum');
				sum.val(select1 + select2);
				result.val(select1 * select2);

			});
			form.find('.info').hide(0);
			form.find('.back').hide(1000);
			form.find('input[type="submit"]').on('click', function(e){
				e.preventDefault();
				if($('input').val()!=0){
					form.find('.info').show(1000);
					form.find('.back').show(1000);
					form.find('.calkulyator').hide(1000);
					$(this).removeClass('error');
					$('p.fio').html($('input.fio').val());
					$('p.email').html($('input.email').val());
					$('p.phone').html($('input.phone').val());
					$('p.sum').html($('input.sum').val());
					$('p.result').html($('input.result').val());
					}
					else{$(this).addClass('error');
					}

			});
			form.find('input[type="submit"].send').on('click', function(e){
				e.preventDefault();

					if($('input').val()!=0){
						alert('Спасибо');					
					}

			});
			form.find('input[type="submit"].back').on('click', function(e){
				e.preventDefault();
				form.find('.info').hide(1000);
				form.find('.back').hide(1000);
				form.find('.calkulyator').show(1000);
			})


		});
	$('a.open-modal').on('click', function(e){
		e.preventDefault;
		$($(this).attr('href')).show();
		console.log('open');
		});

	$('.clouse-form').on('click', function(e){
		e.preventDefault; /*отменить стандартные действия браузера*/
		$('#calc-info').hide();
		});

	
	


	$('.gallery li').on('click', function() {
		var eto = $(this), kartinka = eto.find('img'),
		kartinkaBig = $('.gallery').find('.main-img');
		$('.gallery li').removeClass('active');
		kartinkaBig.fadeOut/*исчезнуть('slow'*/(2000, function(){
		kartinkaBig.attr('src', kartinka.attr('src')).fadeIn(2000);/*появиться*/
		
			
		});
		eto.addClass('active');

	});


	



	/*.gallery li.find('img').on('click', function() {
				console.log($(this).attr());
				result.attr($(this).attr(src='', 'main-img'));
				var image1 = parseInt($('.image1').attr(src='', 'main-img')),
					/*select2 = parseInt($('.select2').val()),
					sum = form.find('.sum');
				sum.val(select1 + select2);
				result.attr(src='', 'main-img');    моя проба - неправильно*/

	});



/*setTimeout(function(){
	$('.curtain1').animate({'top':'-1000px', 'left':'-1000px'}, 1000, function(){/*alert('done');
	$('.content-wrapper')/*.animate({'opacity':'1'}, 1000).fadeTo('slow', 0.5);
	} );
	$('.curtain2').animate({'bottom':'-1000px', 'left':'2000px'}, 1000);
}, 1000);*/



/*alert("Hellow!");*/

/*$('.f-menu-2 ul li:last-child').hide(2000);*/
/*$('.footer:last-child').hide(2000);*/
/*$('div.f-menu-1 ul li:first-child').hide(2000);*/

/*$('.navigation ul').hide(2000);$('.navigation ul').show(2000);*/
/*$('.header').slideUp();*/
/*$('body').animate({
	left: "-900px"},1000)
	.animate({left: "0"},2000);

});*/

/*$('.btn').on('click', 
	function(){
		$('.navigation').addClass('a');/*добавляется класс navigation
	});

$('.open-recall').on('click', /*после нажатия на класс open-recall
	function(){
		$('.modal').show('slow'); 
	});*/