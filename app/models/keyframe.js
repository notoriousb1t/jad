"use strict";
var Keyframe = (function () {
    function Keyframe(options) {
        this.offset = undefined;
        this['all'] = undefined;
        this['backdrop-filter'] = undefined;
        this['background'] = undefined;
        this['background-color'] = undefined;
        this['background-position'] = undefined;
        this['background-size'] = undefined;
        this['border'] = undefined;
        this['border-bottom'] = undefined;
        this['border-bottom-color'] = undefined;
        this['border-bottom-left-radius'] = undefined;
        this['border-bottom-right-radius'] = undefined;
        this['border-bottom-width'] = undefined;
        this['border-color'] = undefined;
        this['border-left'] = undefined;
        this['border-left-color'] = undefined;
        this['border-left-width'] = undefined;
        this['border-radius'] = undefined;
        this['border-right'] = undefined;
        this['border-right-color'] = undefined;
        this['border-right-width'] = undefined;
        this['border-top'] = undefined;
        this['border-top-color'] = undefined;
        this['border-top-left-radius'] = undefined;
        this['border-top-right-radius'] = undefined;
        this['border-top-width'] = undefined;
        this['border-width'] = undefined;
        this['bottom'] = undefined;
        this['box-shadow'] = undefined;
        this['clip'] = undefined;
        this['clip-path'] = undefined;
        this['color'] = undefined;
        this['column-count'] = undefined;
        this['column-gap'] = undefined;
        this['column-rule'] = undefined;
        this['column-rule-color'] = undefined;
        this['column-rule-width'] = undefined;
        this['column-width'] = undefined;
        this['columns'] = undefined;
        this.fill = undefined;
        this.fillOpacity = undefined;
        this.fillRule = undefined;
        this['filter'] = undefined;
        this['flex'] = undefined;
        this['flex-basis'] = undefined;
        this['flex-grow'] = undefined;
        this['flex-shrink'] = undefined;
        this['font'] = undefined;
        this['font-size'] = undefined;
        this['font-size-adjust'] = undefined;
        this['font-stretch'] = undefined;
        this['font-weight'] = undefined;
        this['grid-column-gap'] = undefined;
        this['grid-gap'] = undefined;
        this['grid-row-gap'] = undefined;
        this['height'] = undefined;
        this['left'] = undefined;
        this['letter-spacing'] = undefined;
        this['line-height'] = undefined;
        this['margin'] = undefined;
        this['margin-bottom'] = undefined;
        this['margin-left'] = undefined;
        this['margin-right'] = undefined;
        this['margin-top'] = undefined;
        this['mask'] = undefined;
        this['mask-position'] = undefined;
        this['mask-size'] = undefined;
        this['max-height'] = undefined;
        this['max-width'] = undefined;
        this['min-height'] = undefined;
        this['min-width'] = undefined;
        this['motion-offset'] = undefined;
        this['motion-rotation'] = undefined;
        this['object-position'] = undefined;
        this['opacity'] = undefined;
        this['order'] = undefined;
        this['outline'] = undefined;
        this['outline-color'] = undefined;
        this['outline-offset'] = undefined;
        this['outline-width'] = undefined;
        this['padding'] = undefined;
        this['padding-bottom'] = undefined;
        this['padding-left'] = undefined;
        this['padding-right'] = undefined;
        this['padding-top'] = undefined;
        this['perspective'] = undefined;
        this['perspective-origin'] = undefined;
        this['right'] = undefined;
        this['rotate'] = undefined;
        this['rotate3d'] = undefined;
        this['rotateX'] = undefined;
        this['rotateY'] = undefined;
        this['rotateZ'] = undefined;
        this['scale'] = undefined;
        this['scale3d'] = undefined;
        this['scaleX'] = undefined;
        this['scaleY'] = undefined;
        this['scaleZ'] = undefined;
        this['scroll-snap-coordinate'] = undefined;
        this['scroll-snap-destination'] = undefined;
        this['skew'] = undefined;
        this['skewX'] = undefined;
        this['skewY'] = undefined;
        this['shape-image-threshold'] = undefined;
        this['shape-margin'] = undefined;
        this['shape-outside'] = undefined;
        this.stroke = undefined;
        this.strokeDasharray = undefined;
        this.strokeDashoffset = undefined;
        this.strokeLinecap = undefined;
        this.strokeLinejoin = undefined;
        this.strokeMiterlimit = undefined;
        this.strokeOpacity = undefined;
        this.strokeWidth = undefined;
        this['text-decoration'] = undefined;
        this['text-decoration-color'] = undefined;
        this['text-emphasis'] = undefined;
        this['text-emphasis-color'] = undefined;
        this['text-indent'] = undefined;
        this['text-shadow'] = undefined;
        this['top'] = undefined;
        this['transform'] = undefined;
        this['transform-origin'] = undefined;
        this['translate'] = undefined;
        this['translate3d'] = undefined;
        this['translateX'] = undefined;
        this['translateY'] = undefined;
        this['translateZ'] = undefined;
        this['vertical-align'] = undefined;
        this['visibility'] = undefined;
        this['width'] = undefined;
        this['word-spacing'] = undefined;
        this['z-index'] = undefined;
        if (options) {
            this.setState(options);
        }
    }
    Keyframe.prototype.resetToEmpty = function () {
        for (var name_1 in this) {
            var prop = this[name_1];
            if (prop === undefined) {
                continue;
            }
            if (typeof prop === 'string') {
                this[name_1] = undefined;
                continue;
            }
            if (typeof prop === 'number') {
                this[name_1] = undefined;
                continue;
            }
            if (typeof prop.length === 'number') {
                this[name_1] = undefined;
                continue;
            }
        }
    };
    Keyframe.prototype.setState = function (options) {
        this.resetToEmpty();
        angular.extend(this, options);
    };
    return Keyframe;
}());
exports.Keyframe = Keyframe;
//# sourceMappingURL=keyframe.js.map