var colorChips = document.querySelector('.color-chips');
var filename = document.querySelector('.shot-byline-user a').getAttribute('href').slice(1);
var colors = colorChips.querySelectorAll('.color');
var msg = {
  filename: filename,
  paletteJson: getPaletteJson(colors)
};

insertBtnToPage(createBtn(msg), colorChips, colors);