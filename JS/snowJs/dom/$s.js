/**
 * Created by zhen on 2017/9/17.
 */
var getSelector = function () {
    debugger;
    if (!arguments[0]) {
        console.error('selector=" "');
        return;
    }

    var i = arguments[1];
    if (!i) {
        i = 0;
    }
    var selectorList = arguments[0].split(' ');
    var selector = selectorList[i];
    var charAtFirst = selector[0];

    var nodes = [];
    debugger;
    switch (charAtFirst) {
        case '#':
            selector = selector.replace('#', '');
            nodes.push(document.getElementById(selector));
            break;
        case '.':
            selector = selector.replace('.', '');
            nodes = document.getElementsByClassName(selector);
            break;
        default :
            nodes = document.getElementsByTagName(selector);
    }
    if (selectorList.length > 1) {
        arguments.callee(selector, i++);
    } else {
        return nodes;
    }
};
var $s = function (selector) {
    var nodes = getSelector(selector);
    nodes.find = function (selector) {
        debugger;
        var nodes = getSelector(selector);
        return nodes;
    };

    nodes.createElement = function (param) {
        try {
            var id = param.id || '';
            var html = param.tag || '';
            var cssClass = param.cssClass || '';
            var tag;
            _s.each(this, function (en) {
                tag = en.createElement(html);
                tag.setAttribute('class', cssClass);
                tag.setAttribute('id', id);
            });
        } catch (error) {
        }
    };

    nodes.val = function (value) {
        var getValue = function () {
            debugger;
        };
        var setValue = function () {
        };
        if (!value) {
            var value = getValue();

            return value;
        } else {
            setValue();
        }
    };

    nodes.on = function (method, fn) {
        var browser = _s.getBrowser();
        if (!!this.push) {
            _s.each(this, function (en) {
                if (browser.indexOf('IE') > -1 && Number(browser[2]) < 9) {
                    en['on' + method] = fn;
                } else {
                    en.addEventListener(method, fn);
                }
            });
        }
    };

    return nodes;
};
