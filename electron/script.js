'use strict';

let ipc = require('electron').ipcRenderer;

var button = document.getElementById('notify');
var Notification = window.Notification;

button.addEventListener('click', function(event) {
  var instance = new Notification(
    'Hello, World!', {
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
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
