$(function(){
  $('.menu-icon').click(function(){
    var $nav = $('.nav');
    if ($nav.hasClass('open')){
      $nav.removeClass('open');
      $nav.slideUp("fast");   
    } else {
      $nav.addClass('open');
      $nav.slideDown("fast");
    }
});

$('.nav-list').click(function(){
  $('.nav').slideUp("fast");
})


$('#pageTop').click(function(){
  $('body,html').animate({
    scrollTop:0
  },800);
  return false;
});


var $arrow = $('.now-showing-title')
$arrow.click(function(){
  var $now = $('.movie-list');
  if ($now.hasClass('open')) {
     $now.removeClass('open');
     $now.slideUp("fast");
     
  } else {
     $now.addClass('open');
     $now.slideDown("fast");
  
  }
});

var $arrow2 = $('.theater-title');
$arrow2.click(function(){
  var $theater = $('.theater-nav-list')
  if ($theater.hasClass('open')) {
    $theater.removeClass('open');
    $theater.slideUp("fast");
  } else {
    $theater.addClass('open');
    $theater.slideDown("fast");
  }
});

var $arrow3 = $('.ticket-title')
$arrow3.click(function(){
  var $ticket = $('.ticket-contents')
  if ($ticket.hasClass('open')) {
    $ticket.removeClass('open');
    $ticket.slideDown("fast");
  } else {
    $ticket.addClass('open');
    $ticket.slideUp("fast");
  }

});

var $arrow4 = $('.notice-title')
$arrow4.click(function(){
  var $notice = $('.notice-contents')
  if ($notice.hasClass('open')) {
    $notice.removeClass('open');
    $notice.slideDown("fast");
  } else {
    $notice.addClass('open');
    $notice.slideUp("fast");
  }

});

var $arrow5 = $('.open-time-title')
$arrow5.click(function(){
  var $openTime = $('.open-time-contents')
  if ($openTime.hasClass('open')) {
    $openTime.removeClass('open');
    $openTime.slideDown("fast");
  } else {
    $openTime.addClass('open');
    $openTime.slideUp("fast");
  }

});
})
