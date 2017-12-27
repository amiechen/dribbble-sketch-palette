const { remote } = require('electron');
const path = require('path');
require('devtron').install();

console.log(remote);

document.querySelector('#new-btn').addEventListener('click', () => {
  const newWindow = new remote.BrowserWindow();
  console.log('inside renderer call');
  newWindow.loadURL(path.join('file://', __dirname, 'index.html'));
});