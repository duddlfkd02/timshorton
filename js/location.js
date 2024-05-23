$(document).ready(function () {
    $('.menu > .mainmenu > .mainmenu_inner').on('mouseover', function () {
        $('.submenu').stop().slideDown(200);

        if ($(window).width() < 1024) {
            $('.submenu, .submenu_inner').css({ 'display': 'none' });
        }
    })

    $('.menu > .mainmenu > .mainmenu_inner').on('mouseout', function () {
        $('.submenu').stop().slideUp(200);

        if ($(window).width() > 1023) {
            $('.submenu, .submenu_inner').css({ 'display': 'block' });
        }
    })

    /*----햄버거메뉴-----*/
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav').slideToggle(500);
    });

    $(window).resize(function () {
        let wWidth = $(window).width();

        if (wWidth > 699) {
            $("nav").removeAttr("style");
        }
    })
})