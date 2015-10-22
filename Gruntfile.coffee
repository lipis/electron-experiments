electron_packager = require 'electron-packager'

module.exports = (grunt) ->
  grunt.initConfig
    electron:
      options:
        name: 'Electron Experiments'
        dir: 'electron'
        out: 'build'
        version: '0.34.0'
        arch: 'all'
        asar: true
        overwrite: true
        cache: 'cache'
      osx:
        options:
          platform: 'darwin'
      win:
        options:
          platform: 'win32'
          arch: 'ia32'

  grunt.registerMultiTask 'electron', 'Package Electron apps', ->
    done = this.async()
    electron_packager @options(), (error) ->
      if (error)
        grunt.warn error
      else
        done()
