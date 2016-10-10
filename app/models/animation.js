"use strict";
var keyframe_1 = require('./keyframe');
var Animation = (function () {
    function Animation(options) {
        this.activeIndex = -1;
        this.resetToEmpty();
        if (options) {
            this.setState(options);
        }
    }
    Object.defineProperty(Animation.prototype, "activeKeyframe", {
        get: function () {
            var index = this.activeIndex;
            var keyframes = this.keyframes;
            if (index < 0) {
                if (keyframes.length > 0) {
                    return keyframes[0];
                }
                return undefined;
            }
            if (index > keyframes.length) {
                return undefined;
            }
            return keyframes[index];
        },
        set: function (value) {
            if (!value) {
                this.activeIndex = -1;
                return;
            }
            var index = this.keyframes.indexOf(value);
            if (index === -1) {
                this.activeIndex = -1;
                return;
            }
            this.activeIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Animation.prototype.resetToEmpty = function () {
        this.setState({
            keyframes: [],
            name: '',
            timings: {
                duration: 1000,
                easing: 'ease',
                fill: 'both',
                iterations: 1
            }
        });
    };
    Animation.prototype.setState = function (state) {
        this.name = state.name;
        this.keyframes = state.keyframes.map(function (s) { return new keyframe_1.Keyframe(s); });
        this.timings = {};
        if (state.timings.duration) {
            this.timings.duration = state.timings.duration;
        }
        if (state.timings.fill) {
            this.timings.fill = state.timings.fill;
        }
        if (state.timings.easing) {
            this.timings.easing = state.timings.easing;
        }
        if (state.timings.iterations) {
            this.timings.iterations = state.timings.iterations;
        }
    };
    return Animation;
}());
exports.Animation = Animation;
//# sourceMappingURL=animation.js.map