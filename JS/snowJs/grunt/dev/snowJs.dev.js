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
var _s = {};

_s.each = function (list, fn) {
    for (var i = 0; i < list.length; i++) {
        fn(list[i], i);
    }
};

_s.find = function (list, fn) {
    var rObject;
    for (var i = 0; i < list.length; i++) {
        var isMatch = fn(list[i], i);
        if (isMatch) {
            rObject = list[i];
            //break;
            return rObject;
        }
    }
    //return rObject;
};

_s.filter = function (list, fn) {
    var rList = [];
    for (var i = 0; i < list.length; i++) {
        var isMatch = fn(list[i], i);
        if (isMatch) {
            rList.push(list[i]);
        }
    }
    return rList;
};

_s.extend = function (destination, source, isReference) {
    if (!destination) {
        destination = {};
    }

    for (var i in source) {
        destination[i] = source[i];
    }
};

_s.getRandom = function () {
    //获取时间戳的方式
    // 1、Date.parse(new Date())返回秒
    // 2、(new Date()).valueOf()返回毫秒;
    // 3、new Date().getTime()返回毫秒
    var date = new Date();
    var val = date.valueOf();
    return val;
};

_s.serialize = function (form) {
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
                if (filed.name.length) {
                    parts.push(encodeURIComponent((filed.name)) + '=' + encodeURIComponent(filed.value));
                }
        }
    }

    return parts.join('&');
};

_s.getBrowser = function () {
    var appName = navigator.appName;
    var appVersion = navigator.appVersion;
    var name = '';

    if (appName === 'Netscape') {
        if (appVersion.indexOf('Chrome') > -1) {
            name = 'Chrome';
        } else if (appVersion.indexOf('Safari') > -1) {
            name = 'Safari';
        } else {
            name = 'otherBrowser';
        }
    } else if (appName === 'Microsoft Internet Explorer') {
        if (appVersion.indexOf('MSIE') < 0) {
            name = 'IE11';
        } else if (appVersion.indexOf('MSIE 10.0') > -1) {
            name = 'IE10';
        } else if (appVersion.indexOf('MSIE 9.0') > -1) {
            name = 'IE9';
        } else if (appVersion.indexOf('MSIE 8.0') > -1) {
            name = 'IE8';
        } else if (appVersion.indexOf('MSIE 7.0') > -1) {
            name = 'IE7'
        } else if (appVersion.indexOf('MSIE 6.0') > -1) {
            name = 'IE6';
        }
    }

    return name;
};

_s.isArray = function (arg) {
    //判断是否是数组的方法有几种 instanceof、ary.constructor（原型链法）、判断是否拥有Array的相关默认方法（push,pop,shift,unshift)
    //instanceof和 ary.constructor缺点：需要在当前页面声明的，比如在子页面声明，并将其赋值给父页面的一个变量，这是判断改变量 返回false
    return Object.prototype.toString.call(arg) === '[object Array]';
};

_s.isHtml = function (arg) {
    //判断是否是数组的方法有几种 instanceof、ary.constructor（原型链法）、判断是否拥有Array的相关默认方法（push,pop,shift,unshift)
    //instanceof和 ary.constructor缺点：需要在当前页面声明的，比如在子页面声明，并将其赋值给父页面的一个变量，这是判断改变量 返回false
    return Object.prototype.toString.call(arg) === '[object HTMLCollection]';
};

_s.Binary = {
    encode: function (parameter) {
        var initParameter = {};
        _s.extend(initParameter, parameter);

        var str = initParameter.char;
        var strBinaries = '';
        for (var i = 0; i < str.length; i++) {
            var n = str[i];
            var num = str.charCodeAt(i);
            var binary = num.toString(2);

            if (strBinaries === '') {
                strBinaries = binary;
            } else {
                strBinaries = strBinaries + ' ' + binary;
            }
        }
        return strBinaries;
    },
    decode: function (parameter) {
        var initParameter = {};
        _s.extend(initParameter, parameter);

        var char = '';
        var binaryChar = initParameter.binaryChar;
        var binaryCharList = binaryChar.split(' ');
        for (var i = 0; i < binaryChar.length; i++) {
            var str = binaryCharList[i];
            str = parseInt(str, 2);
            char += String.fromCharCode(str);
        }
        return char;
    }
};

_s.cache = {
    _getType: function (pParameter, methodType) {
        if (!pParameter) {
            pParameter = {};
        }
        var type = pParameter.type || 'cookie';
        var value = pParameter.value || '';
        var key = pParameter.key || '';

        var cookieToCache = function () {
            //cookie在浏览器和服务器中来回传递，主要应用场景：
            //1、保持登录；2、保持上次查看的页面；3、浏览次数统计；4、购物车的状态保持
            var time = pParameter.time || 30;//设置多少天之后到期，如设定则默认30天

            var date = new Date();
            date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);//time*24*60*60将time转化成秒，获取到期的具体日期

            switch (methodType) {
                case 'set':
                    if (value === '') {
                        console.error('value =" "');
                        return;
                    }

                    document.cookie = key + '=' + value + ';expires=' + date.toGMTString();
                    break;
                case 'get':
                    var cookies = document.cookie;
                    var cookieList = cookies.split(',');
                    var keyValue = _s.find(cookieList, function (en) {
                        return en.indexOf(key) > -1;
                    });
                    var val = keyValue.split('=')[1];
                    return val;
                    break;
                case 'delete':
                    document.cookie = key + '=' + value + ';expires=' + date.toGMTString();
                    break;
            }
        };

        var sessionToCache = function () {
        };

        var localStorageToCache = function () {
            //1、存储在本地，不会发送到服务器（除非故意为之）
            //2、在同域下localStorage共享（数据可跨越多个窗口、无视当前会话，被共同访问、使用）
            //3、localStorage用于持久化的本地存储，除非主动删除数据，否则不会过期
            //4、可存储更大的数据（相比cookie）

            switch (methodType) {
                case 'get':
                    return localStorage.getItem(key);
                    break;
                case 'set':
                    localStorage.setItem(key, value);
                    break;
                case 'delete':
                    localStorage.removeItem(key);
                    break;
                case 'clear':
                    localStorage.clear();
            }
        };

        var sessionStorageToCache = function () {
            //1、sessionStorage 的存储空间大小，参照浏览器厂商具体实现
            //2、通过sessionStorage所存储数据的生命周期，和session类似，关闭浏览器（或标签）后数据就不存在了。但刷新页面或使用“前进”、“后退”按钮后，sessionStorage仍然存在
            //3、sessionStorage每个窗口的值都是独立的（每个窗口都有自己的数据），它的数据会随浏览器的关闭而消失，窗口间的不可以共享
            //4、setItem中的key 和 value使用的都是字符的形式存储，如sessionStorage.setItem('a','1');
            //5、再次使用setItem设置已存在的key的value时，新的值将替代旧的值（可实现修改存在key的value的操作）
            //6、当存储的数据发生变化时，会触发window.onStorage事件，但目前各个浏览器对此事件的支持并不完善。
            switch (methodType) {
                case 'get':
                    return sessionStorage.getItem(key);
                    break;
                case 'set':
                    sessionStorage.setItem(key, value);
                    break;
                case 'delete':
                    sessionStorage.removeItem(key);
                    break;
                case 'clear':
                    sessionStorage.clear();
            }
        };

        var globalStorageToCache = function () {

        };

        var databaseToCache = function () {
        };

        switch (type) {
            case 'cookie':
                return cookieToCache();
                break;
            case'session':
                break;
            case 'localStorage':
                return localStorageToCache();
                break;
            case 'sessionStorage':
                return sessionStorageToCache();
                break;
            case 'globalStorage':
                break;
            case 'dataBase':
                break;
        }
    },
    get: function (argP) {
        return this._getType(argP, 'get');
    },
    set: function (argP) {
        this._getType(argP, 'set');
    },
    delete: function (argP) {
        if (!argP) {
            argP.time = '-1';
        }
        this._getType(argP, 'delete');
    },
    clear: function () {
        this._getType(argP, 'clear');
    }
};



/**
 * Created by zhen on 2017/9/17.
 */
var getSelector = function () {
    if (!arguments[0]) {
        console.error('selector=" "');
        return;
    }

    var selectorList = arguments[0].split(' ');
    var selector = selectorList.splice(0, 1)[0];
    var charAtFirst = selector[0];

    var nodes = [];
    var parentTags;
    if (_s.isHtml(this)) {
        parentTags = this[0];
    } else {
        parentTags = document;
    }

    switch (charAtFirst) {
        case '#':
            selector = selector.replace('#', '');
            nodes.push(parentTags.getElementById(selector));
            break;
        case '.':
            selector = selector.replace('.', '');
            nodes = parentTags.getElementsByClassName(selector);
            break;
        default :
            nodes = parentTags.getElementsByTagName(selector);
    }
    if (selectorList.length > 0) {
        return arguments.callee.call(nodes, selectorList.join(' '));

    } else {
        return nodes;
    }
};
var $s = function (selector) {
    var nodes = getSelector.call(this, selector);

    nodes.find = function (selector) {
        return $s.call(this, selector);
    };

    nodes.createElement = function (param) {
        var html = param.tag || '';
        _s.each(this, function (en) {
            var tag = document.createElement(html);
            en.appendChild(tag);
        });

        var tag = $s(html)[0];
        return tag;
    };

    nodes.val = function (value) {
        var _this = this;
        var getValue = function () {
            return _this[0].value;
        };
        var setValue = function () {
            _this.value = value;
        };
        if (!value) {
            return getValue();
        } else {
            setValue();
        }
    };

    nodes.on = function (method, fn) {
        debugger;
        var browser = _s.getBrowser();

        _s.each(this, function (en) {
            if (browser.indexOf('IE') > -1 && Number(browser[2]) < 9) {
                en['on' + method] = fn;
            } else {
                en.addEventListener(method, fn, true);
            }
        });
    };

    return nodes;
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
        _s.extend(initParameter, Parameter);

        var container = initParameter.container;

        var chartTag = initParameter.$e;
        var canvasId = _s.getRandom();
        var canvas = chartTag.createElement({
            tag: 'canvas'
        });

        var canvasWidth = 740;
        var canvasHeight = 248;
        var cssClass=initParameter.cssClass||'';
        canvas.setAttribute('class', cssClass);
        canvas.setAttribute('id', canvasId);
        canvas.setAttribute('width', canvasWidth.toString());
        canvas.setAttribute('height', canvasHeight.toString());

        //矩形统计图
        var createBarChart = function () {
            var data = initParameter.data;
            var canvas = document.getElementById(canvasId);
            var chart = canvas.getContext('2d');
            var X = 65,
                Y = 230,
                intervalLineX = X - 5,//这个坐标是指X轴坐标往上移5，绘制Y轴上的间隔线终点的X坐标，并且是绘制X轴起点的X坐标
                intervalLineY = Y - 5;//这个坐标是指Y轴坐标往左移5，绘制X轴上的间隔线起点的Y坐标，并且是绘制X轴起点的Y坐标
            chart.lineWidth = 1;

            //Y轴绘制
            chart.beginPath();//开始一条路径或重置当前的路径
            chart.moveTo(X, 0);//开始一条路径 ，移动到0，0位置，语法：moveTo（x,y），start点
            chart.lineTo(X, Y);//开始一条路径，移动到0,600位置，语法：lineTo（x，y）,end点
            chart.stroke();//确认创建路径

            //X轴绘制
            chart.beginPath();
            chart.moveTo(intervalLineX, intervalLineY);
            chart.lineTo(canvasWidth, intervalLineY);
            chart.stroke();

            var len = data.length;
            var intervalX = parseInt((canvasWidth - X - 40) / len);//X轴间隔的坐标数值值

            //绘制X轴上的内容：间隔线、文本
            var canvasX = function () {
                for (var i = 1; i <= len; i++) {
                    var x = intervalX * i;
                    x += X;

                    //绘制X轴上的间隔线
                    chart.beginPath();
                    chart.moveTo(x, intervalLineY);
                    chart.lineTo(x, Y);
                    chart.stroke();

                    //绘制矩形

                    //绘制X轴上的文本,文本来源于数据源
                    var text = data[i - 1].x;
                    if (text) {
                        //水平方向对齐方式：文本会从指定位置开始
                        //textAlign值有:
                        //start：默认，文本在指定的位置开始；
                        // end：文本在指定的位置结束；
                        // center：文本的中心被放置在指定的位置；
                        // left：文本左对齐；
                        // right：文本右对齐;
                        chart.textAlign = 'center';
                        var textX = x - intervalX / 2;
                        chart.fillText(text, textX, Y + 10);
                    }
                }
            };

            var maxVal = Number(data[0].y),//Y轴数据中的最大值
                minVal = Number(data[0].y);//Y轴数据中的最小值
            _s.each(data, function (en, index) {
                var val = Number(en.y);
                maxVal < val ? maxVal = val : maxVal;
                minVal > val ? minVal = val : minVal;
            });

            var firstVal = parseInt(maxVal.toString()[0]);//Y轴数据中最大值的第一位数值
            var intervalVal = parseInt(maxVal / firstVal);//Y轴间隔的数据数值，比如5,10,100,1000
            var intervalY = (Y - 30) / firstVal;//Y轴间隔的坐标数值值

            //绘制Y轴上的内容：间隔线、辅助线、文本
            var canvasY = function () {
                for (var i = 1; i <= firstVal; i++) {
                    //绘制Y轴上的间隔线
                    var y = intervalLineY - intervalY * i;//Y轴间隔线终点的Y轴坐标
                    chart.beginPath();
                    chart.moveTo(X, y);
                    chart.lineTo(intervalLineX, y);
                    chart.stroke();

                    //绘制矩形图的辅助线
                    chart.beginPath();
                    chart.strokeStyle = '#ccc';
                    chart.moveTo(X, y);
                    chart.lineTo(canvasWidth + 20, y);
                    chart.stroke();

                    //绘制Y轴上的文本，文本来源：根据数据中的最大值推算出间隔的数值，比如最大值为400，间隔值为100，即Y轴上的文本为100，200,300,400；
                    var text = intervalVal * i;
                    if (text) {
                        var textY = y;

                        //设置垂直方向对齐方式：
                        // textBaseline的值有：
                        // alphabetic默认，文本基线是普通的字母基线；
                        // top em方框的顶端；
                        // middle em方框的居中；
                        // bottom em方框的底部
                        // hanging悬挂；
                        // ideographic表意；
                        chart.textBaseline = 'middle';
                        chart.textAlign = 'end';
                        chart.fillText(text.toString(), intervalLineX, textY);
                    }
                }
            };

            var canvasChart = function () {
                for (var i = 0; i < data.length; i++) {
                    var x = intervalX * (i + 1);
                    x += X - intervalX / 2 - 10;

                    var val = Number(data[i].y);
                    var n = parseInt(val / intervalVal);
                    var m = val % intervalVal;
                    var y = intervalLineY - (n * intervalY + m * intervalY / intervalVal);
                    var x1 = x + 20;


                    chart.fillStyle = '#4bbfbf';
                    chart.beginPath();
                    chart.moveTo(x, intervalLineY);
                    chart.lineTo(x, y);
                    chart.lineTo(x1, y);
                    chart.lineTo(x1, intervalLineY);
                    chart.lineTo(x, intervalLineY);
                    chart.fill();

                    chart.textAlign = 'center';
                    chart.fillStyle = "white";
                    chart.fillText(val.toString(), x1 - 10, y + (Y - y) / 2);
                }
            };

            canvasX();
            canvasY();
            canvasChart()
        };

        //原型统计图
        var createSectorChart = function () {
            var chartTag = document.getElementById('chart');
            var chart = chartTag.getContext('2d');

            chart.beginPath();
            chart.arc(75, 75, 50, 0, Math.PI * 2, true);
            chart.stroke();
        };
        //线形统计图
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