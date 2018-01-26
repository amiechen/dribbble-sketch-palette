document.body.style.border = "5px solid red";
var colorChips = document.querySelectorAll('.color-chips > .color a');
var paletteJson = {
  "compatibleVersion": "1.4",
  "pluginVersion": "1.4",
  "colors": []
};

for (var i=0; i < colorChips.length; i++) {
  var hex = colorChips[i].getAttribute('title');
  paletteJson.colors.push(hex);
}

console.log(paletteJson);