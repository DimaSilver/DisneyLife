$(function(){
    $('.types__content-slider').slick({
        prevArrow:'<button type="button" class="types__slider-arrows types__slider-prev"></button>',
        nextArrow:'<button type="button" class="types__slider-arrows types__slider-next"></button>',
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 1651,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 1601,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 1216,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 731,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true,
                    dotsClass: 'types__content-slider__dots'
                }
            },
            {
                breakpoint: 486,
                settings: {
                    destroy: true,
                    arrows: false
                }
            }
        ]
    });
    $('.tab').on('click', function (e) {
       e.preventDefault();
       $($(this).siblings()).removeClass('tab--active');
       $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');
       $(this).addClass('tab--active');
       $($(this).attr('href')).addClass('tabs-content--active');
       $('.types__content-slider').slick('setPosition');
    });
    $('.footer__list').on('click', '.footer__list-item',  function(){
        $(this).addClass('footer__list-item--active').siblings().removeClass('footer__list-item--active')
    });
    $('.menu__btn').on('click', function(){
        $(this).toggleClass('menu__btn--active');
        $('.menu__mobile').toggleClass('menu__mobile--active');
    });
});