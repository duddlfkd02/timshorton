$(document).ready(function(){

    $('nav > ul > li').on('mouseover', function(){
        $('.submenu').stop().slideDown(200);
    })

    $('nav > ul > li').on('mouseout', function(){
        $('.submenu').stop().slideUp(200);
    })

    /*----햄버거메뉴---- */
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
    /* ----영양정보 더보기 ----*/
    $('.info > div > ul > li > span').click(function(){
        if($(this).next(".sub_info").css("display") == "none"){
            $(this).next(".sub_info").stop().slideDown(200);
            $(this).css({"transform":"rotate(-45deg)"});
        }else{
            $(this).next(".sub_info").stop().slideUp(200);
            $(this).css({"transform":"rotate(135deg)"});
        }
    });

    /* ----애니메이션----*/
    $(document).on("scroll",function(){
        if($(document).scrollTop() > 836){ 
            $(".content3").addClass("animate__fadeInUp");
            $(".content3").css({"visibility":"visible"});
        }

    })




})