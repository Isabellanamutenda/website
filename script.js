$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky");
        }else{
            $(".navbar").removeClass("sticky"); 
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show");
        }else{
            $(".scroll-up-btn").removeClass("sticky");
        }
    });

    // slide-up script
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    
    });
});

// typing animation script
var typed = new Typed(".typing", {
    strings: ["Software", "Developer"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true

});