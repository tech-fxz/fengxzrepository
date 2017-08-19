/**
 * Created by zhen on 2017/8/19.
 */
var grunt = require('grunt');
var initTask = function (gruntObject) {
    var projectName = gruntObject.Name;
    var projectConfig = gruntObject.Config;
    var concatName = 'concat:' + projectName;
    var uglifyName = 'uglify:' + projectName;
    var lessName = 'less:' + projectName;

    grunt.config.merge(projectConfig);
    grunt.registerTask(projectName, [concatName, uglifyName, lessName]);
};

module.exports = {initTask: initTask};