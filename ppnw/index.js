$(function () {
    $('.logo.top').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated zoomIn');
    });
    $('.logotitle').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass('animated zoomIn');
    });

    // $('.logo.bottom .main-house').addClass('animated zoomIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //     $(this).removeClass('animated zoomIn');
    // }).ready(function () {
    //     $('.logo.bottom .left-house').addClass('animated fadeInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //         $(this).removeClass('animated fadeInLeft');
    //     });
    //     $('.logo.bottom .right-house').addClass('animated fadeInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    //         $(this).removeClass('animated fadeInRight');
    //     });

    // });
    $('#myCarousel').carousel({ interval: 3000 });//每隔5秒自动轮播 


    // var barWidth = $("#navigationBar").width();
    // $(".nav-item").css({ "width": barWidth / 8 });

    // console.log($("#navigationBar"))
    // console.log($(".nav-link"))
    // for (i = 0; i < $(".nav-link").length; i++) {
    //     var padding = (barWidth / 8 - $(".nav-link")[i].width()) / 2;
    //     $(".nav-link")[i].css({ "padding-left": padding, "padding-right": padding })
    // }

});

$(".nav-item").click(function () {

    $(".nav-item.active").each(function () {
        $($(this).children('a').data("href")).hide();
        $(this).removeClass("active");
    });
    $(this).addClass("active");
    $($(this).children('a').data("href")).fadeIn();
 
});


