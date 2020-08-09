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
import { IconPath } from './Icons';
/**
 * An Icon is a symbol that helps user understand what does the content do.
 *
 * ```js
 * import {Icon} from 'pat-ui'
 * ```
 */
var Icon = function (props) {
    var _a;
    var className = props.className, size = props.size, color = props.color, loading = props.loading, disabled = props.disabled, name = props.name, rest = __rest(props, ["className", "size", "color", "loading", "disabled", "name"]);
    var styleClasses = classNames('icon', (_a = {},
        _a["" + size] = !!size,
        _a["" + color] = !!color,
        _a["" + name] = true,
        _a.disabled = !!disabled,
        _a.loading = !!loading,
        _a));
    if (className) {
        styleClasses += ' ' + className;
    }
    var height;
    switch (size) {
        case 'mini':
            height = '12';
            break;
        case 'tiny':
            height = '14';
            break;
        case 'small':
            height = '20';
            break;
        case 'large':
            height = '42';
            break;
        case 'big':
            height = '58';
            break;
        case 'huge':
            height = '112';
            break;
        case 'massive':
            height = '224';
            break;
        case 'medium':
            height = '28';
            break;
        default:
            height = '28';
    }
    if (disabled) {
        return (React.createElement("svg", { className: styleClasses, viewBox: IconPath[name].viewBox, height: height },
            React.createElement("path", { fill: color, "fill-opacity": ".25", d: IconPath[name].path })));
    }
    else if (loading) {
        return (React.createElement("svg", { className: styleClasses, height: height, viewBox: IconPath[name].viewBox },
            React.createElement("path", { fill: color, d: IconPath[name].path }),
            React.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 0 0", to: "360 0 0", dur: "1s", repeatCount: "indefinite" })));
    }
    else {
        return (React.createElement("svg", { className: styleClasses, viewBox: IconPath[name].viewBox, height: height },
            React.createElement("path", { fill: color, d: IconPath[name].path })));
    }
};
Icon.defaultProps = {
    loading: false,
    disabled: false,
};
export default Icon;
