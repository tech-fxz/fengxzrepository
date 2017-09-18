/**
 * Created by zhen on 2017/8/19.
 */
var Js_config = {
    rootDirectory: 'JS/snowJs/',
    Name: 'snowJs',
    Config: {
        concat: {
            snowJs: {
                src: [
                    'JS/snowJs/snowJs.js',
                    'JS/snowJs/ajaxs/ajax.js',
                    'JS/snowJs/tool/tool.js',
                    'JS/snowJs/dom/$s.js',
                    'JS/snowJs/control/chart/chart.js'
                ],
                dest: 'JS/snowJs/grunt/dev/snowJs.dev.js'
            }

        },
        uglify: {
            snowJs: {
                src: 'JS/snowJs/grunt/dev/snowJs.dev.js',
                dest: 'JS/snowJs/grunt/pro/snowJs.min.js'
            }
        },
        less: {
            snowJs: {
                src: ['JS/snowJs/snowJs.less'],
                dest: 'JS/snowJs/grunt/pro/snowJs.min.css'
            }
        }
    }
};
module.exports = Js_config;