'use strict';

let ipc = require('electron').ipcRenderer;

var button = document.getElementById('notify');
var Notification = window.Notification;

button.addEventListener('click', function(event) {
  var instance = new window.Notification(
    'Hello, World!', {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'https://dl.dropboxusercontent.com/u/15234/wire/wire.png'
    }
  );

  instance.onclick = function () {
    // Something to do
  };
  instance.onerror = function () {
    // Something to do
  };
  instance.onshow = function () {
    // Something to do
  };
  instance.onclose = function () {
    // Something to do
  };
});
