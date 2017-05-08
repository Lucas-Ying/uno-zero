$(document).ready(function() {

  $('a.blog-button').on('click', function() {
    // If already in blog, return early without animate overlay panel again.
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) {
      $('.content-wrapper').addClass('animated slideOutRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.content-wrapper').removeClass('animated slideOutRight');
          $('.main-post-list').addClass('hidden');
      });
      setTimeout(function() {
        $('.panel-cover').removeClass('panel-cover--collapsed');
      }, 200);
    } else {
      $('.main-post-list').removeClass('hidden');
      $('.panel-cover').addClass('panel-cover--collapsed');
      $('.content-wrapper').addClass('animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.content-wrapper').removeClass('animated slideInRight');
      });
    };
  });

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }
});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');