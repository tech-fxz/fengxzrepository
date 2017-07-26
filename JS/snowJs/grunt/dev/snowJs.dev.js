/**
 * Created by Administrator on 2017/7/18.
 */
var snowJs = {};
/**
 * Created by Administrator on 2017/7/24.
 */
snowJs.Ajax = function (param) {
    var createXHR = function () {
        if (typeof XMLHttpRequest != 'undefined') {
            return new XMLHttpRequest();
        } else if (typeof ActiveXObject != 'undefined') {
            if (typeof arguments.callee.activeXSting != 'string') {
                var versions = [
                    "MSXML2.XMLHttp.6.0",
                    "MSXML2.XMLHttp.3.0",
                    "MSXML2.XMLHttp"
                ];
                for (var i = 0, len = versions.length; i < len; i++) {
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXSting = versions[i];
                        break;
                    } catch (error) {
                    }
                }
            }

            return new ActiveXObject(arguments.callee.activeXString);
        } else {
            throw new Error('no XHR object available');
        }
    };

    var response = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            if (typeof(param.success ) === 'function') {
                param.success(xhr.responseText);
            }
        } else {
            if (typeof (param.error) === 'function') {
                param.error(xhr.responseText);
            }
        }
    };

    var parameter = {};

    parameter.method = param.method || 'get';
    parameter.async = param.async || true;
    parameter.url = param.url;

    var formDate;
    if (param.type === 'file') {
        formDate = new FormData();

        formDate.append('Filename', 'text.txt');
        formDate.append('TypeDir', 'pluploadfile');
        formDate.append('aaa', '111');
        formDate.append('bbb', '222');
        formDate.append('Upload', 'Submit Query');
        formDate.append('Filedata', param.file);
    } else {
        formDate = param.data;
    }

    var xhr = createXHR(parameter.method, parameter.url, parameter.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            response();
        }
    };

    xhr.open(param.method, param.url, param.async);
    xhr.send(formDate);

    if (param.async) {
        response();
    }
};
/**
 * Created by Administrator on 2017/7/18.
 */
snowJs.tool = {};

snowJs.tool.each = function (list, fn) {
    for (var i = 0; i < list.length; i++) {
        fn(list[i], i);
    }
};

snowJs.tool.extend = function (destination, source, isReference) {
    if (!destination) {
        destination = {};
    }

    for (var i in source) {
        destination[i] = source[i];
    }
};

snowJs.tool.getRandom = function () {
    var date = new Date();
    var val = date.valueOf();
    return val;
};

snowJs.tool.createElement = function (param) {
    try {
        var id = param.id || '';
        var tag = param.tag || 'div';
        var cssClass = param.cssClass || '';

        var tag = document.createElement(tag);


        tag.setAttribute('class', cssClass);
        tag.setAttribute('id', id);
    } catch (error) {
    }
    return tag;
};

snowJs.tool.serialize = function (form) {
    var parts = [],
        filed = null,
        i,
        len,
        j,
        optlen,
        option,
        optValue;
    for (i = 0, len = form.elements.length; i < len; i++) {
        filed = form.elements[i];
        switch (filed.type) {
            case 'select-one':
            case 'select-multiple':
                if (filed.name.length) {
                    for (j = 0, optlen = filed.options.length; j++;) {
                        option = filed.options[j];
                        if (option.selected) {
                            optValue = '';
                            if (option.hasAttribute) {
                                optValue = (option.hasAttribute('value') ? option.value : option.text);
                            } else {
                                optValue = (option.attributes['value'].specified ? option.value : option.text);
                            }
                            parts.push(encodeURIComponent((filed.name)) + '=' + encodeURIComponent(filed.value));
                        }
                    }
                }
                break;
            case  undefined:
            case 'file':
            case 'submit':
            case  'reset':
            case 'button':
                break;
            case 'radio':
            case 'checkbox':
                if (!filed.checked) {
                    break;
                }
                break;
            default :
                //������û�����ֵı����ֶ�
                if (filed.name.length) {
                    parts.push(encodeURIComponent((filed.name)) + '=' + encodeURIComponent(filed.value));
                }
        }
    }

    return parts.join('&');
};
/**
 * Created by Administrator on 2017/7/18.
 */
/**
 * @class snowJs.Chart
 * @param Parameter
 * @param Parameter.type 图表类型：bar【柱形图】，sector【扇形图】,line【线形图】,默认值：bar
 * @desc 统计图形表
 *
 */
snowJs.Chart = (function () {
    var constructor = function (Parameter) {
        var initParameter = {};
        initParameter.type = 'bar';
        snowJs.tool.extend(initParameter, Parameter);

        var chartTag = document.getElementById('chart');
        var canvasId = snowJs.tool.getRandom();
        var canvas = snowJs.tool.createElement({
            tag: 'canvas',
            id: canvasId
        });
        canvas.setAttribute('width', 740);
        canvas.setAttribute('height', 248);
        chartTag.appendChild(canvas);

        var createBarChart = function () {
            var data = initParameter.data;
            var canvas = document.getElementById(canvasId);
            var chart = canvas.getContext('2d');
            chart.lineWidth = 1;

            chart.beginPath();//开始一条路径或重置当前的路径
            chart.moveTo(65, 0);//开始一条路径 ，移动到0，0位置，语法：moveTo（x,y），start点
            chart.lineTo(65, 230);//开始一条路径，移动到0,600位置，语法：lineTo（x，y）,end点
            chart.stroke();//确认创建路径

            chart.beginPath();
            chart.moveTo(60, 230);
            chart.lineTo(740, 230);
            chart.stroke();

            var len = data.length;
            var intervalX = 660 / len;
            for (var i = 1; i <= len; i++) {
                var x = intervalX * i;
                chart.beginPath();
                chart.moveTo(x, 230);
                chart.lineTo(x, 235);
                chart.stroke();
            }

            var maxVal = Number(data[0].y), minVal = Number(data[0].y);
            snowJs.tool.each(data, function (en, index) {
                var val = Number(en.y);
                maxVal < val ? maxVal = val : maxVal;
                minVal > val ? minVal = val : minVal;
            });
            var intervalY = 220 / data.length;
            for (var i = 1; i <= len; i++) {
                var y = 230 - intervalY * i;
                chart.beginPath();
                chart.moveTo(65, y);
                chart.lineTo(60, y);
                chart.stroke();

                chart.beginPath();
                chart.strokeStyle = '#ccc';
                chart.moveTo(65, y);
                chart.lineTo(740, y);
                chart.stroke();
            }
        };
        var createSectorChart = function () {
        };
        var createLineChart = function () {
        };

        switch (initParameter.type) {
            case 'bar':
                createBarChart();
                break;
            case 'sector':
                createSectorChart();
                break;
            case 'line':
                createLineChart();
                break;
        }
    };
    return constructor;
})();