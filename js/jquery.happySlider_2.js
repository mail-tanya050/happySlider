/*avtor: Kovalchuk, data sozdaniya: 15.04.14, versiya 0.0.1*/

	/(function($) {
		jQuery.fn.happySlider = function(options) {
			// Зададим список свойств и укажем для них значения по умолчанию.
			// Если при вызове метода будут указаны пользовательские
			// варианты некоторых из них, то они автоматически перепишут
			// соответствующие значения по умолчанию
			var options = $.extend({
				prevBtn: 'unislider-prev',
				nextBtn: 'unislider-next',
				thmbWrp: 'unislider-thumbnails',
				pagerWrp: 'unislider-pager',
				quantity: 4,
				autoPlay: false, // true or false
				autoPlayDelay: 10, // delay in seconds
				controlls: false
			}, options);

			var make = function() {


				$(this).wrap('<div class="slider-wraper"/>');


				var gallery = $(this),
					item = gallery.find('li'),
					wrapper = gallery.parent('.slider-wraper');

				wrapper.css({
					position: 'relative'
				});
				gallery.css({
					position: 'absolute',
					/*left: -item.width(),*/
					top: 0
				});
				wrapper.append('<div class="prev-btn"/><div class="next-btn"/>');

				wrapper = wrapper;
				var nextBtn = wrapper.find('.next-btn'),
					prevBtn = wrapper.find('.prev-btn');



				var visibleItems = 4;

				slideItems('-', nextBtn, 'infinite');
				slideItems('+', prevBtn, 'infinite');

				function slideItems($direction, $btn, $type) {
					if ($type === 'infinite') {
						gallery.find('li').slice(-visibleItems).clone().prependTo(gallery); // добавить последний элемент списка в начало
						gallery.find('li').slice(0, visibleItems).clone().appendTo(gallery); // добавить первый элемент списка в конец
					}
					gallery.find('li').width(wrapper.width() / visibleItems); // Колличество элементов
					var galleryWidth = gallery.find('li').length * gallery.find('li').width(); // ширина слайдера
					$($btn).click(function(event) {
							event.preventDefault(); // отменить стандартное дейстие браузера
							if (!$(this).hasClass('inactive')) {
								$(this).addClass('inactive');
								gallery.animate({
										left: $direction + '=' + item.width() + 'px'
									}, 300,
									function() {
										$btn.removeClass('inactive');
										/*--------------------------------  simple ------------------------*/
										var leftDistance = $(this).css('left');
										/* remove class */
										if ($type == 'simple' && leftDistance !== '-' + galleryWidth + 'px') {
											$("[class*='next']").removeClass('disabled');
										}
										if ($type == 'simple' && leftDistance !== '0 px') {
												$("[class*='prev']").removeClass('disabled');
											}
											/* add class */
											if ($type == 'simple' && leftDistance == '-' + (galleryWidth - item.width()) + 'px') {
												$btn.addClass('disabled');
											} else if ($type == 'simple' && leftDistance == '0px') {
												$btn.addClass('disabled');
											}
											/*-------------------------------  infinite -----------------------*/
											if ($type === 'infinite') {
												$("[class*='prev'],[class*='next']").removeClass('disabled');
											}
											if ($type === 'infinite' && leftDistance == '-' + galleryWidth + 'px') {
												$(this).css('left', '0px');
											} else if ($type === 'infinite' && leftDistance >= '0px') {
												$(this).css('left', -(galleryWidth - gallery.find('li').width() * visibleItems));
											}
											console.log(galleryWidth);
										}
										);
								}
								return false;
							});
					}



				};

				return this.each(make);
			};
		})
	(jQuery);