jQuery(document).ready(function() {

scrollAnimation();
iphoneFix();
manageTopNav();
pixelAnimation();

var isMobile = window.matchMedia('only screen and (max-width: 760px)');

  if (isMobile.matches) {
mobileColours();
  } else {
desktopColours();
  }

hideDesktop('thurstan');
checkIfVisible($('.thurstan.work'), showDesktop, hideDesktop, 'thurstan');
hideMobile('thurstan', 'none', 'thurstan-2-img');
hideIpad('thurstan', 'thurstan-2-img-ipad');

hideDesktop('gift-horse');
checkIfVisible($('.gift-horse.work'), showDesktop, hideDesktop, 'gift-horse');

hideMobile('genie', 'text', 'genie-1-img');
checkIfVisible($('.genie.work'), showMobile, hideMobile, 'genie', 'text', 'genie-1-img', 'yes');

hideDesktop('lbw');
checkIfVisible($('.lbw.work'), showDesktop, hideDesktop, 'lbw');


// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-2-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-3-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-4-img');
// checkIfVisible($('.gift-horse.work'), doNothing, opacityZero, 'gift-horse-5-img');

$('.thurstan.scroll-right').on('click', function() {
  hideDesktop('thurstan');
  setTimeout(function () {
      $('.thurstan-2').css({display: 'flex'});
      $('.desktop.thurstan, .thurstan-1').hide();
  }, 1500);
  setTimeout(function () {
    showIpad('thurstan');
    setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', 3, '6%', 'none', 'no');
    showMobile('thurstan', 'none', 'thurstan-2-img-ipad', 'no');
    setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', 5.8, 'none', 1.03, 'no');
    setTimeout(function () {
      $('.thurstan-2-text').fadeIn().css('display', 'flex');
    }, 2000);
  }, 1600);
})

$('.thurstan.scroll-left').on('click', function() {
  hideIpad('thurstan', 'thurstan-2-img-ipad');
  hideMobile('thurstan', 'none', 'thurstan-2-img');
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

checkIfVisible($('#thurstan'), showBriefly, displayNone, $('.initial-heading.thurstan'));
checkIfVisible($('#gift-horse'), showBriefly, displayNone, $('.initial-heading.gift-horse'));
checkIfVisible($('#genie'), showBriefly, displayNone, $('.initial-heading.genie'));
checkIfVisible($('#lbw'), showBriefly, displayNone, $('.initial-heading.lbw'));

$('.gift-horse.scroll-right').on('click', function() {
  $('.gift-horse-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index() + 2;
      $(this).find('img').css('opacity', 0);
      if ($('.gift-horse-'+index+'-img').length) {
      setPosition('gift-horse', 'desktop', 'gift-horse-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-'+index+'-img img').css('opacity', 1);
    }
    else {
      setPosition('gift-horse', 'desktop', 'gift-horse-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-1-img img').css('opacity', 1);
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
        setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');

      $('.lbw-'+index+'-img img').css('opacity', 1);
    }
    else {
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
      $('.lbw-1-img img').css('opacity', 1);
    }
    }
  })
})

$('.genie.scroll-right').on('click', function() {
  $('.genie-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index() + 2;
      $(this).find('img').css('opacity', 0);
      $('.genie-'+(index-1)+'-text').css({visibility: 'hidden', display: 'none'});
      if ($('.genie-'+index+'-img').length) {
        $('.genie-'+index+'-text').css({visibility: 'visible', display: 'flex'});
        setPosition('genie', 'mobile', 'genie-'+index+'-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
      $('.genie-'+index+'-img img').css('opacity', 1);
    }
    else {
      $('.genie-1-text').css({visibility: 'visible', display: 'flex'});
      setPosition('genie', 'mobile', 'genie-'+index+'-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
      $('.genie-1-img img').css('opacity', 1);
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
      setPosition('gift-horse', 'desktop', 'gift-horse-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-'+index+'-img img').css('opacity', 1);
    }
    else {
      var numImages = $('.gift-horse-1').children().length;
      setPosition('gift-horse', 'desktop', 'gift-horse-'+numImages+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
      $('.gift-horse-'+numImages+'-img img').css('opacity', 1);
    }
    }
  })
})

$('.lbw.scroll-left').on('click', function() {
  $('.lbw-1 > *').each( function () {
    if($(this).find('img').css('opacity') == 1) {
      var index = $(this).index();
      $(this).find('img').css('opacity', 0);
      if ($('.lbw-'+index+'-img').length) {
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
      $('.lbw-'+index+'-img img').css('opacity', 1);
    }
    else {
      var numImages = $('.lbw-1').children().length;
      setPosition('lbw', 'desktop', 'lbw-'+index+'-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
      $('.lbw-'+numImages+'-img img').css('opacity', 1);
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
      if ($('.genie-'+index+'-img').length) {
        $('.genie-'+index+'-text').css({visibility: 'visible', display: 'flex'});
        setPosition('genie', 'mobile', 'genie-'+index+'-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
      $('.genie-'+index+'-img img').css('opacity', 1);
    }
    else {
      var numImages = $('.genie-1').children().length;
      $('.genie-1-text').css({visibility: 'visible', display: 'flex'});
      setPosition('genie', 'mobile', 'genie-'+index+'-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
      $('.genie-'+numImages+'-img img').css('opacity', 1);
    }
    }
  })
})

});

$(window).resize(function() {
  setPosition('thurstan', 'desktop', 'thurstan-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', 3, '6%', 'none', 'yes');
  setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', 5.8, 'none', 1.03, 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-2-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-3-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-4-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('gift-horse', 'desktop', 'gift-horse-5-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'none', 'yes');
  setPosition('lbw', 'desktop', 'lbw-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
  setPosition('lbw', 'desktop', 'lbw-2-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
  setPosition('genie', 'mobile', 'genie-1-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
  setPosition('genie', 'mobile', 'genie-2-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
  setPosition('genie', 'mobile', 'genie-3-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
  setPosition('genie', 'mobile', 'genie-4-img', 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');

})
