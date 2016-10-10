import {ProjectService} from '../../services/index';
import {Animation} from '../../models/Animation';

export class AnimationEditorComponent {
    public controller: Function = AnimationEditorController;
    public templateUrl: string = './app/components/animation-editor/animation-editor.component.html';
}

export class AnimationEditorController {
    public static $inject: string[] = ['$scope', 'project'];

    public animation: Animation;

    constructor($scope: ng.IScope, project: ProjectService) {
        this.refreshAnimation(project.current && project.current.activeAnimation);

        $scope.$watch(
            () => project.current && project.current.activeAnimation,
            (newVal: Animation, oldValue: Animation) => {
                this.refreshAnimation(newVal);
            });
    }

    public refreshAnimation(animation: Animation): void {
        this.animation = animation;
    }
}
