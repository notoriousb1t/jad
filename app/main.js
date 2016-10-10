"use strict";
var layoutConfig_1 = require('./config/layoutConfig');
var ngConfigure_1 = require('./config/ngConfigure');
var layout = new GoldenLayout(layoutConfig_1.config);
var ngApp = ngConfigure_1.appStart(layout);
layout.init();
angular.bootstrap(document.body, ['app'], { strictDi: true });
//# sourceMappingURL=main.js.map