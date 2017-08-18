jQuery(document).ready(function() {
scrollAnimation();
iphoneFix();
manageTopNav();

var isMobile = window.matchMedia('only screen and (max-width: 760px)');

  if (isMobile.matches) {
mobileColours();
pixelAnimation('.pixels-mobile.mobile');
  } else {
pixelAnimation('.initial');
  }

hideDesktop('thurstan');
checkIfVisible($('.thurstan.work'), showDesktop, hideDesktop, 'thurstan');
hideMobile('thurstan', 'none', 'thurstan-2-img-mobile');
hideIpad('thurstan', 'thurstan-2-img-ipad');

hideDesktop('gift-horse');
checkIfVisible($('.gift-horse.work'), showDesktop, hideDesktop, 'gift-horse');

hideMobile('genie', 'text', 'genie-1-img-mobile');
checkIfVisible($('.genie.work'), showMobile, hideMobile, 'genie', 'text', 'genie-1-img-mobile', 'yes');

hideDesktop('lbw');
checkIfVisible($('.lbw.work'), showDesktop, hideDesktop, 'lbw');


// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-2-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-3-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-4-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-5-img');

$('.thurstan.scroll-right').on('click', function() {
  hideDesktop('thurstan');
  $('.thurstan.scroll-right-icon').hide();
  $('.thurstan.scroll-left-icon').show();
  setTimeout(function () {
        if (!isMobile.matches) {
      $('.thurstan-2').css({display: 'flex'});
    }
      $('.desktop.thurstan, .thurstan-1').hide();
  }, 1500);
  setTimeout(function () {
    if (!isMobile.matches) {
    showIpad('thurstan');
    setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', 3, '6%', 'none', 'no');
    showMobile('thurstan', 'none', 'thurstan-2-img-mobile', 'no');
    setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', 5.8, 'none', 1.03, 'no');
  }
  else {
    $('thurstan-2').css({display: 'none'});
  }
    setTimeout(function () {
      $('.thurstan-2-text').fadeIn().css('display', 'flex');
    }, 2000);
  }, 1600);
})

$('.thurstan.scroll-left').on('click', function() {
  $('.thurstan.scroll-right-icon').show();
  $('.thurstan.scroll-left-icon').hide();
  hideIpad('thurstan', 'thurstan-2-img-ipad');
  hideMobile('thurstan', 'none', 'thurstan-2-img-mobile');
  setTimeout(function () {
      $('.thurstan-2').hide();
  }, 1000);
  setTimeout(function () {
    showDesktop('thurstan');
    $('.desktop.thurstan').fadeIn();
  }, 1100);
  setTimeout(function () {
          $('.thurstan-1').show();
  }, 1800);
  $('.thurstan-2-text').fadeOut();
})

// checkIfVisible($('.thurstan.border'), showBriefly, displayNone, $('.initial-heading.thurstan'));
// checkIfVisible($('.gift-horse.border'), showBriefly, displayNone, $('.initial-heading.gift-horse'));
// checkIfVisible($('.genie.border'), showBriefly, displayNone, $('.initial-heading.genie'));
// checkIfVisible($('.lbw.border'), showBriefly, displayNone, $('.initial-heading.lbw'));

// $('.gift-horse.scroll-right').on('click', function() {
//   $('.gift-horse-1 > *').each( function () {
//     if($(this).find('img').css('opacity') == 1) {
//       var index = $(this).index() + 2;
//       $(this).find('img').css('opacity', 0);
//       if ($('.gift-horse-'+index+'-img').length) {
//       setPosition('gift-horse', 'desktop', 'gift-horse-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
//       $('.gift-horse-'+index+'-img img').css('opacity', 1);
//     }
//     else {
//       setPosition('gift-horse', 'desktop', 'gift-horse-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
//       $('.gift-horse-1-img img').css('opacity', 1);
//     }
//     }
//   })
// })

$('.gift-horse.scroll-right').on('click', function() {
  $('.gift-horse-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      $(this).find('img').css('opacity', 0);
      $(this).css('position', 'absolute');
      var index = $(this).index() + 2;
      if ($('.gift-horse-'+index+'-img').length) {
      setPosition('gift-horse', 'desktop', 'gift-horse-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
              $('.gift-horse-'+index+'-img').css('position', 'relative');
              setTimeout(function () {
                $('.gift-horse-'+index+'-img img').css('opacity', 1);
              }, 10);
    }
    else {
      setPosition('gift-horse', 'desktop', 'gift-horse-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-1-img').css('position', 'relative');
      $('.gift-horse-1-img img').css('opacity', 1);
    }
    }
  })
})

$('.gift-horse.scroll-left').on('click', function() {
  $('.gift-horse-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index();
      $(this).find('img').css('opacity', 0);
      if ($('.gift-horse-'+index+'-img').length) {
      setPosition('gift-horse', 'desktop', 'gift-horse-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-'+index+'-img img').css('opacity', 1);
    }
    else {
      var numImages = $('.gift-horse-1').children().length;
      setPosition('gift-horse', 'desktop', 'gift-horse-'+numImages+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-'+numImages+'-img img').css('opacity', 1);
    }
    }
  })
})

$('.lbw.scroll-right').on('click', function() {
  $('.lbw-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index() + 2;
      $(this).find('img').css('opacity', 0);
      if ($('.lbw-'+index+'-img').length) {
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'no');
      $('.lbw-'+index+'-img img').css('opacity', 1);
    }
    else {
      setPosition('lbw', 'desktop', 'lbw-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'no');
      $(this).find('img').css('opacity', 0);
      $('.lbw-1-img img').css('opacity', 1);
    }
    }
  })
  jQuery('.lbw-1').scrollTop(0);
})

$('.lbw.scroll-left').on('click', function() {
  $('.lbw-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index();
      $(this).find('img').css('opacity', 0);
      if ($('.lbw-'+index+'-img').length) {
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'no');
      $('.lbw-'+index+'-img img').css('opacity', 1);
    }
    else {
      var numImages = $('.lbw-1').children().length;
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'no');
      $('.lbw-1-img img').css('opacity', 0);
      $('.lbw-'+numImages+'-img img').css('opacity', 1);
    }
    }
  })
  $('.lbw-1').scrollTop(0);
})

$('.genie.scroll-right').on('click', function() {
  $('.genie-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index() + 2;
      $(this).find('img').css('opacity', 0);
      $('.genie-'+(index-1)+'-text').css({visibility: 'hidden', display: 'none'});
      if ($('.genie-'+index+'-img-mobile').length) {
        $('.genie-'+index+'-text').css({visibility: 'visible', display: 'flex'});
        setPosition('genie', 'mobile', 'genie-'+index+'-img-mobile', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
      $('.genie-'+index+'-img-mobile img').css('opacity', 1);
    }
    else {
      $('.genie-1-text').css({visibility: 'visible', display: 'flex'});
      setPosition('genie', 'mobile', 'genie-'+index+'-img-mobile', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
      $('.genie-1-img-mobile img').css('opacity', 1);
    }
    }
  })
})

$('.genie.scroll-left').on('click', function() {
  $('.genie-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index();
      $(this).find('img').css('opacity', 0);
      $('.genie-'+(index+1)+'-text').css({visibility: 'hidden', display: 'none'});
      if ($('.genie-'+index+'-img-mobile').length) {
        $('.genie-'+index+'-text').css({visibility: 'visible', display: 'flex'});
        setPosition('genie', 'mobile', 'genie-'+index+'-img', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
      $('.genie-'+index+'-img-mobile img').css('opacity', 1);
    }
    else {
      var numImages = $('.genie-1').children().length;
      $('.genie-'+numImages+'-text').css({visibility: 'visible', display: 'flex'});
      setPosition('genie', 'mobile', 'genie-'+numImages+'-img-mobile', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
      $('.genie-'+numImages+'-img-mobile img').css('opacity', 1);
    }
    }
  })
})

});

$('.lbw-1').on('click', function() {
  window.open('http://lilybertrandwebb.com', '_blank');
})

$(window).resize(function() {
  setPosition('thurstan', 'desktop', 'thurstan-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', 3, '6%', 'none', 'yes');
  setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', 5.8, 'none', 1.03, 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-2-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-3-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-4-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-5-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'none', 'yes');
  setPosition('lbw', 'desktop', 'lbw-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
  setPosition('lbw', 'desktop', 'lbw-2-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
  setPosition('genie', 'mobile', 'genie-1-img', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
  setPosition('genie', 'mobile', 'genie-2-img', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
  setPosition('genie', 'mobile', 'genie-3-img', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
  setPosition('genie', 'mobile', 'genie-4-img', 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');

})
