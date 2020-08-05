var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { classNames } from '../../utils/classNames';
/**
 * A Button indicates a possible user action.
 *
 * ```js
 * import {Button} from 'pat-ui'
 * ```
 */
export var Button = function (props) {
    var _a;
    var btnSize = props.btnSize, btnType = props.btnType, children = props.children, disabled = props.disabled, className = props.className, rest = __rest(props, ["btnSize", "btnType", "children", "disabled", "className"]);
    var styleClasses = classNames('btn', (_a = {},
        _a["btn-" + btnType] = true,
        _a["btn-" + btnSize] = !!btnSize,
        _a.disabled = !!(disabled && btnType === 'link'),
        _a));
    if (className) {
        styleClasses += ' ' + className;
    }
    var btn;
    if (btnType !== 'link') {
        btn = (React.createElement("button", __assign({ className: styleClasses, disabled: disabled }, rest), props.children));
    }
    else {
        if (disabled) {
            rest.onClick = function (e) {
                e.preventDefault();
            };
        }
        btn = (React.createElement("a", __assign({ className: styleClasses }, rest), props.children));
    }
    return btn;
};
Button.defaultProps = {
    btnType: 'default',
    disabled: false,
};
export default Button;
