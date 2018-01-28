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

function insertBtnToPage (btn, colorChips, colors) {
  colorChips.insertBefore(btn, colors[0]);

  // shorten the width of each color chip
  // add missing rounded border radius to first color chip
  for (var i=0; i < colors.length; i++) {
    colors[i].style.width = '10%';
    colors[0].querySelector('a').style.borderTopLeftRadius = '3px';
    colors[0].querySelector('a').style.borderBottomLeftRadius = '3px';
  }
}

function createBtn (msg) {
  var btn = document.createElement('div');

  btn.classList.add('dribbble-sketch-btn');
  btn.innerText = 'S';
  btn.style.cssText =
  ` 
    float: left;
    padding: 4px 6px;
    font-size: 0.8em;
    margin-right: 10px;
    margin-left: -4px;
    color: white;
    border-radius: 3px;
    display:inline-block;
    cursor:pointer;
    background-color: #a2a2a2;
  `;

  btn.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#444444';
  });

  btn.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#a2a2a2';
  });

  btn.addEventListener('click', function() {
    chrome.runtime.sendMessage(msg);
  });

  return btn;
}

function getPaletteJson (colors) {
  var paletteJson = {
    "compatibleVersion": "1.4",
    "pluginVersion": "1.4",
    "colors": []
  };

  for (var i=0; i < colors.length; i++) {
    var hex = colors[i].querySelector('a').getAttribute('title');

    // add each hex to json
    paletteJson.colors.push(hexToRGBA(hex));
  }

  return paletteJson;
}