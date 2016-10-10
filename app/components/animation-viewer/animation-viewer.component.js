/// <reference path="../../../lib/just-animate/just-animate.d.ts" />
"use strict";
var functions_1 = require('../../common/functions');
var fps = Math.round(1000 / 30.0);
var animationTargetSelector = '#animationTarget';
var rectangleShape = "<div id=\"animationTarget\" class=\"animation-rectangle\"></div>";
var buttonShape = "<button id=\"animationTarget\" class=\"animation-button k-button\">Animate me</button>";
var textShape = "<div id=\"animationTarget\" class=\"animation-text\">Animate me</div>";
var emptyShape = "(Select an animation in the Project Explorer)";
var playerSelector = '.animation-viewer .player';
var AnimationViewerComponent = (function () {
    function AnimationViewerComponent() {
        this.controller = AnimationViewerController;
        this.templateUrl = './app/components/animation-viewer/animation-viewer.component.html';
    }
    return AnimationViewerComponent;
}());
exports.AnimationViewerComponent = AnimationViewerComponent;
var AnimationViewerController = (function () {
    function AnimationViewerController($scope, $timeout, project, just) {
        var _this = this;
        this.currentTime = 0;
        this.playState = 'playing';
        this.shape = 'square';
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.just = just;
        this.shapeOptions = {
            dataSource: {
                data: [
                    'square', 'button', 'text'
                ]
            },
            valuePrimitive: true
        };
        this.activeAnimation = project.current.activeAnimation;
        this.redraw();
        var requestRedraw = functions_1.debounce(this.redraw.bind(this), 50);
        $scope.$watch(function () { return project.current && project.current.activeAnimation; }, function (newVal, oldValue) {
            _this.activeAnimation = newVal;
        });
        $scope.$watch(function () { return project.current && project.current.activeAnimation && project.current.activeAnimation.timings; }, function (newVal, oldValue) {
            requestRedraw();
        }, true);
        $scope.$watch(function () { return project.current && project.current.activeAnimation && project.current.activeAnimation.keyframes; }, function (newVal, oldValue) {
            requestRedraw();
        }, true);
        $scope.$watch(function () { return _this.shape; }, function (newVal, oldValue) {
            _this.redraw();
        });
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updateCurrentTime();
    }
    Object.defineProperty(AnimationViewerController.prototype, "duration", {
        get: function () {
            if (this.activeAnimation && this.activeAnimation.timings) {
                return this.activeAnimation.timings.duration;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimationViewerController.prototype, "playButtonClass", {
        get: function () {
            return this.playState === 'playing' ? 'fa fa-pause' : 'fa fa-play';
        },
        enumerable: true,
        configurable: true
    });
    AnimationViewerController.prototype.togglePlay = function () {
        if (this.playState === 'playing') {
            this.pauseAnimation();
            return;
        }
        this.playAnimation();
    };
    AnimationViewerController.prototype.playAnimation = function () {
        this.playState = 'playing';
        if (!this.animator) {
            this.redraw();
            return;
        }
        this.animator.play();
    };
    AnimationViewerController.prototype.pauseAnimation = function () {
        this.playState = 'paused';
        this.animator.pause();
    };
    AnimationViewerController.prototype.setAnimationTime = function () {
        var currentTime = this.currentTime;
        if (this.animator) {
            this.animator.currentTime = typeof currentTime === 'string' ? parseFloat(currentTime) : currentTime;
        }
    };
    AnimationViewerController.prototype.stopAnimation = function () {
        this.playState = 'finished';
        if (!this.animator) {
            return;
        }
        this.animator.cancel();
    };
    AnimationViewerController.prototype.updateCurrentTime = function () {
        // cancel updates if not playing
        if (this.playState === 'finished' || this.playState === 'canceled') {
            this.currentTime = 0;
        }
        else {
            var a = this.animator;
            var duration = (a && a.duration) || 0;
            var currentTime = (a && a.currentTime) || 0;
            this.currentTime = Math.round(duration !== 0 && currentTime ? currentTime % duration : 0);
        }
        this.$timeout(this.updateCurrentTime, fps);
    };
    AnimationViewerController.prototype.redraw = function () {
        var a = this.activeAnimation;
        var $container = angular.element(document.querySelector(playerSelector));
        if (!a) {
            $container.empty().html(emptyShape);
            return;
        }
        var html;
        switch (this.shape) {
            case 'square':
                html = rectangleShape;
                break;
            case 'text':
                html = textShape;
                break;
            case 'button':
                html = buttonShape;
                break;
            default:
                throw Error('No shape selected');
        }
        $container.empty().html(html);
        var currentTime;
        if (this.animator) {
            currentTime = this.animator.currentTime;
        }
        else {
            currentTime = 0;
        }
        // clamp lower end to stop catastrophe
        if (a.timings.duration < 100) {
            a.timings.duration = 100;
        }
        var newAnimator = this.just.animate(a.keyframes, animationTargetSelector, {
            duration: a.timings.duration,
            easing: a.timings.easing,
            fill: a.timings.fill || 'none',
            iterations: Infinity
        });
        switch (this.playState) {
            case 'paused':
                newAnimator.pause();
                break;
            case 'finished':
                newAnimator.finish();
                break;
            case 'canceled':
                newAnimator.cancel();
                break;
            default:
                newAnimator.play();
                break;
        }
        newAnimator.currentTime = currentTime;
        this.animator = newAnimator;
    };
    AnimationViewerController.$inject = ['$scope', '$timeout', 'project', 'just'];
    return AnimationViewerController;
}());
exports.AnimationViewerController = AnimationViewerController;
//# sourceMappingURL=animation-viewer.component.js.map