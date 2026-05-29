$(document).ready(function() {

$('.thumbnail').each(function() {
    $(this).children('.thumbnail-img').children('img').attr('src', 'imgWork/' + this.id + '/thumbnail.jpg');
  });

  $('.thumbnail').mouseover(function() {
    $(this).children('.thumbnail-img').children('img').addClass('imgHover');
    $(this).children('.cover').fadeIn(400, 'easeInSine');
    $(this).children('.workType').fadeIn(400, 'easeInSine');
    $(this).children('.workname').fadeIn(400, 'easeInSine');
  });

  $('.thumbnail').mouseleave(function() {
    $(this).children('.thumbnail-img').children('img').removeClass('imgHover');
    $(this).children('.cover').fadeOut(400, 'easeInSine');
    $(this).children('.workname').fadeOut(400, 'easeInSine');
    $(this).children('.workType').fadeOut(400, 'easeInSine');
  });

  $('.thumbnail').click(function() {
    $('body').css({ 'height': '100%', 'overflow-y': 'hidden' });
    $('.preload').fadeIn(600);
    $('.bigload').css({ 'left': '0%', 'display': 'block', 'opacity': 0 }).animate({ 'opacity': 1 }, 600);
    document.getElementById('bigload').src = 'imgWork/' + this.id + '/index.html';
    $('.closemark').delay(300).fadeIn(600);
    $(this).children('.viewed').fadeIn(300);
  });

  $('.closemark').click(function() {
    $('.preload').hide();
    $('.closemark').fadeOut(400, 'easeInSine');
    $('.scrollTop').hide();
    $('body').css('overflow-y', 'scroll');
    $('.bigload').fadeOut(300, function() {
      $('.bigload').css({ 'left': '100%' });
    });
  });

  $('.preload').click(function() {
    $(this).hide();
    $('.closemark').hide();
    $('.bigload').fadeOut(600, function() {
      $('.bigload').css({ 'left': '100%' });
    });
    $('body').css('overflow-y', 'scroll');
  });

});
