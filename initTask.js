/**
 * Created by zhen on 2017/8/19.
 */
var grunt = require('grunt');
var initTask = function (gruntObject) {
    var projectName = gruntObject.Name;
    var projectConfig = gruntObject.Config;

    var jshintCreate = function () {
        projectConfig.jshint = {};
        projectConfig.jshint[projectName] = {};
        projectConfig.jshint[projectName].files = {
            src: [gruntObject.rootDirectory + 'grunt/dev/' + projectName + '.dev.js']
        };
        projectConfig.jshint[projectName].option = {
            jshintrc: '.jshintrc',
            force: true//Set force to true to report JSHint errors but not fail the task.
        };
    };

    var concatName = 'concat:' + projectName;
    var uglifyName = 'uglify:' + projectName;
    var lessName = 'less:' + projectName;
    var jshintName = 'jshint:' + projectName;

    jshintCreate();

    grunt.config.merge(projectConfig);
    grunt.registerTask(projectName, [concatName, lessName]);
    // grunt.registerTask(projectName, [concatName,jshintName, uglifyName, lessName]);
    // grunt.registerTask(projectName, [concatName,jshintName, uglifyName, lessName]);
};

module.exports = {initTask: initTask};