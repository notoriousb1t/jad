declare const GoldenLayout: any;
declare const require: any;

import {config} from './config/layoutConfig';
import {appStart} from './config/ngConfigure';
import {debounce} from './common/functions';



// FIXME: fix the loading process, this is awful
document.addEventListener('DOMContentLoaded', () => {
    const $container = document.getElementById('viewport');
    const layout = new GoldenLayout(config, $container);
    const ngApp = appStart(layout);

    layout.init();
    
    $(window).resize('resize', debounce(() => {
        layout.updateSize();
    }, 125) as any);

    // configure monaco require paths
    require.config({
        paths: {
            'vs': 'libs/monaco-editor/min/vs'
        }
    });
    require(['vs/editor/editor.main'], function () {
        angular.bootstrap(document.body, ['app'], { strictDi: true });
    });
});
