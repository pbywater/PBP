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
  setTimeout(function () {
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
    setHeight('thurstan', 'desktop', 'thurstan-1-img', 12, 1, '15%', 'none', 'none', 'none');
  }, 2000);
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

function hideIpad(section) {
  $('.ipad.'+section+' rect, .ipad.'+section+' polygon, .ipad.'+section+' path').each(function() {
    var x = getRandomInt(-1000, -800);
      var y = getRandomInt(-700, 300);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
}

function showMobile(section) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    $(this).css({
      visibility: 'visible',
      transform: 'translate(0px,0px)',
    })
  });
}

function hideMobile(section) {
  $('.mobile.'+section+' rect, .mobile.'+section+' polygon, .mobile.'+section+' path').each(function() {
    var x = getRandomInt(800, 1000);
      var y = getRandomInt(-300, 700);
      $(this).css({
        transform: 'translate(' + x + 'px,' + y + 'px)',
      })
  })
}

function setHeight(name, pixelType, imageGroup, divideBy, timesBy, top, marginTop, marginLeft, leftMarginByPosition) {
  var svg = $('.'+pixelType+'.'+name);
  var svgWidth=svg.width();
  var fixWidth = (svgWidth/divideBy) * timesBy;
  $('.'+imageGroup).css({width: fixWidth+'%' });
  if (top !== 'none') {
    $('.'+imageGroup).css({top: top });
  }
  if (marginTop !== 'none') {
    $('.'+imageGroup).css({marginTop: marginTop });
  }
  if (marginLeft !== 'none') {
    $('.'+imageGroup).css({marginLeft: marginLeft });
  }
  if (leftMarginByPosition !== 'none') {
    var leftMargin = ($('.'+name+'.'+pixelType).position().left) * leftMarginByPosition;
    $('.'+imageGroup).css({marginLeft: leftMargin });
  }
  $('#'+imageGroup+'-'+pixelType+'-rectangle').fadeIn();
  console.log('#'+imageGroup+'-'+pixelType+'-rectangle');
  $('.'+name+'.border').css({position: 'relative'});
  $('.'+imageGroup+' img').css({opacity: '1'});
}

// setHeight('thurstan', 'desktop', 'thurstan-1-img', 10, 8, '15%', 'none', 'none', 'none');
// setHeight('thurstan', 'ipad', 'thurstan-2-img-ipad', 16, 1, 'none', '17%', '6%', 'none');
// setHeight('thurstan', 'mobile', 'thurstan-2-img-mobile', 10, 1.8, 'none', '25%', 'none', 1.03);

// var mobileWidth = $('.thurstan.mobile').width();
// var mobileXPos = ($('.thurstan.mobile').position().left) * 1.03;
// var fixMHeight = (ipadHeight/10) * 1.8;
// var fixMWidth = (mobileWidth/19);
// $('.thurstan-2-img-mobile').css({
//   marginTop: '25%',
//   marginLeft: mobileXPos,
//   width: fixMWidth + '%'
// })

// function setHeight(name, imageGroup, divideBy, timesBy, top, marginTop, marginLeft) {
//   var svg = $('.desktop.thurstan');
//   var svgWidth=svg.width();
//   var fixWidth = (svgWidth/10) * 8;
//   $('.thurstan-1-img').css({top : '15%', width: fixWidth });
//   $('#rectangle').fadeIn();
//   $('.thurstan.border').css({position: 'relative'});
//   $('.thurstan-1-img img').css({opacity: '1'});
// }
//
// var ipadWidth = $('.thurstan.ipad').width();
// var fixWidth = (ipadWidth/16);
// $('.thurstan-2-img-ipad').css({
//   marginTop: '17%',
//   marginLeft: '6%',
//   width: fixWidth + '%'
// })
