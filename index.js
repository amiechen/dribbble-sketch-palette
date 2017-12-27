// main process javascript
const { app, BrowserWindow } = require('electron');
const path = require('path');
const { setMainMenu } = require('./main-menu.js');
let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  setMainMenu();
});
