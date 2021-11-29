$(function() {
    //ヘッダー
    $(window).on('load scroll', function() {
        var value = $(this).scrollTop();
        if (value > 0 && value > $('header').outerHeight()) {
            $('.header').addClass('white');
            $('.humburger-btn').addClass('white');
            $('.header .site-title__logo').attr('src', './images/black-logo.png');
        } else {
            $('.header').removeClass('white');
            $('.humburger-btn').removeClass('white');
            $('.header .site-title__logo').attr('src', './images/logo.png');
        }
    });
});