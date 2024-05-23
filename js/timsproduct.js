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
    /*----모바일 구간 햄버거 메뉴----*/
    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav').slideToggle();
    });

    $(window).resize(function () {
        let wWidth = $(window).width();

        if (wWidth > 699) {
            $("nav").removeAttr("style");
        }
    })
    /*----상품 더보기----*/
    $('.moremenu').hide();

    $('.morebt').click(function () {
        if ($('.moremenu').css("display") == "none") {
            $('.moremenu').show();
            $('.morebt').css({ "transform": "rotate(45deg)" });
        } else {
            $('.morebt').css({ "transform": "rotate(-90deg)" });
            $('.moremenu').hide();
        }

    });



})