/**
 * Created by Administrator on 2017/7/18.
 */
var gruntHelp = require('./initTask.js');
module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            base: {
                src: 'snowCss/base.less',
                dest: 'snowCss/base.min.css'
            }
        }
    });

    gruntHelp.initTask(require('./JS/snowJs/grunt-config-file.js'));
    gruntHelp.initTask(require('./element-ui/grunt-config-file.js'));
    gruntHelp.initTask(require('./test/grunt-config-file.js'));
    gruntHelp.initTask(require('./demo/boya/grunt-config-file.js'));
    gruntHelp.initTask(require('./jingleCat/grunt-config-file.js'));

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
};