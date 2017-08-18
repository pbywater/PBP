var isSmallish =  window.matchMedia('only screen and (max-width: 1100px)');

function hideDesktop(section) {
$('.desktop.'+section+' rect:not(#'+section+'-1-img-desktop-rectangle), .desktop.'+section+' polygon, .desktop.'+section+' path:not(.exception-1, .exception-2, .exception-3)').each(function() {
  var x = getRandomInt(-1200, -1000);
    var y = getRandomInt(-900, 500);
    $(this).css({
      transform: 'translate(' + x + 'px,' + y + 'px)',
    })
})
$('#'+section+'-1-img-desktop-rectangle').fadeOut();
$('.'+section+'-1-img img').css({opacity: '0'});
$('.desktop.'+section+' path.exception-1, .desktop.'+section+' path.exception-2, .desktop.'+section+' path.exception-3').addClass('hiding');
}

function showDesktop(section){
  setTimeout(function () {
  $('.desktop.'+section+' rect:not(#'+section+'-1-img-desktop-rectangle), .desktop.'+section+' polygon, .desktop.'+section+' path:not(.exception-1, .exception-2, .exception-3)').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
  $('.desktop.'+section+' path.exception-1, .desktop.'+section+' path.exception-2, .desktop.'+section+' path.exception-3').removeClass('hiding');
    setPosition(section, 'desktop', section+'-1-img', 10, 7.5, 1.6, 'none', 'none', 'none', 'no');
}, 500);
// $('.initial-heading.'+section).addClass('minimise');
}

function showIpad(section) {
  $('.ipad.'+section+' rect, .ipad.'+section+' polygon, .ipad.'+section+' path').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
}

function hideIpad(section, imageGroup) {
  $('.ipad.'+section+' rect, .ipad.'+section+' polygon, .ipad.'+section+' path').each(function() {
    var x = getRandomInt(-1000, -800);
      var y = getRandomInt(-700, 300);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
  $('#'+imageGroup+'-ipad-rectangle').fadeOut();
  $('.'+imageGroup+' img').css({opacity: '0'});
}

function showMobile(section, text, imageGroup, setPos) {
  $('.'+section+'.mobile rect, .'+section+'.mobile polygon, .'+section+'.mobile path').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
  $('#'+imageGroup+'-mobile-rectangle').css({display: 'none'});
  if (text) {
    $('.'+section+'-1-text').css({visibility: 'visible'});
  }
  setTimeout(function () {
    $('#'+imageGroup+'-mobile-rectangle').fadeIn();
    if (setPos === 'yes') {
      setPosition(section, 'mobile', imageGroup, 10, 5.5, 'none', 3.4, 'none', 1.14, 'yes');
      setTimeout(function () {
        $('.'+imageGroup+' img').css({opacity: '1'});
      }, 2000);
  }
}, 2000);
// $('.initial-heading.'+section).addClass('minimise');
}

function hideMobile(section, text, imageGroup) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    var x = getRandomInt(800, 1000);
      var y = getRandomInt(-300, 700);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
  $('#'+imageGroup+'-mobile-rectangle').fadeOut();
  $('.'+imageGroup+' img').css({opacity: '0'});
  if (text !== 'none') {
    $('.'+section+'-1-text').css({visibility: 'hidden'});
  }
}


function setPosition(name, pixelType, imageGroup, divideBy, timesBy, top, marginTop, marginLeft, leftMarginByPosition, resize) {
  var svg = $('.'+pixelType+'.'+name);
  var svgWidth=svg.width();
  var fixWidth = (svgWidth/divideBy) * timesBy;
  var isSmallish =  window.matchMedia('only screen and (max-width: 1100px)');
  var isMobile = window.matchMedia('only screen and (max-width: 760px)');
  if (pixelType === 'mobile' && name === 'genie' && isMobile.matches) {
        $('.'+imageGroup).css({top: '51%' });
  }
  if (isSmallish.matches) {
  $('.'+imageGroup).css({width: fixWidth });
}
else if (pixelType === 'mobile' && name === 'genie') {
  $('.'+imageGroup).css({width: '205px' });
}
else if (pixelType === 'desktop') {
  $('.'+imageGroup).css({width: '640px' });
}
else {
  $('.'+imageGroup).css({width: fixWidth });

}
  if (top !== 'none') {
    var topMargin = (($('.'+name+'.'+pixelType).offset().top) - ($('#'+name).offset().top)) * top;
    if (isMobile.matches && name !== 'lbw') {
var topMargin = '0px';
$('.'+imageGroup).css({marginTop: '-8%' });
    }
    else if (isMobile.matches && name === 'lbw') {
      $('.'+imageGroup).css({top: '0' });
var topMargin = '0px';
    }
    else {
    $('.'+imageGroup).css({top: topMargin });
  }
  }
  if (marginTop !== 'none') {
    if (isMobile.matches) {
var topMargin = '0px';
$('.'+imageGroup).css({marginTop: '0%' });
    }
    else {
    var topMargin = (($('.'+name+'.'+pixelType).offset().top) - ($('#'+name).offset().top)) * marginTop;
    $('.'+imageGroup).css({marginTop: topMargin });
  }
  }
  if (marginLeft !== 'none') {
    $('.'+imageGroup).css({marginLeft: marginLeft });
  }
  if (leftMarginByPosition !== 'none') {
    if (name === 'genie' && imageGroup !== 'genie-1-img-mobile' && isMobile.matches) {
      var leftMargin = ($('.'+name+'.'+pixelType).offset().left) * leftMarginByPosition * 3.5;
    }
  else {
    var leftMargin = ($('.'+name+'.'+pixelType).offset().left) * leftMarginByPosition;
  }
    $('.'+imageGroup).css({marginLeft: leftMargin });
  }
  setTimeout(function () {
    $('.'+name+'.border').css({position: 'relative'});
    $('.initial-heading.'+name).css({opacity: '1'});
    if (resize === 'no') {
    $('#'+imageGroup+'-'+pixelType+'-rectangle').fadeIn();
    $('.'+imageGroup+' img').css({opacity: '1'});
  }
  }, 2000);
}
