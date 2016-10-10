"use strict";
function convertPascalToHyphenated(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
exports.convertPascalToHyphenated = convertPascalToHyphenated;
function minimize(input) {
    if (!input || input.length < 1) {
        return input;
    }
    return input[0].toLowerCase() + input.substr(1, input.length - 1);
}
exports.minimize = minimize;
function unsuffix(input, suffix) {
    var lastIndexOfSuffix = input.lastIndexOf(suffix);
    if (lastIndexOfSuffix === -1) {
        return input;
    }
    return input.substr(0, lastIndexOfSuffix);
}
exports.unsuffix = unsuffix;
//# sourceMappingURL=strings.js.map