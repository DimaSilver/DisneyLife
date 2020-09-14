$(function(){
    $('.types__content-slider').slick({
        prevArrow:'<button type="button" class="types__slider-arrows types__slider-prev"></button>',
        nextArrow:'<button type="button" class="types__slider-arrows types__slider-next"></button>',
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: false
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
});