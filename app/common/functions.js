"use strict";
function debounce(func, wait) {
    var timeoutHandle;
    return function () {
        var _this = this;
        var later = function () {
            timeoutHandle = undefined;
            func.apply(_this, arguments);
        };
        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(later, wait);
    };
}
exports.debounce = debounce;
//# sourceMappingURL=functions.js.map