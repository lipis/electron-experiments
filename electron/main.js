'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const squirrel = require('./squirrel');


var main;


app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('ready', function() {
  main = new BrowserWindow({
    'min-size': 320,
    'min-height': 320
  });
  main.loadURL('file://' + __dirname + '/index.html');
});


squirrel.handleSquirrelEvent();
