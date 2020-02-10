
$(".hamburger").on("click", function(){
    if($(this).hasClass("active")){
    $(this).removeClass("active");
    $(".fullscreen-menu").css({"transform":"translateX(110%)", "opacity":"0"});
    $(".main__links").css("opacity","1");
    $(".hero-info").css("opacity","1");
    $(".hero__downbutton").css("display","flex");
    }
    else{
    $(this).addClass("active");
    $(".fullscreen-menu").css({"transform":"translateX(0%)", "opacity":"1"});
    $(".main__links").css("opacity","0");
    $(".hero-info").css("opacity","0");
    $(".hero__downbutton").css("display","none");
    }
  });

  $(".fullscreen-menu").on("click",function(){
    $(".hamburger").removeClass("active");
    $(".fullscreen-menu").css({"transform":"translateX(110%)", "opacity":"0"});
    $(".main__links").css("opacity","1");
    $(".hero-info").css("opacity","1");
    $(".hero__downbutton").css("display","flex");
  })
