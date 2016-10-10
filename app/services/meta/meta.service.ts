import * as meta from '../../models/meta';

export class MetaService {

    private _descriptors: JAD.IModelDescriptor[] = [];

    public addDescriptor(descriptor: JAD.IModelDescriptor): void {
        this._descriptors.push(descriptor);
    }

    public getDescriptor(obj: Object): JAD.IModelDescriptor {
        const descriptors = this._descriptors;
        const len = descriptors.length;
        for (let i = 0; i < len; i++) {
            const descriptor = descriptors[i];
            if (obj instanceof descriptor.type) {
                return descriptor;
            }
        }
        return undefined;
    }
}
