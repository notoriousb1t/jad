"use strict";
var components = require('../components/index');
var services = require('../services/index');
function appStart(layout) {
    var app = angular.module('app', ['just.animate', 'kendo.directives']);
    // register services
    for (var name_1 in services) {
        var prop = services[name_1];
        var ngName = minimize(unsuffix(name_1, 'Service'));
        app.service(ngName, prop);
    }
    // register components    
    var _loop_1 = function(name_2) {
        var prop = components[name_2];
        var ngName = minimize(unsuffix(name_2, 'Component'));
        var selector = convertPascalToHyphenated(ngName);
        // register the component in angular
        app.component(ngName, new prop());
        // register the component in golden layout        
        layout.registerComponent(selector, function (container, componentState) {
            var $container = angular.element(container.getElement());
            $container.html("<" + selector + "></" + selector + ">");
        });
    };
    for (var name_2 in components) {
        _loop_1(name_2);
    }
    // register top level event handlers
    app.run(['$rootScope', function registerEvents($rootScope) {
            // register each event
        }]);
    return app;
}
exports.appStart = appStart;
function convertPascalToHyphenated(input) {
    return input.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
function minimize(input) {
    if (!input || input.length < 1) {
        return input;
    }
    return input[0].toLowerCase() + input.substr(1, input.length - 1);
}
function unsuffix(input, suffix) {
    var lastIndexOfSuffix = input.lastIndexOf(suffix);
    if (lastIndexOfSuffix === -1) {
        return input;
    }
    return input.substr(0, lastIndexOfSuffix);
}
//# sourceMappingURL=ngConfigure.js.map