"use strict";
var meta = require('./meta');
var AnimationEffectTiming = (function () {
    function AnimationEffectTiming(options) {
        this.resetToEmpty();
        if (options) {
            this.setState(options);
        }
    }
    AnimationEffectTiming.prototype.resetToEmpty = function () {
        this.setState({
            duration: 1000,
            easing: 'ease',
            fill: 'none',
            iterations: 1
        });
    };
    AnimationEffectTiming.prototype.setState = function (state) {
        if (state.duration) {
            this.duration = state.duration;
        }
        if (state.easing) {
            this.easing = state.easing;
        }
        if (state.fill) {
            this.fill = state.fill;
        }
        if (state.iterations) {
            this.iterations = state.iterations;
        }
    };
    AnimationEffectTiming.prototype.getState = function () {
        return {
            duration: this.duration,
            easing: this.easing,
            fill: this.fill,
            iterations: this.iterations
        };
    };
    AnimationEffectTiming.prototype.toString = function () {
        var state = this.getState();
        return JSON.stringify(state, undefined, '\t');
    };
    return AnimationEffectTiming;
}());
exports.AnimationEffectTiming = AnimationEffectTiming;
exports.AnimationEffectTimingDescriptor = new meta.ModelDescriptor({
    properties: [
        {
            name: 'duration',
            type: meta.integer
        },
        {
            name: 'easing',
            type: meta.timingFunction
        },
        {
            name: 'fill',
            restrict: true,
            selections: ['none', 'forwards', 'backwards', 'both'],
            type: meta.string
        },
        {
            name: 'iterations',
            type: meta.integer
        }
    ],
    type: AnimationEffectTiming
});
//# sourceMappingURL=animationEffectTiming.js.map