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