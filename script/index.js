$(document).ready(function()
{
  $.when
  (
    $(".mainWrapper").fadeIn(800)
  )
  .done(function()
  {
    $("header").find(".logo").find("img").fadeIn(1000);
  })
  .done(function()
  {
    $("header").find(".glovalNavi").find("li").fadeIn(1000);
  })
   
});
