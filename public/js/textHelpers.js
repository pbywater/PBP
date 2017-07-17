function showBriefly(elementToShow) {
  elementToShow.fadeIn();
  setTimeout(function () {
    elementToShow.fadeOut();
  }, 1000);
}

function displayNone(elementToHide) {
  elementToHide.css('display', 'none');
}
