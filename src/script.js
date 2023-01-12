$(document).ready(function(){

    
// slide show 
            $('.slide').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        arrows: false,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        });

        // trending slides 
        $('.trending').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        });
        

        $('.trending-2').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        cssEase: 'linear',
        pauseOnHover: false,
        pauseOnFocus: false,
        });





                // mobile nav bar functions
        $('.fa-bars').click(function(){
            $(this).hide(100);
            $('.fa-xmark').show(200);
            $('.mobile-nav').slideDown(300);
        })

        $('.fa-xmark').click(function(){
            $(this).hide(100);
            $('.fa-bars').show(200);
            $('.mobile-nav').slideUp(300);
        })

        // T-shirts next and Previous Button 

        $('.nextButton').click(function(){
            $(this).hide();
            $('.more1').hide();
            $('.more2').show();
            $('.prevButton').show();
            
        })

        $('.prevButton').click(function(){
            $(this).hide();
            $('.more1').show();
            $('.more2').hide();
            $('.nextButton').show();
        })

        



        




})


    