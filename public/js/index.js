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
hideMobile('thurstan');
hideIpad('thurstan');

$('.thurstan.scroll-right').on('click', function() {
  hideDesktop('thurstan');
  setTimeout(function () {
      $('.thurstan-2').css({display: 'flex'});
      $('.desktop.thurstan, .thurstan-1').hide();
  }, 1500);
  setTimeout(function () {
    showIpad('thurstan');
    setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', '15%', '6%', 'none');
    showMobile('thurstan');
    setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', '23%', 'none', 1.03);
  }, 1600);
})

$('.thurstan.scroll-left').on('click', function() {
  hideIpad('thurstan');
  hideMobile('thurstan');
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
})


});

$(window).resize(function() {
  setPosition('thurstan', 'desktop', 'thurstan-1-img', 10, 7.5, '15%', 'none', 'none', 'none');
  setPosition('thurstan', 'ipad', 'thurstan-2-img-ipad', 10, 6.5, 'none', '15%', '6%', 'none');
  setPosition('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 5.5, 'none', '23%', 'none', 1.03);
})
