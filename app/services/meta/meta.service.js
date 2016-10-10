"use strict";
var MetaService = (function () {
    function MetaService() {
        this._descriptors = [];
    }
    MetaService.prototype.addDescriptor = function (descriptor) {
        this._descriptors.push(descriptor);
    };
    MetaService.prototype.getDescriptor = function (obj) {
        var descriptors = this._descriptors;
        var len = descriptors.length;
        for (var i = 0; i < len; i++) {
            var descriptor = descriptors[i];
            if (obj instanceof descriptor.type) {
                return descriptor;
            }
        }
        return undefined;
    };
    return MetaService;
}());
exports.MetaService = MetaService;
//# sourceMappingURL=meta.service.js.map