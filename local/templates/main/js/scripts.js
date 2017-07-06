window.onload = function(){

    function isMobileWidth() {
        return $('#mobile-indicator').is(':visible');
    }
    function isMiddleWidth() {
        return $('#medium-indicator').is(':visible');
    }
    function isMaxWidth() {
        return $('#max-indicator').is(':visible');
    }

    $('.n-footer__bottom__upside').click(function(){
        var body=$("html, body");
        body.animate({scrollTop:0},300,'swing');
    });

    tabby.init();

    if ($('#page input').hasClass("phone-mask")) {
      $("#page .phone-mask").mask("+7 (999) 999-9999");
    };

    FastClick.attach(document.body);

    function stickyFooter() {
        $('.n-main').css('padding-bottom',$('.n-footer').outerHeight(true));
    }

    function stickyHeader() {
        var nav = 0;
        if (isMobileWidth()) {
            nav = 0;
        } else {
            nav = $('.n-nav').outerHeight(true);
        }
        $('.n-main').css('padding-top',$('.n-header').outerHeight(true) + nav);
    }

    stickyFooter();
    stickyHeader();

    $(window).on('resize',stickyFooter);
    $(window).on('resize',stickyHeader);

    $(window).scroll(function(){
        if ($(window).scrollTop()>=146) {
            $('.n-header').css('top','0');
        }
        else {
            $('.n-header').css('top','auto');
        }
        //console.log($(window).scrollTop());
    })

    $('input, textarea').placeholder();

    function placeholder() {

      $('input[type="text"],input[type="search"], textarea').focus(function(){
        if ($(this).prop('readonly')==false) {
           var plac = $(this).prop('placeholder');
           $(this).prop('placeholder',' ');

           $('input[type="text"],input[type="search"], textarea').blur(function(){
               $(this).prop('placeholder',plac);
           });
        }
      });

    };

    placeholder();

    function showMenu() {
        if (isMobileWidth()) {
            $('.n-nav').hide();
        } else {
            $('.n-nav').show();
        }
    }

    showMenu();

    function showLogs() {
        $('.n-main__col__catalog__logs__button').removeClass('n-main__col__catalog__logs__button--active');
        if(isMobileWidth()) {
            $('.n-main__col__catalog__logs').hide();
        }
        else {
            $('.n-main__col__catalog__logs').show();
        }
    }

    showLogs();

    $('.n-main__col__catalog__logs__button').click(function(){
        if ($('.n-main__col__catalog__logs').css('display')=='none') {
           $('.n-main__col__catalog__log').css('opacity','0');
           $('.n-main__col__catalog__logs').show('slow');
           setTimeout(function(){
               $('.n-main__col__catalog__log').animate({'opacity':1},1000);
           },400)
           $('.n-main__col__catalog__logs__button').addClass('n-main__col__catalog__logs__button--active');
        } else {
           $('.n-main__col__catalog__log').animate({'opacity':0},300);
           setTimeout(function(){
               $('.n-main__col__catalog__logs').hide('slow',function(){
                   $('.n-main__col__catalog__log').css('opacity','1');
               });
           },400);
           $('.n-main__col__catalog__logs__button').removeClass('n-main__col__catalog__logs__button--active');
        }
    });

    var popup = 0;

    $(function () {
        $('.n-header__icons--phone-pc').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'

        });
        $(document).on('click', '.pop-up-phone__header__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
			
        });
        $(document).on('click', '.pop-up-letter__close', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });
    });

    $(function () {
        $('.n-footer__write').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
            }
        });
    });

    $(function () {
        $('.n-header__icons--mes').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            closeMarkup: '',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
            }
        });
    });

    $(function () {
        $('.n-main__col__photos__item__container').find('a').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
            }
        });
    });
    $(function () {
        $('.popup-success').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,

            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            closeMarkup: '',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
            }
        });
    });
    $(function () {
        $('.n-main__sidebar__form__last').find('a').magnificPopup({
            type: 'inline',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',

            closeBtnInside: true,
            preloader: false,
            closeMarkup: '',
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                }
				
            }
        });
    });

    $('.n-main__col__album__pop-up').find('a.act').magnificPopup({
        //delegate: 'a.act',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300,
            opener: function(element) {
                return element.find('img');
            }
        },
        gallery: {
            enabled: true,
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        }
    });

    $(function () {
        $('.youtube').magnificPopup({
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom',
            closeMarkup: '',
            callbacks: {
                open: function() {
                    popup = $.magnificPopup.instance;
                },
				close: function() {
                    $(".video_box_frame iframe").removeAttr("src");
                }
            }
        });
    });

    $('.n-header__icons__menu').click(function(){
        $('.n-nav').toggle('fast');
        if ($(this).find('span').hasClass('n-header__icons__menu--active')) {
            $(this).find('span').removeClass('n-header__icons__menu--active');
        } else {
            $(this).find('span').addClass('n-header__icons__menu--active');
        }
    })

    if (('.n-main__slider-h__container').length) {

        var sliderH = new Swiper('.n-main__slider-h__container', {
            speed: 400,
            spaceBetween: 100,
            autoplay: 3000,
            effect: 'fade',
            fade: {
               crossFade: true
            },
            loop: true,
            autoplayDisableOnInteraction: false,
        });
    }

    $('.n-main__col__form').hover(function(){
        if (!isMaxWidth()) {
            $(this).stop().animate({'margin-top':'52px'});
            $(this).find('.n-main__col__form__inside').stop().animate({'top':'0px','height':'480px'});
            $(this).find('.n-main__col__form__abs').stop().animate({'top':'22px'},function(){
                $(this).css('z-index',5);
            });
        }
    },function(){
        if (!isMaxWidth()) {
            $(this).stop().animate({'margin-top':'-42px'});
            $(this).find('.n-main__col__form__abs').css('z-index',2).stop().animate({'top':'322px'});
            $(this).find('.n-main__col__form__inside').stop().animate({'top':'300px','height':'180px'});
        }
    });

    var sliderM;

    function createSliderM() {

        if (('.n-main__slider-m__container').length) {

            sliderM = new Swiper('.n-main__slider-m__container', {
                speed: 400,
                spaceBetween: 0,
                loop: true,
                slidesPerView: 6,
                nextButton: '.n-main__slider-m__arr-r',
                prevButton: '.n-main__slider-m__arr-l',
                onDestroy: function() {
                    sliderM = 0;
                }

            });

            function resizeSlider() {
                if (sliderM && $('.n-main__slider-m__container').length) {
                    if ($(document).width()<=1060) {
                        sliderM.params.slidesPerView = 2;
                        sliderM.onResize();
                    } else if ($(document).width()<=1300) {
                        sliderM.params.slidesPerView = 3;
                        sliderM.onResize();
                    } else {
                        sliderM.params.slidesPerView = 4;
                        sliderM.onResize();
                    }
                }
            }

            $(window).on('resize',resizeSlider);
            resizeSlider();
        }
    }

    function checkSlider() {
       if (isMobileWidth() && sliderM && $('.n-main__slider-m__container').length) {
           sliderM.destroy(true, true);
           $('.swiper-wrapper').removeAttr('style');
           $('.swiper-slide').removeAttr('style');
           $('.swiper-wrapper').addClass('swiper-wrapper--old');
           $('.swiper-slide').addClass('swiper-slide--old');
       }
       if (!isMobileWidth() && !sliderM) {
           $('.swiper-wrapper').removeClass('swiper-wrapper--old');
           $('.swiper-slide').removeClass('swiper-slide--old');
           createSliderM();
       }
    }

    createSliderM();
    checkSlider();

    if (isMaxWidth()) {
        $('.n-main__col__form').find('.n-main__col__form__inside').css({'top':'0px','height':'480px'});
        $('.n-main__col__form').find('.n-main__col__form__abs').css({'top':'22px','z-index':5});
        $('.n-main__col__form').css('margin-top','52px');
    }

    $(window).resize(function(){
        checkSlider();
        showMenu();
        showLogs();

        if (isMaxWidth()) {
            $('.n-main__col__form').find('.n-main__col__form__inside').css({'top':'0px','height':'480px'});
            $('.n-main__col__form').find('.n-main__col__form__abs').css({'top':'22px','z-index':5});
            $('.n-main__col__form').css('margin-top','52px');
        }

        if (isMobileWidth() && popup) {
            popup.close();
        }

        if (isMobileWidth()) {
            $('.n-main__col__form').css('margin-top','15px');
        }
    })

    //!check-field//

    $(function() {
     $('.rf').each(function(){
     // Объявляем переменные (форма и кнопка отправки)
      var form = $(this),
      btn = form.find('.disabled');

     // Добавляем каждому проверяемому полю, указание что поле пустое
      form.find('.rfield').addClass('empty_field');

     // Функция проверки полей формы
      function checkInput(){
         form.find('.rfield').each(function(){
             if($(this).val() != ''){
         // Если поле не пустое удаляем класс-указание
                $(this).removeClass('empty_field');
             } else {
         // Если поле пустое добавляем класс-указание
                $(this).addClass('empty_field');
             }
         });
       }

      // Функция подсветки незаполненных полей
      function lightEmpty(){
          var img = form.find('.empty_field').css('background-image');
        form.find('.empty_field').css({'border':'1px solid rgba(247,43,10,0.6)'});
        form.find('.empty_field').next().show();

      // Через полсекунды удаляем подсветку
        setTimeout(function(){
           form.find('.empty_field').removeAttr('style');
           $('.field-war').hide();
        },500);
       }

      // Проверка в режиме реального времени
        setInterval(function(){
      // Запускаем функцию проверки полей на заполненность
           checkInput();
      // Считаем к-во незаполненных полей
           var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
           if(sizeEmpty > 0){
              if(btn.hasClass('disabled')){
                  return false
              } else {
                btn.addClass('disabled')
               }
            } else {
               btn.removeClass('disabled')
              }
         },500);

      // Событие клика по кнопке отправить
         btn.click(function(){
             //e.preventDefault();
           if($(this).hasClass('disabled')){
      // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
              lightEmpty();
              return false
           } else {
     // Все хорошо, все заполнено, отправляем форму
               var data = form.serialize();
               $.ajax({
                   url: "/queries.php",
                   data: data,
                   type: "POST",
                   success: function(msg) {
                       switch (msg){
                           case 'ok':
                               form.find('.rfield').empty(); // После отправки должна очистить поля
                               // Эта функция должна открывать всплывающее сообщение об успехе
                               $('#request-message').click();
                               break;
                           case 'review-ok':
                               form.find('.rfield').empty(); // После отправки должна очистить поля
                               // Эта функция должна открывать всплывающее сообщение об успехе
                               $('#result-review').click();
                               break;
                           default:
                               $('popup-result').children('.pop-up-thanks__header span').html('Ошибка!');
                               $('#result-message').html(msg);
                               $('#request-message').click();
                               break;
                       }
                   }
               });
             }
         });
        });
      });

//!/check-field//

  $('.img').magnificPopup({type:'image', preload: [0,2]});
  
  	if($('.catalog_detail').length>0)
	{
		$('.catalog_detail img').each(function(i, elem) {
			var _element = $(elem);
			if(_element .parent("a").attr("class") != "img")
			{
				var src = _element.attr("src");
				src_val = src;
				src = getParam(src, "src");

				var alt = _element.attr("alt");
				alt = getParam(alt, "alt");
				
				var clas = _element.attr("class");
				clas = getParam(clas, "class");
				
				var style = _element.attr("style");
				style = getParam(style, "style");
				
				var title = _element.attr("title");
				title = getParam(title, "title");
								
				html = '<a href="'+src_val+'" class="img"><img '+src+' '+alt+' '+clas+' '+style+' '+title+' /></a>';
				var _parent = _element .parent();
				_element.after(html);
				_element.remove();
				//_parent.html(html);
				//console.log(_element .parent().attr("class"));
				
				$('.img').magnificPopup({type:'image', preload: [0,2]});
			}
		})
	}

};

function getParam(param, name)
{
	if(param == undefined)
		return "";
	else
		return ' '+name+'="'+param+'"';
}
