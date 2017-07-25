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
    if (!param) {
        return;
    }

    param.type = param.type || 'get';
    param.async = param.async || true;
    var xhr = createXHR(param.type, param.url, param.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                if (typeof(param.success ) === 'function') {
                    param.success(xhr.responseText);
                }
            } else {
                if (typeof (param.error) === 'function') {
                    param.error(xhr.responseText);
                }
            }
        }
    };
    xhr.open(param.type, param.url, param.async);
    xhr.send(null);
};