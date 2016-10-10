"use strict";
var KeyframeEditorComponent = (function () {
    function KeyframeEditorComponent() {
        this.controller = KeyframeEditorController;
        this.templateUrl = './app/components/keyframe-editor/keyframe-editor.component.html';
    }
    return KeyframeEditorComponent;
}());
exports.KeyframeEditorComponent = KeyframeEditorComponent;
var KeyframeEditorController = (function () {
    function KeyframeEditorController($scope, project) {
        var _this = this;
        var keyframe = project.current && project.current.activeAnimation && project.current.activeAnimation.activeKeyframe
            ? project.current.activeAnimation.activeKeyframe : undefined;
        this.refreshKeyframe(keyframe);
        $scope.$watch(function () { return project.current && project.current.activeAnimation && project.current.activeAnimation.activeKeyframe; }, function (newVal, oldValue) {
            _this.refreshKeyframe(newVal);
        });
    }
    KeyframeEditorController.prototype.refreshKeyframe = function (keyframe) {
        this.keyframe = keyframe || undefined;
    };
    KeyframeEditorController.$inject = ['$scope', 'project'];
    return KeyframeEditorController;
}());
exports.KeyframeEditorController = KeyframeEditorController;
//# sourceMappingURL=keyframe-editor.component.js.map