import {Animation} from '../../models/Animation';
import {Keyframe} from '../../models/Keyframe';
import {ProjectService} from '../../services/index';

export class KeyframeExplorerComponent {
    public controller: Function = KeyframeExplorerController;
    public templateUrl: string = './app/components/keyframe-explorer/keyframe-explorer.component.html';
}

export class KeyframeExplorerController {
    public static $inject: string[] = ['$scope', 'project'];
    
    public keyframes: Keyframe[];
    private timings: ja.IAnimationEffectTiming;
    private animation: Animation;

    constructor($scope: ng.IScope, project: ProjectService) {
        const animation = project.current && project.current.activeAnimation ? project.current.activeAnimation : undefined;
        this.refreshAnimation(animation);

        $scope.$watch(() => project.current.activeAnimation, (newVal: Animation, oldValue: Animation) => {
            this.refreshAnimation(newVal);
        });
    }

    public setActiveKeyframe(keyframe: Keyframe): void {
        if (!this.animation || !keyframe) {
            return;
        }
        this.animation.activeKeyframe = keyframe;
    }

    public getMilliseconds(keyframe: Keyframe): number {
        const offset = this.getOffset(keyframe);
        if (offset === undefined) {
            return undefined;
        }
        if (offset === 0) {
            return 0;
        }
        if (offset === 1) {
            return this.timings.duration;
        }
        return Math.round(offset * this.timings.duration);
    }

    public getOffset(keyframe: Keyframe): number {
        if (keyframe && keyframe.offset) {
            return keyframe.offset;
        }
        const index = this.keyframes.indexOf(keyframe);
        if (index === -1) {
            return undefined;
        }
        if (index === 0) {
            return 0;
        }
        if (index === this.keyframes.length - 1) {
            return 1;
        }
        return Math.round(((index) / (this.keyframes.length - 1)) * 100) / 100;
    }

    public getPercentage(keyframe: Keyframe): string {
        const offset = this.getOffset(keyframe);
        if (offset === undefined) {
            return 'Unknown';
        }
        if (offset === 0) {
            return 'to';
        }
        if (offset === 1) {
            return 'from';
        }
        return (offset * 100) + '%';
    }

    public isActive(keyframe: Keyframe): boolean {
        return this.animation.activeKeyframe === keyframe;
    }

    private refreshAnimation(animation: Animation): void {
        if (animation) { 
            this.animation = animation;
            this.keyframes = animation.keyframes;
            this.timings = animation.timings;            
        } else {
            this.animation = undefined;
            this.keyframes = undefined;
            this.timings = undefined;
        }
    }
}
