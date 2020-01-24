$(".form__input").on("focus", function(){
    $(this).addClass("focus");
  });
  
  $(".form__input").on("blur", function(){
    if($(this).val()=="")
    $(this).removeClass("focus");
  })