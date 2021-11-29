$(function() {
    //タブ
    $('.tab__item').click(function() {
        var index = $('.tab__item').index(this);
        $('.tab .tab__item').removeClass('active');
        $(this).addClass('active');
        $('.tab__area ul').removeClass('show').eq(index).addClass('show');
    });

    //flatpickr
    flatpickr("#flatpickr", {
        minDate:"today",
        mode: "range",
    });

    //ハンバーガーメニュー用
    $('.humburger-btn').on('click',function(){
      $('.humburger-btn').toggleClass('cross');
      $('.humburger-nav-wrapper').fadeToggle(500);
    });
  
    $('.humburger-nav_item a').on('click',function(){
      $('.humburger-nav-wrapper').fadeOut(100);
      $('.humburger-btn').removeClass('cross');
    });
});