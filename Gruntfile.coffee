electron_packager = require 'electron-packager'

module.exports = (grunt) ->
  grunt.initConfig
    electron:
      win:
        options:
          name: 'Resize'
          dir: 'electron'
          out: 'build'
          version: '0.34.0'
          platform: 'win32'
          arch: 'ia32'
          asar: true
          overwrite: true
          cache: 'cache'

  grunt.registerMultiTask 'electron', 'Package Electron apps', ->
    done = this.async()
    electron_packager @options(), (error) ->
      if (error)
        grunt.warn error
      else
        done()
