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
        file.type = 'text/plain';
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

    var file = document.getElementById('fileid');

    addFile();
};