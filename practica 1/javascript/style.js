$(document).ready(function(){
    var altura = $('.navbar').offset().top;
    $(window).on('scroll',function(){
        if ( $(window).scrollTop() > altura ){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    });
});