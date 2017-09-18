# 前端开发笔记之浏览器缓存篇
### 浏览器缓存有5种方式：cookie、session、session storage、local storage、 web storage
***
### cookie
```
cookie实际上是一小段的文本信息。浏览器会把cookie存起来，当浏览器再请求网站时，浏览器把请求网址和cookie一同提交给服务器。
PS：cookie功能需要浏览器的支持。如果浏览器不支持cookie（如大部分的手机浏览器）或者把cookie禁用了，cookie就不能用了。
```

#### cookie的几个特效：
* cookie的有效期：cookie的maxAge决定cookie的有效期，单位为秒（s）。通过getMaxAge()方法与setMaxAge()方法读写maxAge属性。
  >maxAge值为正数：表示cookie在maxAge秒后自动失效。浏览器会将maxAge为正数的cookie持久化，无论客户关闭了浏览器还是电脑，在maxAge秒之前登录网站时该cookie仍有效。
如下代码实现永久持久化（java代码）：
  ```
    Cookie cookie=new Cookie("userName","hello");//新建cookie
    cookie.setMaxAge(Interger.MAX_VALUE);//设置生命周期为MAX_VALUE
    response.addCookie(cookie);//输出客户端
    ```
  >maxAge值为负数、则表示该cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该cookie即失效。maxAge为负数的cookie、为临时性cookie、不会被持久化，不会被写到cookie文件中，cookie的默认值为-1。
  >maxAge值为0、则表示删除cookie。Cookie机制没有提供删除Cookie的方法，因此通过设置该Cookie即时失效实现删除Cookie的效果。例如：
   ```
   Cookie cookie=new Cookie('userName','hello');
   cookie.setMaxAge(0);
   response.addCookie(cookie)
   ```

* cookie 的域名：cookie的域名是不可跨越的。即域名www.google.com颁发的Cookie不会被提交到域名www.baidu.com去
* cookie的安全属性：HTTP协议不仅是无状态的而且是不安全的。使用http协议的数据不经过数据加密就直接在网络上传播，有被截获的可能。如果不希望Cookie在HTTP等非安全协议中传输，可以设置Cookie的secure属性为true。如：
    > ```
    Cookie cookie=new Cookie('userName','hello');
    cookie.secure=true;
    response.addCookie(cookie);
    ```
* JavaScript操作Cookie
    > ```
    var cookie = {
        set:function(key,val,time){//设置cookie方法
            var date=new Date(); //获取当前时间
            var expiresDays=time;  //将date设置为n天以后的时间
            date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
            document.cookie=key + "=" + val +";expires="+date.toGMTString();  //设置cookie
        },
        get:function(key){//获取cookie方法
            /*获取cookie参数*/
            var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
            var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
            var tips;  //声明变量tips
            for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
                var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
                if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                    tips=arr[1];   //将cookie的值赋给变量tips
                    break;   //终止for循环遍历
                }
            },
        delete:function(key){ //删除cookie方法
            var date = new Date(); //获取当前时间
            date.setTime(date.getTime()-10000); //将date设置为过去的时间
            document.cookie = key + "=v; expires =" +date.toGMTString();//设置cookie
           }
            return tips;
        }
    }
    ```
    
# Web Storage

## 缺陷：
```
* 数据以简单字符串存储；
* 默认5MB的存储限制；如果需要时可由用户允许获取更大存储
* 可被用户或者系统管理禁用
* 复杂数据集合存储可能很慢
```

## 长处：
```
* APP可以在在线或离线的情况下使用
* 用简单好用易学的API
* 能够对浏览器使用事件钩子，如offline、online、storage change
* 提供更大的空间已存贮日益剧增的复杂数据
```

## 带来的好处：
```
减少网络流量：一旦数据保存本地后，就可以避免再向服务器请求数据
快速显示数据：性能好，从本地读取数据比通过网络从服务器获取数据快得多，本地数据可以立即获得，加上网页本身也可以缓存，因此整个页面和数据都在本地的话，可以立即显示
临时存储：很多时候数据只需要在用户浏览一组页面期间使用，关闭窗口后数据可以丢弃，这种情况使用sessionStorage非常方面
```

> method                                   description
localStorage.clear()              clear all records out of storage
localStorage.getItem(key)         retrieve an item form storage
localStorage.setItem(key,value)   add an item to storage
localStorage.removeItem(key)      removes an item from storage


## 事件
### storage：
```
在localStorage和sessionStorage具有相同的方法storage事件，在存储事件的处理函数中是不能取消存储动作的。storage事件只是浏览器在数据发生变化后给你的通知,
当setItem(),removeItem(),clear()方法被调用，并且数据真的发生了改变时，storage就会被触发，如果存储区域是空的，再去调clear是不会发生触发事件的
```

