var imgs = 2;
var now = 0;

jQuery(document).ready(function(){
/*
    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
        $('.imgslide a:first-child').fadeOut()
        .next('a').fadeIn().end().fadeOut()
        .next('a').fadeIn().end()
        .appendTo('.imgslide');
    },4000); */

    start();


});


function start(){
    $(".imgslide>a").eq(0).siblings().animate({"margin-left":"-1920px"});

    setInterval(function(){slide();},4000);}

function slide(){
    now=now==imgs?0:now+=1;
    $(".imgslide>a").eq(now-1).animate({"margin-left":"-1920px"});
    $(".imgslide>a").eq(now).animate({"margin-left":"0px"});
}


