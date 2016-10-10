export class Keyframe implements ja.IKeyframe {
    public offset: number ;

    public 'all': string ;
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

    private setState(options: ja.IKeyframe): void {
        this.resetToEmpty();
        angular.extend(this, options);
    }
}
