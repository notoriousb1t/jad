"use strict";
var animation_1 = require('./animation');
var Project = (function () {
    function Project(options) {
        this.resetToEmpty();
        if (options) {
            this.setState(options);
        }
        this.initialState = angular.copy(this);
    }
    Project.prototype.resetToEmpty = function () {
        this.name = 'Default';
        this.animations = [
            new animation_1.Animation({
                keyframes: [
                    {
                        fill: 'white',
                        rotateZ: '0',
                        scale: 1,
                        'transform-origin': '50% 50%'
                    },
                    {
                        fill: '#111',
                        rotateZ: '180deg',
                        scale: 0.65,
                        'transform-origin': '50% 50%'
                    },
                    {
                        fill: 'white',
                        rotateZ: '360deg',
                        scale: 1,
                        'transform-origin': '50% 50%'
                    }
                ],
                name: 'twirl',
                timings: {
                    duration: 2500,
                    easing: 'ease-out',
                    fill: 'both',
                    iterations: 1
                }
            }),
            new animation_1.Animation({
                keyframes: [
                    { opacity: 0 },
                    { opacity: 1 }
                ],
                name: 'fadeIn',
                timings: {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'both',
                    iterations: 1
                }
            })
        ];
        this.activeAnimation = undefined;
    };
    Project.prototype.resetToInitial = function () {
        this.setState(this.initialState);
    };
    Project.prototype.setState = function (state) {
        this.name = state.name;
        this.animations = state.animations.map(function (s) { return new animation_1.Animation(s); });
    };
    return Project;
}());
exports.Project = Project;
//# sourceMappingURL=project.js.map