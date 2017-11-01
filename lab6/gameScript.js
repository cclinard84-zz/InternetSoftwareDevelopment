// File: gameScript.js
// Author: Matt Clinard
// Date: 10-31-2017
// For use with chipClipGame.html

var wirePerChipClip = -1;
var plasticPerChipClip = -2;

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

//Calculates the public demand for the selling of clips
function calculatePublicDemand() {
  var marketingLevel = parseInt($('.marketingLevel').text());
  var price = parseFloat($('.pricePerChipClip').text());
  var marketing = (Math.pow(1.1, (marketingLevel)));
  var demand = ((.8) * marketing / (price * 3));
  demand = ((demand + (((demand / 100)))) * 100).toFixed(2);
  $('.publicDemand').text(demand);
};

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

function setAutoClipperInititalPrice() {
  var autoClipperPrice = 10;
  $('.autoClipperPrice').text(autoClipperPrice);
};
