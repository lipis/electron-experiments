'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const ipc = require('electron').ipcMain;
const notifier = require('node-notifier');
const squirrel = require('./squirrel');


var main;

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipc.on('notify', function(event, notification) {
  notifier.notify({
    title: notification.title,
    message: notification.message,
    sound: false,
    wait: true,
  }, function(error, response) {
    console.log('Notification Error', response);
  });

  notifier.on('click', function (notifierObject, options) {
    main.show();
  });
});


app.on('ready', function() {
  main = new BrowserWindow({
    'min-size': 320,
    'min-height': 320
  });
  main.loadURL('file://' + __dirname + '/index.html');
});

squirrel.handleSquirrelEvent();
