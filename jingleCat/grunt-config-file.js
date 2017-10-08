/**
 * Created by zhen on 2017/8/19.
 */
var jingleCat_config = {
    rootDirectory:'jingleCat/',
    Name: 'jingleCat',
    Config: {
        concat: {
            jingleCat: {
            }
        },
        uglify: {
            jingleCat: {
            }
        },
        less: {
            jingleCat: {
                src: 'jingleCat/jingleCat.less',
                dest: 'jingleCat/grunt/pro/jingleCat.min.css'
            }
        }
    }
};
module.exports = jingleCat_config;