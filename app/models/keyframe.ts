import * as meta from './meta';

export class Keyframe implements ja.IKeyframe {
    public offset: number;

    public 'backdrop-filter': string ;
    public 'background': string ;
    public 'background-color': string ;
    public 'background-position': string ;
    public 'background-size': string ;
    public 'border': string ;
    public 'border-bottom': string ;
    public 'border-bottom-color': string ;
    public 'border-bottom-left-radius': number ;
    public 'border-bottom-right-radius': number ;
    public 'border-bottom-width': string ;
    public 'border-color': string ;
    public 'border-left': string ;
    public 'border-left-color': string ;
    public 'border-left-width': string ;
    public 'border-radius': number ;
    public 'border-right': string ;
    public 'border-right-color': string ;
    public 'border-right-width': string ;
    public 'border-top': string ;
    public 'border-top-color': string ;
    public 'border-top-left-radius': number ;
    public 'border-top-right-radius': number ;
    public 'border-top-width': string ;
    public 'border-width': string ;
    public 'bottom': string ;
    public 'box-shadow': string ;
    public 'clip': string ;
    public 'clip-path': string ;
    public 'color': string ;
    public 'column-count': string ;
    public 'column-gap': string ;
    public 'column-rule': string ;
    public 'column-rule-color': string ;
    public 'column-rule-width': string ;
    public 'column-width': string ;
    public 'columns': string ;
    public fill: string ;
    public fillOpacity: string ;
    public fillRule: string ;
    public 'filter': string ;
    public 'flex': string ;
    public 'flex-basis': string ;
    public 'flex-grow': string ;
    public 'flex-shrink': string ;
    public 'font': string ;
    public 'font-size': string ;
    public 'font-size-adjust': string ;
    public 'font-stretch': string ;
    public 'font-weight': string ;
    public 'grid-column-gap': string ;
    public 'grid-gap': string ;
    public 'grid-row-gap': string ;
    public 'height': string ;
    public 'left': string ;
    public 'letter-spacing': string ;
    public 'line-height': string ;
    public 'margin': string ;
    public 'margin-bottom': string ;
    public 'margin-left': string ;
    public 'margin-right': string ;
    public 'margin-top': string ;
    public 'mask': string ;
    public 'mask-position': string ;
    public 'mask-size': string ;
    public 'max-height': string ;
    public 'max-width': string ;
    public 'min-height': string ;
    public 'min-width': string ;
    public 'motion-offset': string ;
    public 'motion-rotation': string ;
    public 'object-position': string ;
    public 'opacity': number ;
    public 'order': number ;
    public 'outline': string ;
    public 'outline-color': string ;
    public 'outline-offset': string ;
    public 'outline-width': string ;
    public 'padding': string ;
    public 'padding-bottom': string ;
    public 'padding-left': string ;
    public 'padding-right': string ;
    public 'padding-top': string ;
    public 'perspective': string ;
    public 'perspective-origin': string ;
    public 'right': string ;
    public 'rotate': string ;
    public 'rotate3d': (number | string)[] ;
    public 'rotateX': string ;
    public 'rotateY': string ;
    public 'rotateZ': string ;
    public 'scale': number | number[] ;
    public 'scale3d': number | number[] ;
    public 'scaleX': number ;
    public 'scaleY': number ;
    public 'scaleZ': number ;
    public 'scroll-snap-coordinate': string ;
    public 'scroll-snap-destination': string ;

    public 'skew': string | string[] ;
    public 'skewX': string ;
    public 'skewY': string ;
    public 'shape-image-threshold': string ;
    public 'shape-margin': string ;
    public 'shape-outside': string ;
    public stroke: string ;
    public strokeDasharray: string ;
    public strokeDashoffset: string ;
    public strokeLinecap: string ;
    public strokeLinejoin: string ;
    public strokeMiterlimit: string ;
    public strokeOpacity: number ;
    public strokeWidth: string ;
    public 'text-decoration': string ;
    public 'text-decoration-color': string ;
    public 'text-emphasis': string ;
    public 'text-emphasis-color': string ;
    public 'text-indent': string ;
    public 'text-shadow': string ;
    public 'top': string ;
    public 'transform': string ;
    public 'transform-origin': string ;
    public 'translate': string | string[] ;
    public 'translate3d': string | string[] ;
    public 'translateX': string ;
    public 'translateY': string ;
    public 'translateZ': string ;
    public 'vertical-align': string ;
    public 'visibility': string ;
    public 'width': string ;
    public 'word-spacing': string ;
    public 'z-index': number;

    constructor(options?: ja.IKeyframe) {
        if (options) {
            this.setState(options);
        }
    }

    public resetToEmpty(): void {
        for (let name in this) {
            const prop = this[name];
            if (prop === undefined || typeof prop === 'function') {
                continue;
            }
            if (typeof prop === 'string') {
                this[name] = undefined;
                continue;
            }
            if (typeof prop === 'number') {
                this[name] = undefined;
                continue;
            }
            if (typeof prop.length === 'number') {
                this[name] = undefined;
                continue;
            }
        }
    }

    public getState(): ja.IKeyframe {
        const state = {};
        const keys = Object.keys(this).sort();
        const length = keys.length;

        for (let i = 0; i < length; i++) {
            const key = keys[i];
            if (key === '_lastState') {
                continue;
            }
            const val = this[key];
            if (val === undefined) {
                continue;
            }
            state[key] = val;
        }

        return state;
    }

    public setState(options: ja.IKeyframe): void {
        this.resetToEmpty();
        angular.extend(this, options);
    }
}

export const KeyframeDescriptor = new meta.ModelDescriptor({
    properties: [
        {
            name: 'backdrop-filter',
            type: meta.string
        },
        {
            name: 'background',
            type: meta.string
        },
        {
            name: 'background-color',
            type: meta.color_value
        },
        {
            name: 'background-position',
            type: meta.string
        },
        {
            name: 'background-size',
            type: meta.string
        },
        {
            name: 'border',
            type: meta.string
        },
        {
            name: 'border-bottom',
            type: meta.string
        },
        {
            name: 'border-bottom-color',
            type: meta.color_value
        },
        {
            name: 'border-bottom-left-radius',
            type: meta.number
        },
        {
            name: 'border-bottom-right-radius',
            type: meta.number
        },
        {
            name: 'border-bottom-width',
            type: meta.string
        },
        {
            name: 'border-color',
            type: meta.color_value
        },
        {
            name: 'border-left',
            type: meta.string
        },
        {
            name: 'border-left-color',
            type: meta.color_value
        },
        {
            name: 'border-left-width',
            type: meta.string
        },
        {
            name: 'border-radius',
            type: meta.number
        },
        {
            name: 'border-right',
            type: meta.string
        },
        {
            name: 'border-right-color',
            type: meta.color_value
        },
        {
            name: 'border-right-width',
            type: meta.string
        },
        {
            name: 'border-top',
            type: meta.string
        },
        {
            name: 'border-top-color',
            type: meta.string
        },
        {
            name: 'border-top-left-radius',
            type: meta.number
        },
        {
            name: 'border-top-right-radius',
            type: meta.number
        },
        {
            name: 'border-top-width',
            type: meta.string
        },
        {
            name: 'border-width',
            type: meta.string
        },
        {
            name: 'bottom',
            type: meta.string
        },
        {
            name: 'box-shadow',
            type: meta.string
        },
        {
            name: 'clip',
            type: meta.string
        },
        {
            name: 'clip-path',
            type: meta.string
        },
        {
            name: 'color',
            type: meta.color_value
        },
        {
            name: 'column-count',
            type: meta.string
        },
        {
            name: 'column-gap',
            type: meta.string
        },
        {
            name: 'column-rule',
            type: meta.string
        },
        {
            name: 'column-rule-color',
            type: meta.color_value
        },
        {
            name: 'column-rule-width',
            type: meta.string
        },
        {
            name: 'column-width',
            type: meta.string
        },
        {
            name: 'columns',
            type: meta.string
        },
        {
            name: 'fill',
            type: meta.string
        },
        {
            name: 'fillOpacity',
            type: meta.string
        },
        {
            name: 'fillRule',
            type: meta.string
        },
        {
            name: 'filter',
            type: meta.string
        },
        {
            name: 'flex',
            type: meta.string
        },
        {
            name: 'flex-basis',
            type: meta.string
        },
        {
            name: 'flex-grow',
            type: meta.string
        },
        {
            name: 'flex-shrink',
            type: meta.string
        },
        {
            name: 'font',
            type: meta.string
        },
        {
            name: 'font-size',
            type: meta.string
        },
        {
            name: 'font-size-adjust',
            type: meta.string
        },
        {
            name: 'font-stretch',
            type: meta.string
        },
        {
            name: 'font-weight',
            type: meta.string
        },
        {
            name: 'grid-column-gap',
            type: meta.string
        },
        {
            name: 'grid-gap',
            type: meta.string
        },
        {
            name: 'grid-row-gap',
            type: meta.string
        },
        {
            name: 'height',
            type: meta.string
        },
        {
            name: 'left',
            type: meta.string
        },
        {
            name: 'letter-spacing',
            type: meta.string
        },
        {
            name: 'line-height',
            type: meta.string
        },
        {
            name: 'margin',
            type: meta.string
        },
        {
            name: 'margin-bottom',
            type: meta.string
        },
        {
            name: 'margin-left',
            type: meta.string
        },
        {
            name: 'margin-right',
            type: meta.string
        },
        {
            name: 'margin-top',
            type: meta.string
        },
        {
            name: 'mask',
            type: meta.string
        },
        {
            name: 'mask-position',
            type: meta.string
        },
        {
            name: 'mask-size',
            type: meta.string
        },
        {
            name: 'max-height',
            type: meta.string
        },
        {
            name: 'max-width',
            type: meta.string
        },
        {
            name: 'min-height',
            type: meta.string
        },
        {
            name: 'min-width',
            type: meta.string
        },
        {
            name: 'motion-offset',
            type: meta.string
        },
        {
            name: 'motion-rotation',
            type: meta.string
        },
        {
            name: 'object-position',
            type: meta.string
        },
        {
            name: 'opacity',
            type: meta.number
        },
        {
            name: 'order',
            type: meta.number
        },
        {
            name: 'outline',
            type: meta.string
        },
        {
            name: 'outline-color',
            type: meta.color_value
        },
        {
            name: 'outline-offset',
            type: meta.string
        },
        {
            name: 'outline-width',
            type: meta.string
        },
        {
            name: 'padding',
            type: meta.string
        },
        {
            name: 'padding-bottom',
            type: meta.string
        },
        {
            name: 'padding-left',
            type: meta.string
        },
        {
            name: 'padding-right',
            type: meta.string
        },
        {
            name: 'padding-top',
            type: meta.string
        },
        {
            name: 'perspective',
            type: meta.string
        },
        {
            name: 'perspective-origin',
            type: meta.string
        },
        {
            name: 'right',
            type: meta.string
        },
        {
            name: 'rotate',
            type: meta.string
        },
        {
            name: 'rotate3d',
            type: meta.string
        },
        {
            name: 'rotateX',
            type: meta.string
        },
        {
            name: 'rotateY',
            type: meta.string
        },
        {
            name: 'rotateZ',
            type: meta.string
        },
        {
            name: 'scale',
            type: meta.number
        },
        {
            name: 'scale3d',
            type: meta.string
        },
        {
            name: 'scaleX',
            type: meta.number
        },
        {
            name: 'scaleY',
            type: meta.number
        },
        {
            name: 'scaleZ',
            type: meta.number
        },
        {
            name: 'scroll-snap-coordinate',
            type: meta.string
        },
        {
            name: 'scroll-snap-destination',
            type: meta.string
        },
        {
            name: 'skew',
            type: meta.string
        },
        {
            name: 'skewX',
            type: meta.string
        },
        {
            name: 'skewY',
            type: meta.string
        },
        {
            name: 'shape-image-threshold',
            type: meta.string
        },
        {
            name: 'shape-margin',
            type: meta.string
        },
        {
            name: 'shape-outside',
            type: meta.string
        },
        {
            name: 'stroke',
            type: meta.string
        },
        {
            name: 'strokeDasharray',
            type: meta.string
        },
        {
            name: 'strokeDashoffset',
            type: meta.string
        },
        {
            name: 'strokeLinecap',
            type: meta.string
        },
        {
            name: 'strokeLinejoin',
            type: meta.string
        },
        {
            name: 'strokeMiterlimit',
            type: meta.string
        },
        {
            name: 'strokeOpacity',
            type: meta.number
        },
        {
            name: 'strokeWidth',
            type: meta.string
        },
        {
            name: 'text-decoration',
            type: meta.string
        },
        {
            name: 'text-decoration-color',
            type: meta.color_value
        },
        {
            name: 'text-emphasis',
            type: meta.string
        },
        {
            name: 'text-emphasis-color',
            type: meta.color_value
        },
        {
            name: 'text-indent',
            type: meta.string
        },
        {
            name: 'text-shadow',
            type: meta.string
        },
        {
            name: 'top',
            type: meta.string
        },
        {
            name: 'transform',
            type: meta.string
        },
        {
            name: 'transform-origin',
            type: meta.string
        },
        {
            name: 'translate',
            type: meta.string
        },
        {
            name: 'translate3d',
            type: meta.string
        },
        {
            name: 'translateX',
            type: meta.string
        },
        {
            name: 'translateY',
            type: meta.string
        },
        {
            name: 'translateZ',
            type: meta.string
        },
        {
            name: 'vertical-align',
            type: meta.string
        },
        {
            name: 'visibility',
            type: meta.string
        },
        {
            name: 'width',
            type: meta.string
        },
        {
            name: 'word-spacing',
            type: meta.string
        },
        {
            name: 'z-index',
            type: meta.number
        }
    ],
    type: Keyframe
});
