# 使用 NodeJS+Express 开发服务端

### 1、安装安装Express
````
 npm install express -g
 npm install express-generator -g
````
### 2、初始化项目

````
cd E:\fengxzrepository\NodeJs
express 项目名称
````
### 3、安装node_moudules
````
1.cd APIServer //进入项目根目录
2.npm install  //安装node_moudules
````
 >/bin:用来启动应用（服务器）
 /public: 存放静态资源目录
 /routes：路由用于确定应用程序如何响应对特定端点的客户机请求，包含一个 URI（或路径）和一个特定的 HTTP 请求方法（GET、POST 等）。每个路由可以具有一个或多个处理程序函数，这些函数在路由匹配时执行。
 /views: 模板文件所在目录 文件格式为.jade
 目录app.js程序main文件 这个是服务器启动的入口

### 4、启动服务器
````
npm start
````
>启动完成后终端将输出 node ./bin/www
在浏览器中访问 http://localhost:3000/
