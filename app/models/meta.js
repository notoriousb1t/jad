"use strict";
exports.angle = 'angle';
exports.basicShape = 'basic-shape';
exports.blendMode = 'blend-mode';
exports.color_value = 'color_value';
exports.customIdent = 'custom-ident';
exports.gradient = 'gradient';
exports.image = 'image';
exports.integer = 'integer';
exports.length = 'length';
exports.number = 'number';
exports.percentage = 'percentage';
exports.positionValue = 'position_value';
exports.ratio = 'ratio';
exports.resolution = 'resolution';
exports.shape = 'shape';
exports.shapeBox = 'shape-box';
exports.string = 'string';
exports.time = 'time';
exports.timingFunction = 'timing-function';
exports.transformFunction = 'transform-function';
var ModelDescriptor = (function () {
    function ModelDescriptor(options) {
        this.properties = undefined;
        this.type = undefined;
        this.properties = options.properties.map(function (p) { return new PropertyDescriptor(p); });
        this.type = options.type;
    }
    return ModelDescriptor;
}());
exports.ModelDescriptor = ModelDescriptor;
var PropertyDescriptor = (function () {
    function PropertyDescriptor(options) {
        this.name = undefined;
        this.restrict = undefined;
        this.selections = undefined;
        this.type = undefined;
        this.name = options.name;
        this.restrict = options.restrict || false;
        this.selections = options.selections || undefined;
        this.type = options.type;
    }
    return PropertyDescriptor;
}());
exports.PropertyDescriptor = PropertyDescriptor;
//# sourceMappingURL=meta.js.map