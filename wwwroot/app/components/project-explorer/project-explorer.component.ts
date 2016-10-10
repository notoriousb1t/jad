import {ProjectService} from '../../services/index';
import {Project} from '../../models/project';
import {Animation} from '../../models/animation';

export class ProjectExplorerComponent {
    public controller: Function = ProjectExplorerController;
    public templateUrl: string = './app/components/project-explorer/project-explorer.component.html';
}

export class ProjectExplorerController {
    public static $inject: string[] = ['$scope', 'project'];
 
    private project: Project;

    constructor($scope: ng.IScope, project: ProjectService) {
        this.project = project.current;
        
        // update current project target when it changes        
        $scope.$watch(() => project.current, () => this.project = project.current);
    }

    public setActiveAnimation(animation: Animation): void {
        this.project.activeAnimation = animation;
    }

    public isActive(animation: Animation): boolean {
        return this.project.activeAnimation === animation;
    }
}
