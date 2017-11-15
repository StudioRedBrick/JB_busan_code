//START
$(function(){
        
    //alert("hello");
    
    $(".menu1").click(function() {
    $('html,body').animate({
        scrollTop: $(".txtbox1").offset().top},
        'slow');
    });
    
    $(".menu2").click(function() {
    $('html,body').animate({
        scrollTop: $(".txtbox2").offset().top},
        'slow');
    });
    
    $(".menu3").click(function() {
    $('html,body').animate({
        scrollTop: $(".txtbox3").offset().top},
        'slow');
    });
    
});//END