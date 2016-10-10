"use strict";
var AnimationEditorComponent = (function () {
    function AnimationEditorComponent() {
        this.controller = AnimationEditorController;
        this.templateUrl = './app/components/animation-editor/animation-editor.component.html';
    }
    return AnimationEditorComponent;
}());
exports.AnimationEditorComponent = AnimationEditorComponent;
var AnimationEditorController = (function () {
    function AnimationEditorController($scope, project) {
        var _this = this;
        this.refreshAnimation(project.current && project.current.activeAnimation);
        $scope.$watch(function () { return project.current && project.current.activeAnimation; }, function (newVal, oldValue) {
            _this.refreshAnimation(newVal);
        });
    }
    AnimationEditorController.prototype.refreshAnimation = function (animation) {
        this.animation = animation;
    };
    AnimationEditorController.$inject = ['$scope', 'project'];
    return AnimationEditorController;
}());
exports.AnimationEditorController = AnimationEditorController;
//# sourceMappingURL=animation-editor.component.js.map