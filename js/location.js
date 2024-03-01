$(document).ready(function(){
    $('nav > ul > li').on('mouseover', function(){
        $('.submenu').stop().slideDown(200);
    })

    $('nav > ul > li').on('mouseout', function(){
        $('.submenu').stop().slideUp(200);
    })

    /*----햄버거메뉴-----*/
    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('nav').slideToggle(500);
    });

    $(window).resize(function(){
        let wWidth = $(window).width();

        if(wWidth > 699){
            $("nav").removeAttr("style");
        }
    })
})