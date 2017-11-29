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
        scrollTop: $(".box5").position().top},
        'slow');
    }); // menu1 JB소식
    
    $(".menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").position().top},
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
    }); // menu6 문의하기
    
});//MENU END


$(function(){
        
    //alert("hello");
    
    $(".jb_logo_white").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5")},
        'slow');
    }); // menu1 JB소식
    
    
});//MENU END

//FIXED MENU START
$(function(){
        
    //alert("hello");

    var $window = $(window),
        $header = $('.box3'),
        
        //duplicate header, $header.ctrl+A.ctrl+C
        $headerClone = $header.contents().clone(),
        
        //복제할 header를 담을 html 박스 만들기
        $headerCloneContainer = $('<div class="box3-clone"></div>');
        
        $headerCloneContainer.append($headerClone);
        //div안에 headerClone의 내용을 담았으니, html의 body안에 넣어야한다
    
        $headerCloneContainer.appendTo('body');
    
    //clone한 header가 나와야하는 지점(위치) 지정
    //header가 브라우저 상단에서 떨어진거리 + header의 높이
    var $headerSum = $header.offset().top + $header.outerHeight();
    
        $window.on('scroll',function(){
            //(브라우저가 스크롤된 거리가 > $headerSum){clone-header appear};
            if($window.scrollTop()>$headerSum){
                $headerCloneContainer.addClass('visible');
            }
            
            //(브라우저가 스크롤된 거리가 < $headerSum){clone-header disappear};
            else{
                $headerCloneContainer.removeClass('visible');
            };
        });
    
});//FIXED MENU END

//CLONE MENU START
$(function(){
        
    //alert("hello");
    
    $(".box3-clone .menu1").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5").position().top},
        'slow');
    }); // menu1 JB소식
    
    $(".box3-clone .menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").position().top},
        'slow');
    }); // menu2 컨설팅
    
    $(".box3-clone .menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".box8").offset().top},
        'slow');
    }); // menu3 수업안내
    
    $(".box3-clone .menu4").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof_wrap").offset().top},
        'slow');
    }); // menu4 교사안내
    
    $(".box3-clone .menu5").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top},
        'slow');
    }); // menu5 위치보기
    
    $(".box3-clone .menu6").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").offset().top},
        'slow');
    }); // menu6 문의하기
    
});//CLONE MENU END

//문의하기1 시작
$(function(){
    
    $(".video_container .button1").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").position().top},
        'slow');
    }); // menu1 JB소식
    
});

//문의하기2 시작
$(function(){
    
    $(".ask_mid_wrap .ask_mid_button").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").position().top},
        'slow');
    }); // menu1 JB소식
    
});
