module.exports = function(grunt) {

  grunt.initConfig({


  // minify css
  cssmin: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css'],
          dest: 'assets/css',
          ext: '.min.css'
      }]
    }
  },


  // convert less files in assets/less/*.less to assets/css/*.css
  less: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'assets/less',
          src: ['*.less'],
          dest: 'assets/css',
          ext: '.css'
      }]
    }
  },

  // convert js files in assets/js/*.js to assets/min.js/*.min.js
  uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'assets/js',
          src: '**/*.js',
          dest: 'assets/min.js',
          ext: '.min.js'
      }]
    }
  },

  // convert js files in assets/js/*.js to assets/min.js/*.min.js
  concat: {
    dist: {
      src: ['assets/**/*.js'],
      dest: 'assets/output.js'
    }
  },

  jshint: {
    beforeconcat: ['assets/**/*.js'],
    afterconcat: ['assets/*-error.js']
  },

//


/*

                  ###########
                  WATCH FILES
                  ###########

*/


  // make 'grunt watch' task in bash available
  // watch over any alterations in assets/less and assets/js
  watch: {

    less: {
      files: ['assets/less/*.less'],
      tasks: ['less'],
      options: {
        spawn: false,
      },
    },

    scripts: {
      files: ['assets/js/*.js'],
      tasks: ['uglify'],
      options: {
        spawn: false,
      },
    },

    cssmin: {
      files: ['assets/css/*.css'],
      tasks: ['cssmin'],
      options: {
        spawn: false,
      },
    },

  },



  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  
  grunt.registerTask('default', [
    'less',
    'uglify'
    ]);


};
