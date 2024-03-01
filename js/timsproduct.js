$(document).ready(function(){
    /*----메뉴, 서브메뉴----*/
    $('nav > ul > li').on('mouseover', function(){
        $('.submenu').stop().slideDown(200);
    })

    $('nav > ul > li').on('mouseout', function(){
        $('.submenu').stop().slideUp(200);
    })
    /*----모바일 구간 햄버거 메뉴----*/
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
    /*----상품 더보기----*/
    $('.moremenu').hide();

    $('.morebt').click(function(){
        if($('.moremenu').css("display") == "none"){
                $('.moremenu').show();
                $('.morebt').css({"transform":"rotate(45deg)"});
        }else{
            $('.morebt').css({"transform":"rotate(-90deg)"});
            $('.moremenu').hide(); 
        }

        });
    
    

})