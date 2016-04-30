module.exports=function(grunt){
    //任务配置，所有插件的配置信息
  grunt.initConfig({
      //获取 package.json 的信息
      project:'mousrewheel',
      pkg:grunt.file.readJSON('package.json'),
      concat:{
          options:{
              separator:';',
              stripBanners:true,
              banner:'/*<%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd HH:MM") %>*/\n'
          },
          build:{
              src:'src/swiper/mousewheel/view.js',
              dest:'grunt-build/dev/<%=project%>.dev.js'
          }
      },
      uglify:{
          options:{
              stripBanners:true,
              banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd HH:MM") %>*/\n'
          },
          build:{
              src:'src/swiper/mousewheel/view.js',
              dest:'grunt-build/pro/<%=project%>.min.js'
          }
      },
      jshint:{
          build:['Gruntfile','src/swiper/mousewheel/view.js'],
          options:{
              jshintrc:'.jshintrc'
          }
      },
      watch:{
          build:{
              files:['src/swiper/mousewheel/view.js'],
              tasks:['concat','uglify'],
              options:{spawn:false}
          }
      }
  });
    //告诉个grunt我们将使用哪些插件
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
    grunt.registerTask('default',['concat','uglify','watch','jshint']);

};