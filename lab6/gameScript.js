// File: gameScript.js
// Author: Matt Clinard
// Date: 10-31-2017
// For use with chipClipGame.html

var wirePerChipClip = -1;
var plasticPerChipClip = -2;

//This function handles all the logic for buying auto clippers
function buyAutoClippers() {
  var availableFunds = parseFloat($('.availableFunds').text());
  autoClipperLevel = parseInt($('.autoClipperLevel').text());
  var autoClipperPrice = parseInt($('.autoClipperPrice').text());
  if (autoClipperLevel == 0 && availableFunds >= autoClipperPrice) {
    autoClipperLevel = 0 + 1;
    availableFunds = availableFunds - autoClipperPrice;
    $('.autoClipperLevel').text(autoClipperLevel);
    $('.availableFunds').text(availableFunds);
    autoClipperPrice = autoClipperPrice + autoClipperPrice * .25;
    $('.autoClipperPrice').text(autoClipperPrice);
  } else if (availableFunds >= autoClipperPrice) {
    autoClipperLevel = parseInt($('.autoClipperLevel').text());
    autoClipperLevel = autoClipperLevel + 1;
    availableFunds = availableFunds - autoClipperPrice;
    $('.availableFunds').text(availableFunds);
    $('.autoClipperLevel').text(autoClipperLevel);
    autoClipperPrice = autoClipperPrice + autoClipperPrice * .25;
    $('.autoClipperPrice').text(autoClipperPrice);
  } else {
    return;
  }
};

//This function creates clips based on how many auto clippers you have
setInterval(function() {
  var wire = parseInt($('.wireRemaining').text());
  var plastic = parseInt($('.plasticRemaining').text());
  var newChipCounter = parseInt($('.chipClipCounter').text());
  var newWireRemaining;
  var newPlasticRemaining;
  var autoClipperLevel = parseInt($('.autoClipperLevel').text());
  if (autoClipperLevel > 0) {
    var unsoldClips = parseInt($('.unsoldClips').text());
    unsoldClips = unsoldClips + autoClipperLevel;
    newWireRemaining = wire + wirePerChipClip * autoClipperLevel;
    newPlasticRemaining = plastic + plasticPerChipClip * autoClipperLevel;
    $('.wireRemaining').text(newWireRemaining);
    $('.plasticRemaining').text(newPlasticRemaining);
    $('.unsoldClips').text(unsoldClips);
    $('.chipClipCounter').text(newChipCounter + autoClipperLevel)
  }
}, 1000);

//This funciton initially sets the price of the autoclippers
function setAutoClipperInititalPrice() {
  var autoClipperPrice = 10;
  $('.autoClipperPrice').text(autoClipperPrice);
};
