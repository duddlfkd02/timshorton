$(document).ready(function(){

    $('nav > ul > li').on('mouseover', function(){
        $('.submenu').stop().slideDown(200);
    })

    $('nav > ul > li').on('mouseout', function(){
        $('.submenu').stop().slideUp(200);
    })

    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('nav').slideToggle();
    });

    $(window).resize(function(){
        let wWidth = $(window).width();

        if(wWidth > 699){
            $("nav").removeAttr("style");
        }
    })



    /*버튼 클릭 시 화살표 모양 나오기 */
    $('.btn > ul > li').click(function(){
        $('.btn > ul > li span').css({"display":"none"});
        $(this).find('span').css({"display":"block"});
        $('.btn > ul > li').css({"background-color":"#ffffff"});
        $(this).css({"background-color":"#FFC648"});
    })

    /*-----애니메이션 구간-----*/
    $(document).ready(function(){
        var height = $(document).scrollTop();
        console.log(height);
    })

    $(document).on("scroll",function(){
        if($(document).scrollTop() > 142){ 
            $(".content").addClass("animate__fadeInUp");
            $(".content").css({"visibility":"visible"});
        }
    })



});