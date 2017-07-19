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
hideMobile('thurstan', 'thurstan-2-img-mobile');
hideIpad('thurstan', 'thurstan-2-img-ipad');

hideDesktop('gift-horse');
checkIfVisible($('.gift-horse.work'), showDesktop, hideDesktop, 'gift-horse');

hideMobile('genie', 'genie-1-img-img-mobile');
checkIfVisible($('.genie.work'), showMobile, hideMobile, 'genie');

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
    showMobile('thurstan');
    setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', 5.8, 'none', 1.03, 'no');
    setTimeout(function () {
      $('.thurstan-2-text').fadeIn().css('display', 'flex');
    }, 2000);
  }, 1600);
})

$('.thurstan.scroll-left').on('click', function() {
  hideIpad('thurstan', 'thurstan-2-img-ipad');
  hideMobile('thurstan', 'thurstan-2-img-mobile');
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
})
