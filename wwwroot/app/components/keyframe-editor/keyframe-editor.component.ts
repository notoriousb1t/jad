import {ProjectService} from '../../services/index';
import {Keyframe} from '../../models/keyframe';

export class KeyframeEditorComponent {
    public controller: Function = KeyframeEditorController;
    public templateUrl: string = './app/components/keyframe-editor/keyframe-editor.component.html';
}

export class KeyframeEditorController {
    public static $inject: string[] = ['$scope', 'project'];

    public keyframe: Keyframe;

    constructor($scope: ng.IScope, project: ProjectService) {
        const keyframe = project.current && project.current.activeAnimation && project.current.activeAnimation.activeKeyframe
            ? project.current.activeAnimation.activeKeyframe : undefined;
        
        this.refreshKeyframe(keyframe);

        $scope.$watch(
            () => project.current && project.current.activeAnimation && project.current.activeAnimation.activeKeyframe,
            (newVal: Keyframe, oldValue: Keyframe) => {
                this.refreshKeyframe(newVal);
            });
    }

    public refreshKeyframe(keyframe: Keyframe): void {
        this.keyframe = keyframe || undefined;
    }
}
