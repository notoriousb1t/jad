import {Project} from '../../models/project';

export class ProjectService {

    public current: Project;

    constructor() {
        this.resetToEmpty();
    }

    public resetToEmpty(): void {
        this.current = new Project();
    }      

    public importProject(options: JAD.IProjectOptions): void {
        this.current = new Project(options);
    }
    
}
