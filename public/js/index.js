// When the user clicks on the button, scroll to the top of the document

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

jQuery(document).ready(function() {
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

  var isSafari =
    navigator.vendor &&
    navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    !navigator.userAgent.match('CriOS');

  if (isSafari) {
    jQuery('.chevron-down').css('display', 'none');
  }

  $(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 200) {
      $('.fixed').css('display', 'block');
    } else {
      $('.fixed').css('display', 'none');
    }
  });

  var originalPosition = [];
  jQuery('rect').each(function() {
    originalPosition.push(jQuery(this).offset());
  });

  jQuery('.initial').on('mouseover', function() {
    var x = getRandomInt(-150, 150);
    var y = getRandomInt(-200, 200);
    var randomNum = getRandomInt(0, 3);
    var colours = ['white', '#c4e6ef', '#cdb6e7', '#9bfeca'];
    var randomColour = colours[randomNum];
    var element = jQuery(this);
    element.css({
      '-webkit-transform': 'translate(' + x + 'px,' + y + 'px)',
      '-ms-transform': 'translate(' + x + 'px,' + y + 'px)',
      transform: 'translate(' + x + 'px,' + y + 'px)',
      fill: randomColour
    });
    setTimeout(function() {
      jQuery(element).css({
        '-webkit-transform': 'translate(0px,0px)',
        '-ms-transform': 'translate(0px,0px)',
        transform: 'translate(0px,0px)'
      });
    }, 5000);
    setTimeout(function() {
      jQuery(element).css({
        fill: 'white',
        height: '10px',
        width: '10px'
      });
    }, 9000);
  });

  var isMobile = window.matchMedia('only screen and (max-width: 760px)');

  if (isMobile.matches) {
    jQuery('.initial').on('click', function() {
      var randomNum = getRandomInt(0, 3);
      var colours = ['#c4e6ef', '#cdb6e7', '#9bfeca', '#ff8f93'];
      var randomColour = colours[randomNum];
      jQuery(this).css({
        height: '25px',
        width: '25px',
        fill: randomColour
      });
    });
  } else {
    jQuery('.initial').on('click', function() {
      jQuery(this).css({
        height: '25px',
        width: '25px',
        fill: '#ff8f93'
      });
      jQuery(this).addClass('clicked').removeClass('initial').off('mouseover');
    });
  }
});
