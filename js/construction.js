$(function () {
    $('.main_slider').slick({
        pauseOnHover: false,
        arrows: false,
        dots: true,
        autoplay: true,
    });

    $('.main_visual1_angle i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev');
    });

    $('.main_visual1_angle i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext');
    });

    $('.main_visual1_ps i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPlay');
    });

    $('.main_visual1_ps i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickPause');
    });

})