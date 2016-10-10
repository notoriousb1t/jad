declare const monaco: any;
declare const require: any;

import {ProjectService} from '../../services/index';
import {Animation} from '../../models/Animation';
import {debounce} from '../../common/functions';

export class AnimationSourceEditorComponent {
    public controller: Function = AnimationSourceEditorController;
    public templateUrl: string = './app/components/animation-source-editor/animation-source-editor.component.html';
}

export class AnimationSourceEditorController {
    public static $inject: string[] = ['$scope', '$element', '$timeout', 'project'];

    public animation: Animation;
    private editor: any;

    constructor($scope: ng.IScope, $element: JQuery, $timeout: ng.ITimeoutService, project: ProjectService) {
        const el = $element.find('.editor')[0];

        var editor = monaco.editor.create(el, {
            value: '',
            language: 'json',
            theme: 'vs-dark',
            automaticLayout: true
        });

        const setAnimationState = debounce(
            () => {
                try {
                    const options = JSON.parse(this.editor.getValue()) as ja.IAnimationOptions;
                    this.animation.setState(options);
                    console.log('setting state');
                } catch (err) {
                    // swallow parsing errors
                }
            },
            650);

        editor.onDidChangeModelContent(setAnimationState);

        $scope.$watch(
            () => project.current && project.current.activeAnimation,
            this.refreshAnimation.bind(this),
            true);

        this.editor = editor;
    }

    public refreshAnimation(newVal: Animation, oldValue: Animation): void {
        let source = newVal ? newVal.toString() : '';
        const editor = this.editor;

        var pos = editor.getPosition();
        editor.setValue(source);
        editor.setPosition(pos);

        this.animation = newVal;
    }
}
