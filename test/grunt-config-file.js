/**
 * Created by zhen on 2017/8/19.
 */
var Js_config = {
    Name: 'test',
    Config: {
        concat: {
            test: {
                src: 'test/main.js',
                dest: 'test/grunt/dev/test.dev.js'
            }
        },
        uglify: {
            test: {
                src: 'test/grunt/dev/test.dev.js',
                dest: 'test/grunt/pro/test.min.js'
            }
        },
        less: {
            test: {
                src: 'test/test.less',
                dest: 'test/grunt/pro/test.min.css'
            }
        }
    }
};
module.exports = Js_config;