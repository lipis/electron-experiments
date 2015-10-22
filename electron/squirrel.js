'use strict';

const app = require('app');
const cp = require('child_process');
const fs = require('fs');
const path = require('path');


function executeSquirrelCommand(args, done) {
  const updateDotExe = path.resolve(path.dirname(process.execPath), '..', 'update.exe');
  fs.stat(updateDotExe, function(err, stats) {
    if (err) {
      return false;
    }
    var child = cp.spawn(updateDotExe, args, {detached: true});
    child.on('close', function(code) {
      done();
    });
  });
}


function updateSelfWin() {
  executeSquirrelCommand(['--update', 'https://dl.dropboxusercontent.com/u/15234/lipis/electron-experiments/'], function() {
    // On done :)
  });
}


function handleSquirrelEvent() {
  if (process.platform !== 'win32') {
    return false;
  }

  function install(done) {
    var target = path.basename(process.execPath);
    executeSquirrelCommand(['--createShortcut', target], done);
  }

  function uninstall(done) {
    var target = path.basename(process.execPath);
    executeSquirrelCommand(['--removeShortcut', target], done);
  }

  var squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
      install(app.quit);
      return true;
    case '--squirrel-updated':
      install(app.quit);
      return true;
    case '--squirrel-obsolete':
      app.quit();
      return true;
    case '--squirrel-uninstall':
      uninstall(app.quit);
      return true;
  }
  updateSelfWin();
  return false;
}

module.exports = {handleSquirrelEvent: handleSquirrelEvent};
