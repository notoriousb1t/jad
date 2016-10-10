import {ProjectService} from '../../services/index';
import {Project} from '../../models/project';
import {Animation} from '../../models/animation';
import {Keyframe} from '../../models/keyframe';

export class ProjectExplorerComponent {
    public controller: Function = ProjectExplorerController;
    public templateUrl: string = './app/components/project-explorer/project-explorer.component.html';
}

export class ProjectExplorerController {
    public static $inject: string[] = ['$scope', 'project'];
 
    private project: Project;
    private projectService: ProjectService;

    constructor($scope: ng.IScope, projectService: ProjectService) {
        this.project = projectService.current;
        this.projectService = projectService;
        
        // update current project target when it changes        
        $scope.$watch(() => projectService.current, () => this.project = projectService.current);
    }

    public inspect(animation: Animation, obj: Object): void {
        this.project.activeAnimation = animation;
        this.projectService.activeObject = obj;
    }

    public isActive(obj: Object): boolean {
        return this.projectService.activeObject === obj;
    }
}
