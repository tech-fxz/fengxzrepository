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
