import {Keyframe} from './keyframe';
import {AnimationEffectTiming} from './animationEffectTiming';
import * as meta from './meta';

export class Animation implements ja.IAnimationOptions { 

    public name: string = undefined;
    public keyframes: Keyframe[] = undefined;
    public timings: AnimationEffectTiming = undefined;
    public activeKeyframeIndex: number = -1;

    private _lastState: string;

    constructor(options?: ja.IAnimationOptions) {
        this.resetToEmpty();

        if (options) {
            this.setState(options);
        }
    }

    public resetToEmpty(): void {
        this.setState({
            keyframes: [],
            name: '',
            timings: {
                duration: 1000,
                easing: 'ease',
                fill: 'both',
                iterations: 1
            }
        });
    }

    public setState(state: ja.IAnimationOptions): void {
        this.name = state.name;
        
        if (!this.keyframes) {
            // create keyframes on first run
            this.keyframes = (state.keyframes as []).map((s: ja.IKeyframe) => new Keyframe(s));
        } else if (this.keyframes.length !== state.keyframes.length) {
            // todo: find other opportunities for reuse
            // create new objects if reconciliation is not possible
            this.keyframes = (state.keyframes as []).map((s: ja.IKeyframe) => new Keyframe(s));
        } else {
            // reuse existing objects if the same amonut of keyframes exist
            for (let i = 0, len = this.keyframes.length; i < len; i++) {
                this.keyframes[i].setState(state.keyframes[i]);
            } 
        }

        // set timing options or create them
        if (!this.timings) {
            this.timings = new AnimationEffectTiming(state.timings);
        } else {
            this.timings.setState(state.timings);
        }        
        
        this._lastState = JSON.stringify(state);
    }

    public getState(): ja.IAnimationOptions {
        const state = {
            keyframes: (this.keyframes || []).map((k: Keyframe) => k.getState()),
            name: this.name,
            timings: this.timings
        };

        // if the properties value equals this one, ensure property order is the same in output 
        if (this._lastState) {
            const lastState = JSON.parse(this._lastState);
            if (angular.equals(state, lastState)) {
                return lastState;
            }
        }

        return state;
    }

    public toString(): string {
        const state = this.getState();
        return JSON.stringify(state, undefined, '\t');
    }
}

export const AnimationDescriptor = new meta.ModelDescriptor({
    properties: [
        {
            name: 'name',
            type: meta.string
        }
    ],
    type: Animation
});
