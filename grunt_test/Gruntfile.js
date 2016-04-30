module.exports=function(grunt){
    //�������ã����в����������Ϣ
  grunt.initConfig({
      //��ȡ package.json ����Ϣ
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
    //���߸�grunt���ǽ�ʹ����Щ���
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    //����grunt���������ն�������gruntʱ��Ҫ��Щʲô��ע���Ⱥ�˳��
    grunt.registerTask('default',['concat','uglify','watch','jshint']);

};