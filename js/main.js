$(document).ready(function () {
    $('nav > ul > li').on('mouseover', function () {
        $('.submenu').stop().slideDown(200);
    })

    $('nav > ul > li').on('mouseout', function () {
        $('.submenu').stop().slideUp(200);
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
        $('nav').slideToggle(500);
    });

    $(window).resize(function () {
        let wWidth = $(window).width();

        if (wWidth > 699) {
            $("nav").removeAttr("style");
        }
    })




    $(window).scroll(function () {
        let scrollV = $(document).scrollTop();

        if (scrollV > 700) {
            $('nav').css("background-color", "#c8102f"), $('header').css("background-color", "#ffffff");
        }

        if (scrollV < 700) {
            $('nav').css("background-color", "transparent"), $('header').css("background-color", "transparent");
        }

    })


});
