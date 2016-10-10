"use strict";
var project_1 = require('../../models/project');
var ProjectService = (function () {
    function ProjectService() {
        this.resetToEmpty();
    }
    ProjectService.prototype.resetToEmpty = function () {
        this.current = new project_1.Project();
    };
    ProjectService.prototype.importProject = function (options) {
        this.current = new project_1.Project(options);
    };
    return ProjectService;
}());
exports.ProjectService = ProjectService;
//# sourceMappingURL=project.service.js.map