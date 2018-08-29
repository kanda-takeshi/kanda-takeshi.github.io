// ナビバーのリンクタッチで閉じる
$(function(){
  $(".navbar-nav li a").click(function(event){
    $(".navbar-collapse").collapse('hide');
  });
});

// ナビバー以外タッチで閉じる
$(document).on('click touched' , function(eventj){
  if(!$(event.target).closest('.navbar').length){
    $(".navbar-collapse").collapse('hide');
  }
});