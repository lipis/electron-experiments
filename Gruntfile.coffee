electron_packager = require 'electron-packager'

module.exports = (grunt) ->
  require('load-grunt-tasks') grunt, pattern: ['grunt-*']
  grunt.initConfig
    pkg: grunt.file.readJSON 'electron/package.json'

    clean:
      build: 'build'
      dist: 'dist'

    electron:
      options:
        name: '<%= pkg.productName %>'
        dir: 'electron'
        out: 'build'
        version: '0.35.2'
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

    'create-windows-installer':
      internal:
        title: '<%= pkg.productName %>'
        version: '<%= pkg.version %>'
        author: 'Panayiotis Lipiridis'
        description: 'Some exeperiments with Electron'
        appDirectory: 'build/<%= pkg.productName %>-win32-ia32'
        outputDirectory: 'dist/<%= pkg.productName %>-win32-ia32'
        exe: '<%= pkg.productName %>.exe'

  grunt.registerMultiTask 'electron', 'Package Electron apps', ->
    done = this.async()
    electron_packager @options(), (error) ->
      if (error)
        grunt.warn error
      else
        done()

  grunt.registerTask 'build-win',  ['clean:build', 'electron:win']
  grunt.registerTask 'dist-win',   ['clean:dist', 'build-win', 'create-windows-installer']
