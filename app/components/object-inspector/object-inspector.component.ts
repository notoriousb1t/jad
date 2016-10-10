import * as services from '../../services/index';

export class ObjectInspectorComponent {
    public controller: Function = ObjectInspectorController;
    public templateUrl: string = './app/components/object-inspector/object-inspector.component.html';
}

export class ObjectInspectorController {
    public static $inject: string[] = ['$scope', 'project', 'meta'];

    public target: Object = undefined;
    public descriptor: JAD.IModelDescriptor = undefined;
    public showUnset: boolean = false;

    public colorValueOptions: kendo.ui.ColorPickerOptions = {
        buttons: true,
        preview: true,
        opacity: true
    };

    private metaService: services.MetaService;
    private projectService: services.ProjectService;

    constructor($scope: ng.IScope, projectService: services.ProjectService, metaService: services.MetaService) {
        this.projectService = projectService;
        this.metaService = metaService;

        $scope.$watch(
            () => projectService.activeObject,
            (newVal: Object) => {
                this.target = newVal;
                this.descriptor = metaService.getDescriptor(newVal);
            }); 
    }
}
