function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkIfVisible(el, funcIfTrue, funcIfFalse, params) {
$(window).scroll(function() {
    var top_of_element = el.offset().top;
    var bottom_of_element = el.offset().top + el.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      funcIfTrue(params);
    }
    else {
      funcIfFalse(params);
    }
});
}

function scrollAnimation() {
  jQuery('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = jQuery(target);

    jQuery('html, body').stop().animate({
      scrollTop: $target.offset().top
    }, 600, 'swing', function() {
      window.location.hash = target;
    });
  });
}

function iphoneFix() {
  var isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    !navigator.userAgent.match('CriOS');

  if (isSafari) {
    jQuery('.chevron-down').css('display', 'none');
  }
}

function manageTopNav() {
  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.fixed').css('display', 'block');
    } else {
      $('.fixed').css('display', 'none');
    }
  });
}
