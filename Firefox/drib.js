var colorChips = document.querySelector('.color-chips');
var colors = document.querySelectorAll('.color-chips > .color');
var btn = document.createElement('div');
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

// add class and style to the btn
btn.classList.add('dribbble-sketch-btn');
btn.innerText = 'S';
btn.style.cssText = 'float: left; padding: 4px 6px; font-size: 0.8em; margin-right: 10px; margin-left: -4px; color: white; border-radius: 3px; display:inline-block; cursor:pointer; background-color: #a2a2a2;';
colorChips.insertBefore(btn, document.querySelector('.color-chips > .color'));

for (var i=0; i < colors.length; i++) {
  var hex = colors[i].querySelector('a').getAttribute('title');
  // shorten the width of each color chip
  colors[i].style.width = '10%';

  // add missing rounded border radius to first color chip
  colors[0].querySelector('a').style.borderTopLeftRadius = '3px';
  colors[0].querySelector('a').style.borderBottomLeftRadius = '3px';

  // add each hex to json
  paletteJson.colors.push(hexToRGBA(hex));
}

msg = {
  filename: filename,
  paletteJson: paletteJson
};

document.querySelector('.dribbble-sketch-btn').addEventListener("mouseover", function() {
  this.style.backgroundColor = '#444444';
});

document.querySelector('.dribbble-sketch-btn').addEventListener("mouseout", function() {
  this.style.backgroundColor = '#a2a2a2';
});

document.querySelector('.dribbble-sketch-btn').addEventListener("click", function() {
  browser.runtime.sendMessage(msg);
});
