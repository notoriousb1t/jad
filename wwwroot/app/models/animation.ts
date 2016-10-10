import {Keyframe} from './keyframe';

export class Animation implements ja.IAnimationOptions { 

    public name: string;
    public keyframes: Keyframe[];
    public timings: ja.IAnimationEffectTiming;

    private _activeIndex: number = -1;
    private _lastState: string;   

    public get activeKeyframe(): Keyframe {
        const index = this._activeIndex;
        const keyframes = this.keyframes;

        if (index < 0) {
            if (keyframes.length > 0) {
                return keyframes[0];
            }
            return undefined;
        }
        if (index > keyframes.length) {
            return undefined;
        }

        return keyframes[index];
    }

    public set activeKeyframe(value: Keyframe) {
        if (!value) {
            this._activeIndex = -1;
            return;
        }
        const index = this.keyframes.indexOf(value);
        if (index === -1) {
            this._activeIndex = -1;
            return;
        }
        this._activeIndex = index;
    }

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
        this.keyframes = (state.keyframes as []).map((s: ja.IKeyframe) => new Keyframe(s));
        this.timings = {};
        if (state.timings.duration) {
            this.timings.duration = state.timings.duration;
        }
        if (state.timings.fill) {
            this.timings.fill = state.timings.fill;
        }
        if (state.timings.easing) {
            this.timings.easing = state.timings.easing;
        }
        if (state.timings.iterations) {
            this.timings.iterations = state.timings.iterations;
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
