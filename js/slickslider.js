//$(document).ready(function(){
//    $('.ye-class').slick({
//        vertical: true,
//        accessibility:false,
//        slidesToShow:2,
//        infinite: true,
//        slidesToScroll: 1,
//        centerMode: true,
//        centerPadding: '50px',
//        autoplay: false,
//        autoplaySpeed: 3000,
//        responsive: [
//            {
//                breakpoint: 768,
//                settings: {
//                    slidesToShow: 1,
//                    vertical: false,
//                    centerMode: false
//                }
//            }
//      // You can unslick at a given breakpoint now by adding:
//      // settings: "unslick"
//      // instead of a settings object
//    });
//});


        $(document).ready(function(){
            $('.vertical_slider').slick({
                vertical: true,
                accessibility:false,
                slidesToShow:1,
                infinite: true,
                slidesToScroll: 1,
                centerMode: true,
                /* 컨텐츠의 위아래 여백조절*/
                centerPadding: '0px',
                autoplay: false,
                autoplaySpeed: 1500,
                
                arrows: false,
                /* 반응형 */
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            vertical: false,
                            centerMode: false
                        }
                    }
              
                
                ]
                
            });
 
                       
            $('.slick-prev').click(function(){
               $('.vertical_slider').slick('slickPrev'); 
            });
            
            $('.slick-next').click(function(){
               $('.vertical_slider').slick('slickNext'); 
            });
            
            
            
             $('.multi_slider').slick({
                accessibility:false,
                slidesToShow:4,
                infinite: true,
                slidesToScroll: 1,
                centerMode: false,
                /* 컨텐츠의 위아래 여백조절*/
                centerPadding: '0px',
                autoplay: false,
                autoplaySpeed: 1500,
                
                arrows: false,
                /* 반응형 */
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
                ]
                
            });
            
            // prep1 nav
            
            $('.Prep1_container .slick-prev').click(function(){
               $('.multi_1').slick('slickPrev'); 
            });
            
            $('.Prep1_container .slick-next').click(function(){
               $('.multi_1').slick('slickNext'); 
            });
            
            
            // prep2 nav    
            $('.Prep2_container .slick-prev').click(function(){
               $('.multi_2').slick('slickPrev'); 
            });
            
            $('.Prep2_container .slick-next').click(function(){
               $('.multi_2').slick('slickNext'); 
            });
            
             // prep3 nav    
            $('.Prep3_container .slick-prev').click(function(){
               $('.multi_3').slick('slickPrev'); 
            });
            
            $('.Prep3_container .slick-next').click(function(){
               $('.multi_3').slick('slickNext'); 
            });
            

 

    });