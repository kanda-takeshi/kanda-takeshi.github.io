$('.storeInfomation').hover(function()
{
  var $slideList = $(this).find('.slide_down_list');
  
  if( $slideList.hasClass('open') ){
    $(this).find("span").text("+");
    $slideList.removeClass('open');
    $slideList.slideUp();
  } else {
    $(this).find("span").text("-");
    $slideList.addClass('open');
    $slideList.slideDown();
  }
  
});


// 画像のロード後に処理を行う
$(window).on('load',function(){

  $('#loader-bg ,#loader').hide();
  $('.first_fadein').css({opacity:'0'}).animate({opacity:'1'},1500);
  
});