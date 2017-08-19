/**
 * Created by Administrator on 2017/7/18.
 */
var gruntHelp = require('./initTask.js');
module.exports = function (grunt) {
    gruntHelp.initTask(require('./JS/snowJs/grunt-config-file.js'));
    gruntHelp.initTask(require('./test/grunt-config-file.js'));

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

};