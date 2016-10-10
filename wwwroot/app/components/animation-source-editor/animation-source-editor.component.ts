import {ProjectService} from '../../services/index';
import {Animation} from '../../models/Animation';
import {debounce} from '../../common/functions';

export class AnimationSourceEditorComponent {
    public controller: Function = AnimationSourceEditorController;
    public templateUrl: string = './app/components/animation-source-editor/animation-source-editor.component.html';
}

declare const ace: any;

export class AnimationSourceEditorController {
    public static $inject: string[] = ['$scope', '$element', '$timeout', 'project'];

    public animation: Animation;
    private editor: any;

    constructor($scope: ng.IScope, $element: JQuery, $timeout: ng.ITimeoutService, project: ProjectService) {

        const el = $element.find('.editor')[0];
        const editor = ace.edit(el);
        const setAnimationState = debounce(
            () => {
                try {
                    const options = JSON.parse(editor.getValue()) as ja.IAnimationOptions;
                    this.animation.setState(options);
                    console.log('setting state');
                } catch (err) {
                    // swallow parsing errors
                }
            },
            650);
        editor.setOption({
            maxLines: Infinity
        });

        // turn off warnings for scroll to view        
        editor.$blockScrolling = Infinity;
        editor.setTheme('ace/theme/twilight');
        editor.getSession().setMode('ace/mode/json');
        editor.on('change', setAnimationState);

        this.editor = editor;

        $scope.$watch(
            () => project.current && project.current.activeAnimation,
            this.refreshAnimation.bind(this),
            true);
    }

    public refreshAnimation(newVal: Animation, oldValue: Animation): void {
        let source = newVal ? newVal.toString() : '';

        if (newVal === oldValue) {
            // replace contents, keep position in the same place
            const editor = this.editor;
            const pos = editor.session.selection.toJSON();
            editor.setValue(source);
            editor.session.selection.fromJSON(pos);

            this.animation = newVal;
            console.log('refreshing animation');
        } else {
            this.animation = newVal;

            const editor = this.editor;
            const pos = editor.session.selection.toJSON();
            editor.setValue(source);
            editor.session.selection.fromJSON(pos);
        }
    }
}
