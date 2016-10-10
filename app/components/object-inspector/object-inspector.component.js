"use strict";
var ObjectInspectorComponent = (function () {
    function ObjectInspectorComponent() {
        this.controller = ObjectInspectorController;
        this.templateUrl = './app/components/object-inspector/object-inspector.component.html';
    }
    return ObjectInspectorComponent;
}());
exports.ObjectInspectorComponent = ObjectInspectorComponent;
var ObjectInspectorController = (function () {
    function ObjectInspectorController($scope, projectService, metaService) {
        var _this = this;
        this.target = undefined;
        this.descriptor = undefined;
        this.showUnset = false;
        this.colorValueOptions = {
            buttons: true,
            preview: true,
            opacity: true
        };
        this.projectService = projectService;
        this.metaService = metaService;
        $scope.$watch(function () { return projectService.activeObject; }, function (newVal) {
            _this.target = newVal;
            _this.descriptor = metaService.getDescriptor(newVal);
        });
    }
    ObjectInspectorController.$inject = ['$scope', 'project', 'meta'];
    return ObjectInspectorController;
}());
exports.ObjectInspectorController = ObjectInspectorController;
//# sourceMappingURL=object-inspector.component.js.map