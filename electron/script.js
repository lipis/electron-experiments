'use strict';

let ipc = require('ipc');

var button = document.getElementById('notify');

button.addEventListener('click', function(event) {
  ipc.send('notify', {
    'title': 'Hello, World!',
    'message': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  });
});
