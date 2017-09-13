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
    //获取时间戳的方式
    // 1、Date.parse(new Date())返回秒
    // 2、(new Date()).valueOf()返回毫秒;
    // 3、new Date().getTime()返回毫秒
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
                if (filed.name.length) {
                    parts.push(encodeURIComponent((filed.name)) + '=' + encodeURIComponent(filed.value));
                }
        }
    }

    return parts.join('&');
};

/**
 * @class snowJs.tool.Binary
 * @desc
 */
snowJs.tool.Binary = (function () {
    var encode = function (parameter) {
        var initParameter = {};
        snowJs.tool.extend(initParameter, parameter);

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
    };
    var decode = function (parameter) {
        var initParameter = {};
        snowJs.tool.extend(initParameter, parameter);

        var char = '';
        var binaryChar = initParameter.binaryChar;
        var binaryCharList = binaryChar.split(' ');
        for (var i = 0; i < binaryChar.length; i++) {
            var str = binaryCharList[i];
            str = parseInt(str, 2);
            char += String.fromCharCode(str);
        }
        return char;
    };

    var o = {};
    o.encode = encode;
    o.decode = decode;
    return o;
})();

snowJs.tool.getBrowser = function () {
    var appName = navigator.appName;
    var appVersion = navigator.appVersion;
    var name = '';

    if (appName === 'Netscape') {
        if (appVersion.indexOf('Safari') > -1) {
            name = 'Safari';
        } else if (appVersion.indexOf('Chrome') > -1) {
            name = 'Chrome';
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
