import * as components from '../components/index';
import * as services from '../services/index';

export function appStart(layout: any): ng.IModule {
    const app = angular.module('app', ['just.animate', 'kendo.directives']);

    // register services
    for (let name in services) {
        const prop = services[name];
        const ngName = minimize(unsuffix(name, 'Service'));
        app.service(ngName, prop);
    }

    // register components    
    for (let name in components) {
        const prop = components[name];
        const ngName = minimize(unsuffix(name, 'Component'));
        const selector = convertPascalToHyphenated(ngName);
        
        // register the component in angular
        app.component(ngName, new (prop as any)());

        // register the component in golden layout        
        layout.registerComponent(selector, function (container: any, componentState: any): void {
            const $container = angular.element(container.getElement());
            $container.html(`<${selector}></${selector}>`);
        });
    }

    // register top level event handlers
    app.run(['$rootScope', function registerEvents($rootScope: ng.IRootScopeService) {
        // register each event
    }]);
    
    return app;
}

function convertPascalToHyphenated(input: string): string {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function minimize(input: string): string {
    if (!input || input.length < 1) {
        return input;
    }
    return input[0].toLowerCase() + input.substr(1, input.length - 1);
}

function unsuffix(input: string, suffix: string): string {
    const lastIndexOfSuffix = input.lastIndexOf(suffix);
    if (lastIndexOfSuffix === -1) {
        return input;
    }
    return input.substr(0, lastIndexOfSuffix);
}
