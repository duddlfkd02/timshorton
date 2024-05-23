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


    /*----메인 이미지 페이드인, 아웃 구간----*/
    setInterval(function () {
        $('.main').animate({ "opacity": "0" }, 2000, function () {
            $(".main").css({ "background-image": "url(image/images2/main3.jpeg)" })
        }).animate({ "opacity": "1" }, 3500).animate({ "opacity": "0" }, 3500, function () {
            $(".main").css({ "background-image": "url(image/images2/main.webp)" })
        }).animate({ "opacity": "1" }, 3500);
    })

    /*----햄버거메뉴---- */
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




    /*----애니메이션 스크롤  위치 구간----*/
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 0) {
            $(".content_wrap:nth-child(1)").addClass("animate__fadeInUp");
            $(".content_wrap:nth-child(1)").css({ "visibility": "visible" });
        }

        if ($(document).scrollTop() > 496) {
            $(".content_wrap:nth-child(2)").addClass("animate__fadeInUp");
            $(".content_wrap:nth-child(2)").css({ "visibility": "visible" });
        }

        if ($(document).scrollTop() > 1284) {
            $(".content_wrap:nth-child(4)").addClass("animate__fadeInUp");
            $(".content_wrap:nth-child(4)").css({ "visibility": "visible" });
        }

        if ($(document).scrollTop() > 1800) {
            $(".content_wrap:nth-child(5)").addClass("animate__fadeInUp");
            $(".content_wrap:nth-child(5)").css({ "visibility": "visible" });
        }


    })




});

