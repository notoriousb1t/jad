import { Animation } from './animation';
import * as meta from './meta';

export class Project implements JAD.IProjectOptions {
    public activeAnimation: Animation;
    public animations: Animation[];
    public name: string;
    private initialState: JAD.IProjectOptions;

    constructor(options?: JAD.IProjectOptions) {
        this.resetToEmpty();
        if (options) {
            this.setState(options);
        }
        this.initialState = angular.copy(this);
    }

    public resetToEmpty(): void {
        this.name = 'Default';
        this.animations = [
            new Animation({
                keyframes: [
                    {
                        "rotate": "0",
                        "transform-origin": "50% 50%"
                    },
                    {
                        "rotate": "180deg"
                    },
                    {
                        "rotate": "360deg"
                    }
                ],
                name: 'twirl',
                timings: {
                    duration: 2500,
                    easing: 'ease-out',
                    fill: 'both',
                    iterations: 1
                }
            }),
            new Animation({
                keyframes: [
                    { opacity: 0 },
                    { opacity: 1 }
                ],
                name: 'fadeIn',
                timings: {
                    duration: 1000,
                    easing: 'ease-out',
                    fill: 'both',
                    iterations: 1
                }
            })
        ];
        this.activeAnimation = undefined;
    }

    public resetToInitial(): void {
        this.setState(this.initialState);
    }

    private setState(state: JAD.IProjectOptions): void {
        this.name = state.name;
        this.animations = state.animations.map((s: ja.IAnimationOptions) => new Animation(s));
    }
}

export const ProjectDescriptor = new meta.ModelDescriptor({
    properties: [
        {
            name: 'name',
            type: meta.string
        }
    ],
    type: Project
});

