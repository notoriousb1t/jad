import * as meta from './meta';

export class AnimationEffectTiming implements ja.IAnimationEffectTiming {

    public duration: number;
    public easing: ja.Easing;
    public fill: ja.FillMode;
    public iterations: number;

    constructor(options?: ja.IAnimationEffectTiming) {
        this.resetToEmpty();

        if (options) {
            this.setState(options);
        }
    }

    public resetToEmpty(): void {
        this.setState({
            duration: 1000,
            easing: 'ease',
            fill: 'none',
            iterations: 1
        });
    }

    public setState(state: ja.IAnimationEffectTiming): void {
        if (state.duration) {
            this.duration = state.duration;
        }
        if (state.easing) {
            this.easing = state.easing;
        }
        if (state.fill) {
            this.fill = state.fill;
        }
        if (state.iterations) {
            this.iterations = state.iterations;
        }
    }

    public getState(): ja.IAnimationEffectTiming {
        return {
            duration: this.duration,
            easing: this.easing,
            fill: this.fill,
            iterations: this.iterations
        };
    }

    public toString(): string {
        const state = this.getState();
        return JSON.stringify(state, undefined, '\t');
    }
}

export const AnimationEffectTimingDescriptor = new meta.ModelDescriptor({
    properties: [
        {
            name: 'duration',
            type: meta.integer
        },
        {
            name: 'easing',
            type: meta.timingFunction
        },
        {
            name: 'fill',
            restrict: true,
            selections: ['none', 'forwards', 'backwards', 'both'],
            type: meta.string
        },
        {
            name: 'iterations',
            type: meta.integer
        }
    ],
    type: AnimationEffectTiming
});
