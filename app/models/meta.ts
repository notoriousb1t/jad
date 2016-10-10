export const angle: string = 'angle';
export const basicShape: string = 'basic-shape';
export const blendMode: string = 'blend-mode';
export const color_value: string = 'color_value';
export const customIdent: string = 'custom-ident';
export const gradient: string = 'gradient';
export const image: string = 'image';
export const integer: string = 'integer';
export const length: string = 'length';
export const number: string = 'number';
export const percentage: string = 'percentage';
export const positionValue: string = 'position_value';
export const ratio: string = 'ratio';
export const resolution: string = 'resolution';
export const shape: string = 'shape';
export const shapeBox: string = 'shape-box';
export const string: string = 'string';
export const time: string = 'time';
export const timingFunction: string = 'timing-function';
export const transformFunction: string = 'transform-function';

export class ModelDescriptor implements JAD.IModelDescriptor {
    public properties: PropertyDescriptor[] = undefined;
    public type: Function = undefined;

    constructor(options: JAD.IModelDescriptor) {
        this.properties = options.properties.map(p => new PropertyDescriptor(p));
        this.type = options.type;
    }
}

export class PropertyDescriptor implements JAD.IPropertyDescriptor {
    public name: string = undefined;
    public restrict: boolean = undefined;
    public selections: string[] = undefined;
    public type: JAD.PropertyType = undefined;

    constructor(options: JAD.IPropertyDescriptor) {
        this.name = options.name;
        this.restrict = options.restrict || false;
        this.selections = options.selections || undefined;
        this.type = options.type;
    }
}