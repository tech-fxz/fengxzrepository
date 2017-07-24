/**
 * Created by Administrator on 2017/7/24.
 */
window.onload = function () {
    var data = [
        {y: '100', x: '2016年6月'},
        {y: '200', x: '2016年7月'},
        {y: '300', x: '2016年8月'},
        {y: '400', x: '2016年9月'},
        {y: '500', x: '2016年10月'},
        {y: '600', x: '2016年11月'}
    ];
    var chart = new snowJs.Chart({
        type: 'bar',
        data: data
    });

    var obj = {};
    obj.type = 'get';
    obj.url = web.config.apiHost + '/users/getUserInfo';
    obj.async = true;
    obj.success = function (data) {
        console.log(data);
    };
    obj.error = function (error) {
        console.log(error);
    };
    snowJs.Ajax(obj);
};