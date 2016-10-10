import * as components from '../components/index';
import * as services from '../services/index';
import * as descriptors from '../models/index';
import * as strings from '../common/strings';

export function appStart(layout: any): ng.IModule {
    const app = angular.module('app', ['just.animate', 'kendo.directives']);

    // register services
    for (let name in services) {
        const prop = services[name];
        const ngName = strings.minimize(strings.unsuffix(name, 'Service'));
        app.service(ngName, prop);
    }

    // register components    
    for (let name in components) {
        const prop = components[name];
        const ngName = strings.minimize(strings.unsuffix(name, 'Component'));
        const selector = strings.convertPascalToHyphenated(ngName);
        
        // register the component in angular
        app.component(ngName, new (prop as any)());

        // register the component in golden layout        
        layout.registerComponent(selector, function (container: any, componentState: any): void {
            const $container = angular.element(container.getElement());
            $container.html(`<${selector}></${selector}>`);
        });
    }

    // register model descriptors
    app.run(['meta', function (meta: services.MetaService) {
        for (let name in descriptors) {
            meta.addDescriptor(descriptors[name]);
        }
    }]);

    // register top level event handlers
    app.run(['$rootScope', function registerEvents($rootScope: ng.IRootScopeService) {
        // register each event
    }]);
    
    return app;
}

