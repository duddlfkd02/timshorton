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



    /*----애니메이션 구간----*/

    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 62) {
            $(".content1").addClass("animate__fadeInUp");
            $(".content1").css({ "visibility": "visible" });
        }

        if ($(document).scrollTop() > 637) {
            $(".content2 > div").addClass("animate__fadeInUp");
            $(".content2 > div").css({ "visibility": "visible" })
        }


    })

    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('.menu').slideToggle(500);

    });

    $(window).resize(function () {
        let wWidth = $(window).width();

        if (wWidth > 699) {
            $('.menu').removeAttr("style");
        }

    })



    // 스크롤 시 메뉴바 색상 추가
    $(window).scroll(function () {
        let scrollV = $(document).scrollTop();

        if (scrollV > 700) {
            $('.menu').css("background-color", "#c8102f"), $('header').css("background-color", "#ffffff");
        } else {
            $('.menu').css("background-color", "transparent"), $('header').css("background-color", "transparent");
        }
    })


});
