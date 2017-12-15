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
    var browser;
    var browserInfo=window.navigator.userAgent;
    if(browserInfo.indexOf('Trident')>-1){
        if (browserInfo.indexOf('Mozilla/5.0') >-1) {
            browser = 'IE11';
        } else{
            if (browserInfo.indexOf('Trident/10.0') > -1) {
                browser = 'IE10';
            } else if (browserInfo.indexOf('Trident/9.0') > -1) {
                browser = 'IE9';
            } else if (browserInfo.indexOf('Trident/8.0') > -1) {
                browser = 'IE8';
            } else if (browserInfo.indexOf('Trident/7.0') > -1) {
                browser = 'IE7';
            }else{
                browser='IE0';//更低版本的IE浏览器
            }
        }
    }else if(browserInfo.indexOf('Chrome')>-1){
        browser='Chrome';
    }else if(browserInfo.indexOf('Firefox')>-1){
        browser='Firefox';
    }

    return browser;
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


