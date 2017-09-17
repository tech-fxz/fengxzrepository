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
            var time = pParameter.time || 30;//设置多少天之后到期，如设定则默认30天
            switch (methodType) {
                case 'set':
                    if (value === '') {
                        console.error('value =" "');
                        return;
                    }

                    var date = new Date();
                    date.setTime(date.getTime() + time * 24 * 60 * 60*1000);//time*24*60*60将time转化成秒，获取到期的具体日期

                    document.cookie = key + '=' + value + ';expires=' + date;
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
                    var date = new Date();
                    date.setTime(date.getTime() - 24 * 60 * 60*1000);//time*24*60*60将time转化成秒，获取到期的具体日期

                    document.cookie = key + '=' + value + ';expires=' + date.toGMTString();
                    break;
            }
        };

        var sessionToCache = function () {

        };

        var storageToCache = function () {

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
                break;
            case 'sessionStorage':
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
        this._getType(argP, 'delete');
    }
};


