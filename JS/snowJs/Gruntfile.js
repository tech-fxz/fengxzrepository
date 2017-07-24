/**
 * Created by Administrator on 2017/7/18.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            file: {
                src: [
                    'snowJs.js',
                    'ajax/ajax.js',
                    'tool/tool.js',
                    'control/chart/chart.js'
                ],
                dest: 'grunt/dev/snowJs.dev.js'
            }
        },
        uglify: {
            file: {
                src: 'grunt/dev/snowJs.dev.js',
                dest: 'grunt/pro/snowJs.min.js'
            }
        },
        less: {
            file: {
                src: ['snowJs.less'],
                dest: 'grunt/pro/snowJs.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['concat', 'uglify', 'less']);
};