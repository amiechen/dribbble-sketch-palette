document.arrive(".color-chips", function() {
  console.log('color-chips: ', this);
  var filename = document.querySelector('.shot-byline-user a').getAttribute('href').slice(1);
  var colors = this.querySelectorAll('.color');
  var msg = {
    filename: filename,
    paletteJson: getPaletteJson(colors)
  };

  insertBtnToPage(createBtn(msg), this, colors);
});