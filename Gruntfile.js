module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      dist: {
        options: {
          paths: [],
          compress: true,
          yuicompress: true,
          optimization: 2,
          cleancss: true
        },
        files: {"css/compiled.css": "less/bootstrap.less"}
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions'],
          })
        ]
      },
      dist: {
        src: 'css/compiled.css'
      }
    },

    concat: {
      js: {
        src: [
          'js/flipclock.js',
          'js/owl.carousel.js',
          'js/marathonlviv.js'
        ],
        dest: 'js/compiled.min.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! Site: <%= pkg.name %>; Version: <%= pkg.version %>; Author: <%= pkg.author %>; Last modification: <%= grunt.template.today("yyyy-mm-dd")%>. */\n'
      },
      dist: {
        files: {'js/compiled.min.js': ['<%= concat.js.dest %>']}
      }
    },

    watch: {
      options: {
        livereload: true,
        nospaces: true
      },
      scripts: {
        files: ['<%= concat.js.src %>'],
        tasks: ['concat','uglify'],
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less','postcss']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['watch']);
};
