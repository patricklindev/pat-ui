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
import Icon from '../Icon/Icon';
var Input = function (props) {
    var _a;
    var inputSize = props.inputSize, focus = props.focus, disabled = props.disabled, error = props.error, transparent = props.transparent, fluid = props.fluid, icon = props.icon, loading = props.loading, iconPosition = props.iconPosition, rest = __rest(props, ["inputSize", "focus", "disabled", "error", "transparent", "fluid", "icon", "loading", "iconPosition"]);
    var styleClasses = classNames('ui-input', (_a = {
            'input-focus': !!focus
        },
        _a["input-" + inputSize] = !!inputSize,
        _a['input-disabled'] = !!disabled,
        _a['input-error'] = !!error,
        _a['input-transparent'] = !!transparent,
        _a['input-fluid'] = !!fluid,
        _a['input-loading'] = !!loading,
        _a["input-" + iconPosition] = !!iconPosition,
        _a.icon = !!icon || !!loading,
        _a));
    var iconFilteredClasses = {};
    var iconName = '';
    if (icon && typeof icon === 'object') {
        for (var _i = 0, _b = Object.keys(icon); _i < _b.length; _i++) {
            var key = _b[_i];
            if (key !== 'name') {
                iconFilteredClasses["" + key] = icon[key];
            }
        }
        iconName = icon['name'];
    }
    // const iconClasses = classNames(
    //   {
    //     [`${icon}`]: !!icon && typeof icon === 'string' && !loading,
    //     [`${iconName}`]: !!iconName,
    //     'spinner big loading': !!loading,
    //   },
    //   iconFilteredClasses,
    //   'icon'
    // );
    if (!iconName) {
        if (typeof icon === 'string') {
            iconName = icon;
        }
        else if (loading) {
            iconName = 'spinner';
        }
    }
    // const inputIcon = <i aria-hidden={'true'} className={iconClasses}></i>;
    var patIcon = React.createElement(Icon, { "aria-hidden": 'true', name: iconName, loading: !!loading, disabled: !!disabled, size: inputSize ? inputSize : 'small' });
    return (React.createElement("div", { className: styleClasses },
        React.createElement("input", __assign({ type: 'text', disabled: disabled }, rest)),
        icon || loading ? patIcon : null));
};
export default Input;
