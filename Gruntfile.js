module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    devserver: {
      server: {
        type: "http", 
        port: 8000
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-devserver');
  
  // Default task(s).
  grunt.registerTask('default', ['devserver']);

};