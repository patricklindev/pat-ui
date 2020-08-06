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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faStar, faHeart, faSmileWink } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas, faMoon, faStar, faHeart, faSmileWink);
// type SRatingProps = IRatingProps & HTMLAttributes<HTMLDivElement>
export var Rating = function (props) {
    var className = props.className, rtShape = props.rtShape, rtSize = props.rtSize, rtAnimation = props.rtAnimation, children = props.children, rest = __rest(props, ["className", "rtShape", "rtSize", "rtAnimation", "children"]);
    var prefix = new Array(5).fill('fas');
    // let styleClasses = 'rt'
    var styleClasses = ['rt', "rt-" + rtSize, "rt-" + rtShape].join(' ');
    if (className)
        styleClasses += ' ' + className;
    var handleClick = function (e) {
        var _a;
        e.stopPropagation();
        var target = e.target;
        // if (target.classList.contains('rt-icon')) {
        target.classList.add("rt-" + rtAnimation);
        window.setTimeout(function () {
            target.classList.remove("rt-" + rtAnimation);
        }, 1000);
        var num = parseInt(target.id.split('-')[1]);
        // console.log(target)
        // console.log(num)
        var parent = target.parentElement;
        if (((_a = parent) === null || _a === void 0 ? void 0 : _a.id) === 'rt-container') {
            var icons = parent.children;
            for (var i = 0; i < 5; i++) {
                icons[i].classList.remove('rt-active');
            }
            for (var i = 5 - num; i < 5; i++) {
                icons[i].classList.add('rt-active');
            }
        }
        // prefixState(newfix)
        // console.log(prefix)
        // }        
    };
    return (React.createElement("div", __assign({ id: 'rt-container', className: styleClasses }, rest),
        React.createElement("div", { className: 'rt-icon', onClick: handleClick, id: 'rt-5' },
            React.createElement(FontAwesomeIcon, { icon: [prefix[4], rtShape], size: rtSize })),
        React.createElement("div", { className: 'rt-icon', onClick: handleClick, id: 'rt-4' },
            React.createElement(FontAwesomeIcon, { icon: [prefix[3], rtShape], size: rtSize })),
        React.createElement("div", { className: 'rt-icon', onClick: handleClick, id: 'rt-3' },
            React.createElement(FontAwesomeIcon, { icon: [prefix[2], rtShape], size: rtSize })),
        React.createElement("div", { className: 'rt-icon', onClick: handleClick, id: 'rt-2' },
            React.createElement(FontAwesomeIcon, { icon: [prefix[1], rtShape], size: rtSize })),
        React.createElement("div", { className: 'rt-icon', onClick: handleClick, id: 'rt-1' },
            React.createElement(FontAwesomeIcon, { icon: [prefix[0], rtShape], size: rtSize }))));
};
Rating.defaultProps = {
    rtShape: 'star',
    rtSize: '1x',
    rtAnimation: 'none'
};
export default Rating;
