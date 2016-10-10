"use strict";
var KeyframeExplorerComponent = (function () {
    function KeyframeExplorerComponent() {
        this.controller = KeyframeExplorerController;
        this.templateUrl = './app/components/keyframe-explorer/keyframe-explorer.component.html';
    }
    return KeyframeExplorerComponent;
}());
exports.KeyframeExplorerComponent = KeyframeExplorerComponent;
var KeyframeExplorerController = (function () {
    function KeyframeExplorerController($scope, project) {
        var _this = this;
        var animation = project.current && project.current.activeAnimation ? project.current.activeAnimation : undefined;
        this.refreshAnimation(animation);
        $scope.$watch(function () { return project.current.activeAnimation; }, function (newVal, oldValue) {
            _this.refreshAnimation(newVal);
        });
    }
    KeyframeExplorerController.prototype.setActiveKeyframe = function (keyframe) {
        if (!this.animation || !keyframe) {
            return;
        }
        this.animation.activeKeyframe = keyframe;
    };
    KeyframeExplorerController.prototype.getMilliseconds = function (keyframe) {
        var offset = this.getOffset(keyframe);
        if (offset === undefined) {
            return undefined;
        }
        if (offset === 0) {
            return 0;
        }
        if (offset === 1) {
            return this.timings.duration;
        }
        return Math.round(offset * this.timings.duration);
    };
    KeyframeExplorerController.prototype.getOffset = function (keyframe) {
        if (keyframe && keyframe.offset) {
            return keyframe.offset;
        }
        var index = this.keyframes.indexOf(keyframe);
        if (index === -1) {
            return undefined;
        }
        if (index === 0) {
            return 0;
        }
        if (index === this.keyframes.length - 1) {
            return 1;
        }
        return Math.round(((index) / (this.keyframes.length - 1)) * 100) / 100;
    };
    KeyframeExplorerController.prototype.getPercentage = function (keyframe) {
        var offset = this.getOffset(keyframe);
        if (offset === undefined) {
            return 'Unknown';
        }
        if (offset === 0) {
            return 'to';
        }
        if (offset === 1) {
            return 'from';
        }
        return (offset * 100) + '%';
    };
    KeyframeExplorerController.prototype.isActive = function (keyframe) {
        return this.animation.activeKeyframe === keyframe;
    };
    KeyframeExplorerController.prototype.refreshAnimation = function (animation) {
        if (animation) {
            this.animation = animation;
            this.keyframes = animation.keyframes;
            this.timings = animation.timings;
        }
        else {
            this.animation = undefined;
            this.keyframes = undefined;
            this.timings = undefined;
        }
    };
    KeyframeExplorerController.$inject = ['$scope', 'project'];
    return KeyframeExplorerController;
}());
exports.KeyframeExplorerController = KeyframeExplorerController;
//# sourceMappingURL=keyframe-explorer.component.js.map