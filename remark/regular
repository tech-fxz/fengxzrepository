# 前端开发笔记之正则篇
### 正则函数集合
* match方法使用正则表达式模式对字符串执行查找，并将包含查找的结果以数组返回
```
var str='dssdsd123vcv325dfd';
var newStr=str.match(/d/);//["d"]
var newStrGlable=str.match(/d/g);//["d","d","d","d","d"]
注释：匹配了全局标记g将出现所以匹配项，而不需要循环
```
* regExp方法为包含正则表达式模式和可用标志的正则表达式对象。reExp对象有3个方法
```
var patt1=new RegExp('[a-z]|[A-Z]|[0-9]');

//test 方法检索字符串中的指定值。返回值是 true 或 false。
patt1.test('dssdsd');//true
patt1.test('121234');//true
patt1.test('12sds3');//true
patt1.test('qsds+++');//true
patt1.test('======');//fasle

//exec() 方法检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
patt1.exec('dssdsd')；//['d']
patt1.exec('121234')；//['1']
patt1.exec('12sds3')；//['1']
patt1.exec('qsds+++')；//qsds
patt1.exec('======')；//null
```
* replace用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
```
var str='==//;545;sdsd[ADF[';
str.replace(/[a-z]|[A-Z]|[0-9]/,'=');// ==//;=45;sdsd[ADF[ 只匹配了第一个符合正则的字符

var str1='==//;545;sdsd[ADF[';
str1.replace(/[a-z]|[A-Z]|[0-9]/g,'=');// ==//;===;====[===[ 全局匹配
```