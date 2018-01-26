var colorChips = document.querySelectorAll('.color-chips > .color a');
var paletteJson = {
  "compatibleVersion": "1.4",
  "pluginVersion": "1.4",
  "colors": []
};
var filename = document.querySelector('.shot-byline-user a').getAttribute('href').slice(1);
var msg;

function hexToRGBA(hex) {
   hex = hex.replace('#', '');
   var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
   var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
   var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);

   return {
    "red": r/255,
    "green": g/255,
    "blue": b/255,
    "alpha": 1
   };
}

for (var i=0; i < colorChips.length; i++) {
  var hex = colorChips[i].getAttribute('title');
  paletteJson.colors.push(hexToRGBA(hex));
}

msg = {
  filename: filename,
  paletteJson: paletteJson
};

browser.runtime.sendMessage(msg);
