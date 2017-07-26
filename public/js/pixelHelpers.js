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
    setPosition(section, 'desktop', section+'-1-img', 10, 7.5, 1.5, 'none', 'none', 'none', 'no');
}, 500);
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
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
  $('#'+imageGroup+'-mobile-mobile-rectangle').css({display: 'none'});
  if (text) {
    $('.'+section+'-1-text').css({visibility: 'visible'});
  }
  setTimeout(function () {
    $('#'+imageGroup+'-mobile-mobile-rectangle').fadeIn();
    if (setPos === 'yes') {
      setPosition(section, 'mobile', imageGroup, 10, 5.5, 'none', 3.4, 'none', 1.11, 'yes');
      setTimeout(function () {
        $('.'+imageGroup+' img').css({opacity: '1'});
      }, 2000);
  }
}, 2000);
}

function hideMobile(section, text, imageGroup) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    var x = getRandomInt(800, 1000);
      var y = getRandomInt(-300, 700);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
  $('#'+imageGroup+'-mobile-mobile-rectangle').fadeOut();
  $('.'+imageGroup+' img').css({opacity: '0'});
  if (text !== 'none') {
    $('.'+section+'-1-text').css({visibility: 'hidden'});
  }
}

function setPosition(name, pixelType, imageGroup, divideBy, timesBy, top, marginTop, marginLeft, leftMarginByPosition, resize) {
  var svg = $('.'+pixelType+'.'+name);
  var svgWidth=svg.width();
  var fixWidth = (svgWidth/divideBy) * timesBy;
  $('.'+imageGroup).css({width: fixWidth });
  if (top !== 'none') {
    var topMargin = (($('.'+name+'.'+pixelType).position().top) - ($('#'+name).position().top)) * top;
    $('.'+imageGroup).css({top: topMargin });
  }
  if (marginTop !== 'none') {
    var topMargin = (($('.'+name+'.'+pixelType).position().top) - ($('#'+name).position().top)) * marginTop;
    $('.'+imageGroup).css({marginTop: topMargin });
  }
  if (marginLeft !== 'none') {
    $('.'+imageGroup).css({marginLeft: marginLeft });
  }
  if (leftMarginByPosition !== 'none') {
    var leftMargin = ($('.'+name+'.'+pixelType).position().left) * leftMarginByPosition;
    $('.'+imageGroup).css({marginLeft: leftMargin });
  }
  setTimeout(function () {
    $('.'+name+'.border').css({position: 'relative'});
    if (resize === 'no') {
    $('#'+imageGroup+'-'+pixelType+'-rectangle').fadeIn();
    $('.'+imageGroup+' img').css({opacity: '1'});
  }
  }, 2000);
}
