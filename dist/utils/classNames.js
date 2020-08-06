export function classNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args
        .reduce(function (acc, cur) {
        if (typeof cur === 'string') {
            acc.push(cur);
        }
        else if (typeof cur === 'object') {
            for (var key in cur) {
                if (cur.hasOwnProperty(key) && cur[key]) {
                    acc.push(key);
                }
            }
        }
        return acc;
    }, [])
        .join(' ');
}
