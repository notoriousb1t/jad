"use strict";
var ProjectExplorerComponent = (function () {
    function ProjectExplorerComponent() {
        this.controller = ProjectExplorerController;
        this.templateUrl = './app/components/project-explorer/project-explorer.component.html';
    }
    return ProjectExplorerComponent;
}());
exports.ProjectExplorerComponent = ProjectExplorerComponent;
var ProjectExplorerController = (function () {
    function ProjectExplorerController($scope, project) {
        var _this = this;
        this.project = project.current;
        // update current project target when it changes        
        $scope.$watch(function () { return project.current; }, function () { return _this.project = project.current; });
    }
    ProjectExplorerController.prototype.setActiveAnimation = function (animation) {
        this.project.activeAnimation = animation;
    };
    ProjectExplorerController.$inject = ['$scope', 'project'];
    return ProjectExplorerController;
}());
exports.ProjectExplorerController = ProjectExplorerController;
//# sourceMappingURL=project-explorer.component.js.map