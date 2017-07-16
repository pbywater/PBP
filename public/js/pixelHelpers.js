function hideDesktop(section) {
$('.desktop.'+section+' rect:not(#thurstan-1-img-desktop-rectangle), .desktop.'+section+' polygon, .desktop.'+section+' path:not(.exception-1, .exception-2, .exception-3)').each(function() {
  var x = getRandomInt(-1200, -1000);
    var y = getRandomInt(-900, 500);
    $(this).css({
      transform: 'translate(' + x + 'px,' + y + 'px)',
    })
})
$('#thurstan-1-img-desktop-rectangle').fadeOut();
$('.thurstan-1-img img').css({opacity: '0'});
$('.desktop.thurstan path.exception-1, .desktop.thurstan path.exception-2, .desktop.thurstan path.exception-3').addClass('hiding');
}

function showDesktop(section){
  setTimeout(function () {
  $('.desktop.'+section+' rect:not(#thurstan-1-img-desktop-rectangle), .desktop.'+section+' polygon, .desktop.'+section+' path:not(.exception-1, .exception-2, .exception-3)').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
  $('.desktop.thurstan path.exception-1, .desktop.thurstan path.exception-2, .desktop.thurstan path.exception-3').removeClass('hiding');
  // setTimeout(function () {
    // var svgWidth = $('.desktop.thurstan').width();
    // console.log('svg width', svgWidth);
    // var widthMinusCanvas = svgWidth * 0.9241774;
    // console.log('width minus canvas', widthMinusCanvas);
    // var rectWidth = $('.desktop.thurstan rect').attr('width');
    // console.log('rect width', rectWidth);
    // var calc = widthMinusCanvas - rectWidth * 5;
    // console.log('this one', calc);
    // $('.thurstan-1-img img').css({
    //   width: calc,
    // })
    setPosition('thurstan', 'desktop', 'thurstan-1-img', 10, 7.5, 1.5, 'none', 'none', 'none');
  // }, 2000);
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

function showMobile(section) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
}

function hideMobile(section, imageGroup) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    var x = getRandomInt(800, 1000);
      var y = getRandomInt(-300, 700);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
  $('#'+imageGroup+'-mobile-rectangle').fadeOut();
  $('.'+imageGroup+' img').css({opacity: '0'});
}

function setPosition(name, pixelType, imageGroup, divideBy, timesBy, top, marginTop, marginLeft, leftMarginByPosition) {
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
    $('#'+imageGroup+'-'+pixelType+'-rectangle').fadeIn();
    $('.'+name+'.border').css({position: 'relative'});
    $('.'+imageGroup+' img').css({opacity: '1'});
  }, 2000);
}
