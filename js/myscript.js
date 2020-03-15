/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
        
    });
    
    scrollButton.click(function(){
            
            $("html, body").animate({ scrollTop: 0}, 2000);
            
        });
    
    //   responsive menu
    
    
    $("header nav .container > .row > div:nth-child(1) i").click(function(){
       
        $("header nav .container > .row > div:nth-child(2)").css({"left":"0px"});
    });
    
    
    $("header nav .container > .row > div:nth-child(2) > div:nth-of-type(1) i").click(function(){
       
        $("header nav .container > .row > div:nth-child(2)").css({"left":"415px"});
    });
    
    // header links
    
    $('.link1').click(function() {

        $('html, body').animate({

            scrollTop: $('#header').offset().top

        },1000);

    });
    
    $('.link2').click(function() {

        $('html, body').animate({

            scrollTop: $('#about').offset().top

        },1000);

    });
    
    $('.link3').click(function() {

        $('html, body').animate({

            scrollTop: $('#products').offset().top

        },1000);

    });
    
    $('.link4').click(function() {

        $('html, body').animate({

            scrollTop: $('#contact').offset().top

        },1000);

    });
    //Hand Shuffle For Portfolio Section

    $(".port li").click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        var data = $($(this).data('port'));
        
        $(".port .row > div").addClass("hide-item");
        setTimeout(function() {
            data.removeClass("hide-item")
        }, 500)

    })

    
    
    //Magnetic Pop up Plugin

    $('.test-popup-link').magnificPopup({
        type: 'image',

        gallery: {
            enabled: true
        }
    });
    
    
});