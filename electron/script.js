'use strict';

let ipc = require('electron').ipcRenderer;

var button = document.getElementById('notify');

button.addEventListener('click', function(event) {
  ipc.send('notify', {
    'title': 'Hello, World!',
    'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
});
