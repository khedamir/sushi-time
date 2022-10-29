$('.menu-btn').on('click', function(e){
    e.preventDefault;
    $('.menu-btn').toggleClass('menu-btn_active');
    // $('.backdrop').toggleClass('backdrop_active');
    // $('.modal').toggleClass('modal_active');
})


$('.item-menu').on('click', function(e){
    e.preventDefault;
    $('.menu').toggleClass('menu_active');
})


var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
});