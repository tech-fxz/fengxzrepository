/**
 * Created by Administrator on 2017/7/24.
 */
window.onload = function () {
    var data = [
        {y: '120', x: '2016年6月'},
        {y: '530', x: '2016年7月'},
        {y: '340', x: '2016年8月'},
        {y: '440', x: '2016年9月'},
        {y: '800', x: '2016年10月'},
        {y: '670', x: '2016年11月'},
        {y: '760', x: '2016年12月'},
        {y: '400', x: '2017年01月'}
    ];
    var chart = new snowJs.Chart({
        type: 'bar',
        data: data
    });
};

var save_click = function () {
    var uploadFile = function () {
        var file = new File(['dffsdfsfsfsdfsd'], 'newFile.txt');
        var obj = {};
        obj.method = 'post';
        obj.type = 'file';
        obj.url = 'http://localhost:37871/UploadHandler.ashx';
        obj.async = true;
        obj.file = file;
        obj.success = function (data) {
            console.log(data);
        };
        obj.error = function (error) {
            console.log(error);
        };
        obj.data = {id: 1};
        snowJs.Ajax(obj);
    };

    var addFile = function () {
        var queryParam = {};
        queryParam.method = 'get';
        queryParam.data = 'this is create file';
        queryParam.url = web.config.apiHost + '/createfiles';
        queryParam.success = function (data) {
            debugger;
            uploadFile();
        };
        queryParam.error = function () {
        };
        snowJs.Ajax(queryParam);
    };

    var blobTaste = function () {
        var file = new Blob(['sdsssssdsdsdsd'], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        var url = window.URL.createObjectURL(file);
        console.log(url);
        window.open(url, '_blank');
    };

    var file = document.getElementById('fileid');

    //addFile();
    //blobTaste();
    uploadFile();
};

var setBuffer = function () {
    var str = "支持中文吗? ying gai shi zhi chi de.";
    console.log('编码前:' + str);

    var encode=function(){
        var total2str = "";
        for (var i = 0; i < str.length; i++) {
            var num10 = str.charCodeAt(i);  ///< 以10进制的整数返回 某个字符 的unicode编码
            var str2 = num10.toString(2);   ///< 将10进制数字 转换成 2进制字符串


            if (total2str == "") {
                total2str = str2;
            } else {
                total2str = total2str + " " + str2;
            }
        }
        console.log('编码前:' + str);
    };
    var decode=function(){
        var goal = "";
        var arr = total2str.split(' ');
        for(var i=0; i < arr.length; i++){
            var str2 = arr[i];
            var num10 = parseInt(str2, 2); ///< 2进制字符串转换成 10进制的数字
            goal += String.fromCharCode(num10); ///< 将10进制的unicode编码, 转换成对应的unicode字符
        }

        console.log('解码后:'+ goal );
    };

    encode();
    decode();
};

setBuffer();