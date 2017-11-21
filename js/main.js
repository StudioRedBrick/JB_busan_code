//BLOG START
$(function(){
        
    //alert("hello");
    
    //blog contents_2 mouseover start
    $('.blog_contents_2').on('mouseover',function(){
        //실행
        $('.blog_contents_2_inner').css({
            'display':'block'
        });
    });
    //blog contents_2 mouseover end
    
    
    //blog contents_2 mouseout start
    $('.blog_contents_2').on('mouseout',function(){
        //실행
        $('.blog_contents_2_inner').css({
            'display':'none'
        });
    });
    //blog contents_2 mouseout end
    
    //---------------------------------------------------------------
    
    //blog contents_3 mouseover start
    $('.blog_contents_3').on('mouseover',function(){
        //실행
        $('.blog_contents_3_inner').css({
            'display':'block'
        });
    });
    //blog contents_3 mouseover end
    
    
    //blog contents_3 mouseout start
    $('.blog_contents_3').on('mouseout',function(){
        //실행
        $('.blog_contents_3_inner').css({
            'display':'none'
        });
    });
    //blog contents_3 mouseout end
    
    //---------------------------------------------------------------
    
    //blog contents_4 mouseover start
    $('.blog_contents_4').on('mouseover',function(){
        //실행
        $('.blog_contents_4_inner').css({
            'display':'block'
        });
    });
    //blog contents_4 mouseover end
    
    
    //blog contents_4 mouseout start
    $('.blog_contents_4').on('mouseout',function(){
        //실행
        $('.blog_contents_4_inner').css({
            'display':'none'
        });
    });
    //blog contents_4 mouseout end
    
    //---------------------------------------------------------------
    
    //blog contents_5 mouseover start
    $('.blog_contents_5').on('mouseover',function(){
        //실행
        $('.blog_contents_5_inner').css({
            'display':'block'
        });
    });
    //blog contents_5 mouseover end
    
    
    //blog contents_5 mouseout start
    $('.blog_contents_5').on('mouseout',function(){
        //실행
        $('.blog_contents_5_inner').css({
            'display':'none'
        });
    });
    //blog contents_5 mouseout end
    
    //---------------------------------------------------------------
    
    //blog contents_6 mouseover start
    $('.blog_contents_6').on('mouseover',function(){
        //실행
        $('.blog_contents_6_inner').css({
            'display':'block'
        });
    });
    //blog contents_6 mouseover end
    
    
    //blog contents_6 mouseout start
    $('.blog_contents_6').on('mouseout',function(){
        //실행
        $('.blog_contents_6_inner').css({
            'display':'none'
        });
    });
    //blog contents_6 mouseout end
    
    //---------------------------------------------------------------
    
});//BLOG END

//MENU START
$(function(){
        
    //alert("hello");
    
    $(".menu1").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5").offset().top},
        'slow');
    }); // menu1 JB소식
    
    $(".menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").offset().top},
        'slow');
    }); // menu2 컨설팅
    
    $(".menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".box8").offset().top},
        'slow');
    }); // menu3 수업안내
    
    $(".menu4").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof_wrap").offset().top},
        'slow');
    }); // menu4 교사안내
    
    $(".menu5").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top},
        'slow');
    }); // menu5 위치보기
    
    $(".menu6").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").offset().top},
        'slow');
    }); // menu6 몬의하기
    
});//MENU END