declare const GoldenLayout: any;
import {config} from './config/layoutConfig';
import {appStart} from './config/ngConfigure';

const layout = new GoldenLayout(config);
const ngApp = appStart(layout);

layout.init();
angular.bootstrap(document.body, ['app'], { strictDi: true });
