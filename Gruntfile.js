// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),
      coffeelint: {
        app: ['*.coffee']
      },
      shell: {
        cup_compile: {
          command: "/usr/bin/coffee --compile ./*.coffee "
        }
      },
      uglify: {
        build: {
          files: [
            {
              expand: true,
              src: 'src/*.js',
              dest: './'
            }
          ]
        }
      },
      watch: {
        scripts: {
          files: ['Gruntfile.coffee', '*.coffee'],
          tasks: ["shell:cup_compile", "notify"],
          options: {
            spawn: false,
            event: ['all']
          }
        }
      },
      notify: {
        options: {
          enabled: true,
          title: "Oblique",
          success: false,
          duration: 2
        },
        cup_compile: {
          options: {
            message: '¡ code compiled !'
          }
        },
        uglify: {
          options: {
            message: '¡ code minimized !'
          }
        }
      }
    });
    return grunt.registerTask('default', 'watch');
  };

}).call(this);
