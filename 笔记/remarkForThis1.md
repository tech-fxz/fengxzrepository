# 前端开发笔记之this篇

## this
````
可以是全局对象、当前对象或者任意对象，这取决于函数的调用方式。谁调用该函数，该函数的this指向的就是谁
````

### this有四种调用方式：
* 作为对象方法调用
````
this.f=1;
var p={
s:function(){
    this.f=2;
    alert('window:'+window.f);//window:1
    alert('p:'+p.f);//p:2
  }
};
p.s();
得结论：s的this指向p
````
* 作为函数调用
```
this.f=1;
var s=function(){
this.f=2;
alert('window:'+window.f);//window:2
alert('s:'+this.f);//s:2
};
s();//s()===window.s()
得结论：s的this指向window（全局变量）
```
* 作为构造函数调用
```
this.f=1;
var s=function(){
this.f=2;
};
var p=new s();

alert('window:'+window.f);//window:1
alert('p:'+p.f);//s:2
得结论：s的this指向p;
```
* 使用apply或call抵用
```
this.f=1;
var s=function(i){
this.f=i||2;
};

var p={};
var p1={};
s.apply(p);
s.call(p1,3);
alert('window:'+window.f);//window:1
alert('p:'+p.f);//s:2
alert('p1:'+p1.f);//s:3
得结论：s的this指向p(apply)或指向p1（call）
```
#### 特殊调用方式
```
   this.f = 1;
    var s = function (i) {
        this.f = 2;
        console.log(window.f);
        return function () {
            this.f = 3;
            console.log(window.f);
        };
    };
    var p = {};
    p.s = s;
    p.s();//1
    console.log('==========================这是一条华丽丽的分界线===========================');
    p.s()();// 1、3
    解析：p.s()()；即：var p1=p.s()（this指向p）; p1()；（p1()===window.p1()this指向window）
```
