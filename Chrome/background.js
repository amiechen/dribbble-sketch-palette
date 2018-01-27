function saveJsonToFile (filename, paletteJson) {
  var blob = new Blob([JSON.stringify(paletteJson, null, 2)], {type : 'application/json'})
  var url = URL.createObjectURL(blob);
  var filenameWithExtension = filename + '.sketchpalette';
  var options = {
    filename: filenameWithExtension,
    url: url
  };
  var msgFromCS;

  chrome.downloads.download(options, function(downloadId) {
    if (downloadId) {
      var title = chrome.i18n.getMessage("notificationTitle");
      chrome.notifications.create({
        "type": "basic",
        "title": title,
        "message": "Your sketch palette is generated"
      });
    } else {
      var error = chrome.runtime.lastError.toString();
      if (error.indexOf('Download canceled by the user') >= 0) {
        console.log('Save canceled.');
      } else {
        console.log('Error occured.');
      }
    }
  });
}

chrome.runtime.onMessage.addListener(msg => {
  saveJsonToFile(msg.filename, msg.paletteJson);
});