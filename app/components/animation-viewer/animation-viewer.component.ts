import {debounce} from '../../common/functions';
import {Animation} from '../../models/Animation';
import {Keyframe} from '../../models/Keyframe';
import {ProjectService} from '../../services/project/project.service';

const fps = Math.round(1000 / 15.0);
const animationTargetSelector: string = '#animationTarget';
const rectangleShape: string = `<div id="animationTarget" class="animation-rectangle"></div>`;
const buttonShape: string = `<button id="animationTarget" class="animation-button k-button">Animate me</button>`;
const textShape: string = `<div id="animationTarget" class="animation-text">Animate me</div>`;
const emptyShape: string = `(Select an animation in the Project Explorer)`;
const playerSelector: string = '.animation-viewer .player';

type viewerShape = 'button' | 'square' | 'text';

export class AnimationViewerComponent {
    public controller: Function = AnimationViewerController;
    public templateUrl: string = './app/components/animation-viewer/animation-viewer.component.html';
}

export class AnimationViewerController {
    public static $inject: string[] = ['$scope', '$timeout', 'project', 'just'];

    public shapeOptions: kendo.ui.DropDownListOptions;
    public activeAnimation: Animation;
    public currentTime: number | string = 0;

    private $scope: ng.IScope;
    private $timeout: ng.ITimeoutService;
    private just: ja.IAnimationManager;
    private animator: ja.IAnimator;
    private playState: string = 'paused';
    private shape: viewerShape = 'square';

    public get duration(): number {
        if (this.activeAnimation && this.activeAnimation.timings) {
            return this.activeAnimation.timings.duration;
        }
        return 0;
    }

    public get playButtonClass(): string {
        return this.playState === 'playing' ? 'glyphicon glyphicon-pause' : 'glyphicon glyphicon-play';
    }

    constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, project: ProjectService, just: ja.IAnimationManager) {
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.just = just;

        this.shapeOptions = {
            dataSource: {
                data: [
                    'square', 'button', 'text'
                ]
            },
            valuePrimitive: true
        };

        this.activeAnimation = project.current.activeAnimation;
        this.redraw();

        const requestRedraw = debounce(this.redraw.bind(this), 50);

        $scope.$watch(
            () => project.current && project.current.activeAnimation,
            (newVal: Animation, oldValue: Animation) => {
                this.activeAnimation = newVal;
            });

        $scope.$watch(
            () => project.current && project.current.activeAnimation && project.current.activeAnimation.timings,
            (newVal: ja.IAnimationEffectTiming, oldValue: ja.IAnimationEffectTiming) => {
                requestRedraw();
            },
            true);

        $scope.$watch(
            () => project.current && project.current.activeAnimation && project.current.activeAnimation.keyframes,
            (newVal: Keyframe[], oldValue: Keyframe[]) => {
                requestRedraw();
            },
            true);

        $scope.$watch(
            () => this.shape,
            (newVal: string, oldValue: string) => {
                this.redraw();
            }
        );

        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updateCurrentTime();
    }

    public togglePlay(): void {
        if (this.playState === 'playing') {
            this.pauseAnimation();
            return;
        }
        this.playAnimation();
    }

    public playAnimation(): void {
        this.playState = 'playing';
        if (!this.animator) {
            this.redraw();
            return;
        }
        this.animator.play();
    }

    public pauseAnimation(): void {
        this.playState = 'paused';
        this.animator.pause();
    }

    public setAnimationTime(): void {
        const currentTime = this.currentTime;
        if (this.animator) {
            this.animator.currentTime = typeof currentTime === 'string' ? parseFloat(currentTime) : currentTime;
        }
    }

    public stopAnimation(): void {
        this.playState = 'finished';
        if (!this.animator) {
            return;
        }
        this.animator.cancel();
    }

    private updateCurrentTime(): void {
        // cancel updates if not playing
        let newCurrentTime: number;
        if (this.playState === 'finished' || this.playState === 'canceled') {
            newCurrentTime = 0;
        } else {
            const a = this.animator;
            const duration = (a && a.duration) || 0;
            const currentTime = (a && a.currentTime) || 0;

            if (duration !== currentTime) {
                newCurrentTime = Math.round(duration !== 0 && currentTime ? currentTime % duration : 0);
            } else {
                newCurrentTime = duration;
            }
        }
        this.currentTime = newCurrentTime;

        this.$timeout(this.updateCurrentTime, fps);
    }

    private redraw(): void {
        const a = this.activeAnimation;
        const $container = angular.element(document.querySelector(playerSelector));

        if (!a) {
            $container.empty().html(emptyShape);
            return;
        }

        let html: string;
        switch (this.shape) {
            case 'square':
                html = rectangleShape;
                break;
            case 'text':
                html = textShape;
                break;
            case 'button':
                html = buttonShape;
                break;
            default:
                throw Error('No shape selected');
        }
        $container.empty().html(html);

        let currentTime: number;
        if (this.animator) {
            currentTime = this.animator.currentTime;
        } else {
            currentTime = 0;
        }

        // clamp lower end to stop catastrophe
        if (a.timings.duration < 100) {
            a.timings.duration = 100;
        }

        const newAnimator = this.just.animate(a.keyframes, animationTargetSelector, {
            duration: a.timings.duration,
            easing: a.timings.easing,
            fill: 'none',
            iterations: 1
        });

        newAnimator.onfinish = () => {
            this.playState = 'finished';
        };

        newAnimator.oncancel = () => {
            this.playState = 'canceled';
        };

        switch (this.playState) {
            case 'paused':
                newAnimator.pause();
                break;
            case 'finished':
                newAnimator.finish();
                break;
            case 'canceled':
                newAnimator.cancel();
                break;
            default:
                newAnimator.play();
                break;
        }

        newAnimator.currentTime = currentTime;

        this.animator = newAnimator;
    }
}

