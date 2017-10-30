var autoClipperLevel = 0;
var wirePerChipClip = -1;
var plasticPerChipClip = -2;

function buyAutoClippers() {
  var availableFunds = parseFloat($('.availableFunds').text());
  var autoClipperPrice = 10;
  if (autoClipperLevel == 0 && availableFunds > autoClipperPrice) {
    autoClipperLevel = autoClipperLevel + 1;
    availableFunds = availableFunds - autoClipperPrice;
    $('.availableFunds').text(availableFunds);
  } else {
    autoClipperPrice = ((autoClipperLevel + 1) * 10);
    autoClipperPrice = autoClipperPrice + autoClipperPrice * .25;
    if (autoClipperPrice <= availableFunds) {
      autoClipperLevel = autoClipperLevel + 1;
      availableFunds = availableFunds - autoClipperPrice;
      $('.availableFunds').text(availableFunds);
    }
  }
};

setInterval(function() {
  var wire = parseInt($('.wireRemaining').text());
  var plastic = parseInt($('.plasticRemaining').text());
  if (autoClipperLevel > 0) {
    var unsoldClips = parseInt($('.unsoldClips').text());
    if (unsoldClips == 0) {
      unsoldClips = autoClipperLevel;
    } else {
      unsoldClips = unsoldClips + autoClipperLevel;
    }
    $('wireRemaining').text(wire + wirePerChipClip * autoClipperLevel);
    $('plasticRemaining').text(plastic + plasticPerChipClip * autoClipperLevel);
    $('.unsoldClips').text(unsoldClips);
  }
}, 1000);

function setAutoClipperInititalPrice() {
  var autoClipperPrice = 10;
  $('.autoClipperPrice').text(autoClipperPrice);
};
