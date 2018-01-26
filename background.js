function saveJsonToFile (filename, paletteJson) {
  var blob = new Blob([JSON.stringify(paletteJson, null, 2)], {type : 'application/json'})
  var url = URL.createObjectURL(blob);
  var filenameWithExtension = filename + '.sketchpalette';
  var options = {
    filename: filenameWithExtension,
    url: url
  };

  browser.downloads.download(options, function(downloadId) {
    if (downloadId) {
      console.log('saved json file.')
    } else {
      var error = browser.runtime.lastError.toString();
      if (error.indexOf('Download canceled by the user') >= 0) {
        console.log('Save canceled.');
      } else {
        console.log('Error occured.');
      }
    }
  });
}

browser.runtime.onMessage.addListener(msg => {
  saveJsonToFile(msg.filename, msg.paletteJson);
});

browser.browserAction.onClicked.addListener(() => {
  saveJsonToFile(paletteJson);
});