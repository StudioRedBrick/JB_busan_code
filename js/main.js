

//VIDEO PLAY START
$(function(){
        
    document.getElementById('vid_busan').play();
    
});//VIDEO PLAY END


//MENU START
$(function(){
        
    //alert("hello");
    
    if(matchMedia){
        const mq = window.matchMedia("(max-width: 414px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    
    function WidthChange(mq){
    
    if(mq.matches){
        
    $(".menu1").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5").position().top - 80},
        'slow');
    }); // menu1 JB소식
    
    $(".menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").position().top - 80},
        'slow');
    }); // menu2 컨설팅
    
    $(".menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".box8").offset().top - 80},
        'slow');
    }); // menu3 수업안내
    
    $(".menu4").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof_wrap").offset().top - 80},
        'slow');
    }); // menu4 교사안내
    
    $(".menu5").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top - 80},
        'slow');
    }); // menu5 위치보기
    
    $(".menu6").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").offset().top - 80},
        'slow');
    }); // menu6 문의하기
        
    }else{
        
    $(".menu1").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5").position().top - 40},
        'slow');
    }); // menu1 JB소식
    
    $(".menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").position().top - 39},
        'slow');
    }); // menu2 컨설팅
    
    $(".menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".box8").offset().top - 40},
        'slow');
    }); // menu3 수업안내
    
    $(".menu4").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof_wrap").offset().top - 40},
        'slow');
    }); // menu4 교사안내
    
    $(".menu5").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top - 40},
        'slow');
    }); // menu5 위치보기
    
    $(".menu6").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").offset().top - 40},
        'slow');
    }); // menu6 문의하기
        
    } //else END
    } // function widthchage END
    
});//MENU END


$(function(){
        
    //alert("hello");
    
    $(".jb_logo_white").click(function() {
    $('html,body').animate({
        scrollTop: $(".box5")},
        'slow');
    }); // menu1 JB소식
    
    
});//MENU END 이거 뭔지 모르겠음..?

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
        scrollTop: $(".box5").position().top - 40},
        'slow');
    }); // menu1 JB소식
    
    $(".box3-clone .menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".box6").position().top - 39},
        'slow');
    }); // menu2 컨설팅
    
    $(".box3-clone .menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".box8").offset().top - 40},
        'slow');
    }); // menu3 수업안내
    
    $(".box3-clone .menu4").click(function() {
    $('html,body').animate({
        scrollTop: $(".prof_wrap").offset().top - 40},
        'slow');
    }); // menu4 교사안내
    
    $(".box3-clone .menu5").click(function() {
    $('html,body').animate({
        scrollTop: $(".box10").offset().top - 40},
        'slow');
    }); // menu5 위치보기
    
    $(".box3-clone .menu6").click(function() {
    $('html,body').animate({
        scrollTop: $(".box11").offset().top - 40},
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

// mobile menu start
$(function(){
    var $menu = $('.mobile_hamburger_left')
    var $menuBtnOpen = $menu.find('.openbtn_menu');
    
    var $menuArea = $('#menu_sidenav');
    var $menuBtnClose = $menuArea.find('.closebtn_menu');
    
    var dr = 100;
    
    // open에 대한 가상선택자 추가
    $menuArea.addClass('comeon');
    
    //menu open
    $menuBtnOpen.on('click',function(){    
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeon')){
            $menuArea.stop().animate({
               'left':'0' 
            },dr,'linear');
            
            // open 가상선택자 삭제 --> close 가상선택자 추가
            $menuArea.removeClass('comeon');
            $menuArea.addClass('comeout');
        };
    });

        
    //hamburg menu window close when menu clicked start
    $(".ham_menu_1").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_1 JB소식
    
    $(".ham_menu_2").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_2 컨설팅
    
    $(".ham_menu_3").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_3 수업안내
    
    $(".ham_menu_4").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_4 교사안내
    
    $(".ham_menu_5").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_5 위치보기
    
    $(".ham_menu_6").click(function() {
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    }); // ham_menu_5 문의하기
    //hamburg menu window close when menu clicked end
    
    //menu close
    $menuBtnClose.on('click',function(){
        $menuArea.toggleClass('open');
        
        if($menuArea.hasClass('comeout')){
            $menuArea.stop().animate({
               'left':'-100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $menuArea.removeClass('comeout');
            $menuArea.addClass('comeon');
        };
    });
    
    // mobile academy menu start
    var $academy = $('.mobile_hamburger_right');
    var $acaBtnOpen = $academy.find('.openbtn_aca');
    
    var $acaArea = $('#academy_sidenav');
    var $acaBtnClose = $acaArea.find('.closebtn_aca');
    
    var dr = 100;
    
    // open에 대한 가상선택자 추가
    $acaArea.addClass('comeon2');
    
    //academy menu open
    $acaBtnOpen.on('click',function(){   
        $acaArea.toggleClass('open');
        
        if($acaArea.hasClass('comeon2')){
            $acaArea.stop().animate({
               'left':'0' 
            },dr,'linear');
            
            // open 가상선택자 삭제 --> close 가상선택자 추가
            $acaArea.removeClass('comeon2');
            $acaArea.addClass('comeout2');
        };
    });

    //academy menu close
    $acaBtnClose.on('click',function(){
        $acaArea.toggleClass('open');
        
        if($acaArea.hasClass('comeout2')){
            $acaArea.stop().animate({
               'left':'100%' 
            },dr,'linear');
            
            // close 가상선택자 삭제 --> open 가상선택자 추가
            $acaArea.removeClass('comeout2');
            $acaArea.addClass('comeon2');
        };
    });
}); // mobile academy menu end

// academy css change when hover start
$(function(){
    var $acaBusan = $('.aca_busan');
    var $acaMarin = $('.aca_marin');
    var $acaJeju = $('.aca_jeju');
    
    var $acaName1 = $acaBusan.find('#aca_name');
    var $acaName2 = $acaMarin.find('#aca_name');
    var $acaName3 = $acaJeju.find('#aca_name');
    
    var $shortcut1 = $acaBusan.find('.shortcut');
    var $shortcut2 = $acaMarin.find('.shortcut');
    var $shortcut3 = $acaJeju.find('.shortcut');
    
    
    $acaBusan.hover(function(){
        $shortcut1.css("border","2px solid #ffffff");
    },function(){
        $shortcut1.css("border","none");
    });
    
    $acaMarin.hover(function(){
        $shortcut2.css("border","2px solid #ffffff");
    },function(){
        $shortcut2.css("border","none");
    });
    
    $acaJeju.hover(function(){
        $shortcut3.css("border","2px solid #ffffff");
    },function(){
        $shortcut3.css("border","none");
    });
    
}); //academy css change when hover end



