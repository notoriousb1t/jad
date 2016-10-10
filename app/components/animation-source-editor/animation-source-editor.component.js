"use strict";
var functions_1 = require('../../common/functions');
var AnimationSourceEditorComponent = (function () {
    function AnimationSourceEditorComponent() {
        this.controller = AnimationSourceEditorController;
        this.templateUrl = './app/components/animation-source-editor/animation-source-editor.component.html';
    }
    return AnimationSourceEditorComponent;
}());
exports.AnimationSourceEditorComponent = AnimationSourceEditorComponent;
var AnimationSourceEditorController = (function () {
    function AnimationSourceEditorController($scope, $element, $timeout, project) {
        var _this = this;
        var el = $element.find('.editor')[0];
        var editor = monaco.editor.create(el, {
            value: '',
            language: 'json',
            theme: 'vs-dark',
            automaticLayout: true
        });
        var setAnimationState = functions_1.debounce(function () {
            try {
                var options = JSON.parse(_this.editor.getValue());
                _this.animation.setState(options);
                console.log('setting state');
            }
            catch (err) {
            }
        }, 650);
        editor.onDidChangeModelContent(setAnimationState);
        $scope.$watch(function () { return project.current && project.current.activeAnimation; }, this.refreshAnimation.bind(this), true);
        this.editor = editor;
    }
    AnimationSourceEditorController.prototype.refreshAnimation = function (newVal, oldValue) {
        var source = newVal ? newVal.toString() : '';
        var editor = this.editor;
        var pos = editor.getPosition();
        editor.setValue(source);
        editor.setPosition(pos);
        this.animation = newVal;
    };
    AnimationSourceEditorController.$inject = ['$scope', '$element', '$timeout', 'project'];
    return AnimationSourceEditorController;
}());
exports.AnimationSourceEditorController = AnimationSourceEditorController;
//# sourceMappingURL=animation-source-editor.component.js.map