/**
 * Created by zhen on 2017/8/19.
 */
var Js_config = {
    rootDirectory: 'demo/boya/',
    Name: 'boya',
    Config: {
        concat: {
            boya: {}
        },
        uglify: {
            boya: {
                //src: 'demo/boya/grunt/pro/boya.min.css',
                //dest:'demo/boya/grunt/pro/boya.min.css'
            }
        },
        less: {
            options:{
                sourceMap:true,
                outputSourceFiles:true
            },
            boya: {
                src: 'demo/boya/less/boya.less',
                dest: 'demo/boya/grunt/pro/boya.min.css'
            }
        }
    }
};
module.exports = Js_config;