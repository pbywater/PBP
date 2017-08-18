
function pixelAnimation(element) {
jQuery(element).on('mouseover', function() {
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
}

function mobileColours() {
  jQuery('.mobile').on('click', function() {
    var randomNum = getRandomInt(0, 3);
    var colours = ['#c4e6ef', '#cdb6e7', '#9bfeca', '#ff8f93'];
    var randomColour = colours[randomNum];
    jQuery(this).css({
      height: '25px',
      width: '25px',
      fill: randomColour
    });
  });
}

function desktopColours() {
  jQuery('.initial').on('click', function() {
    jQuery(this).css({
      height: '25px',
      width: '25px',
      fill: '#ff8f93'
    });
    jQuery(this).addClass('clicked').removeClass('initial').off('mouseover');

  });
}
