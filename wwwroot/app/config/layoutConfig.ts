declare const GoldenLayout: any;

export const config: any = {
    content: [
        {
            content: [
                {
                    componentName: 'project-explorer',
                    componentState: { label: 'A' },
                    title: 'Project Explorer',
                    type: 'component',
                    width: 15
                },
                {
                    content: [
                        {
                            componentName: 'animation-viewer',
                            componentState: { label: 'A' },
                            title: 'Animation Player',
                            type: 'component'
                        },
                        {
                            componentName: 'animation-source-editor',
                            componentState: { label: 'A' },
                            title: 'Animation Source',
                            type: 'component'
                        }
                    ],
                    type: 'column'
                },
                {
                    content: [
                        {
                            componentName: 'animation-editor',
                            componentState: { label: 'B' },
                            height: 20,
                            title: 'Animation Properties',
                            type: 'component'
                        },
                        {
                            componentName: 'keyframe-explorer',
                            componentState: { label: 'A' },
                            height: 20,
                            title: 'Keyframe Explorer',
                            type: 'component'
                        },
                        {
                            componentName: 'keyframe-editor',
                            componentState: { label: 'C' },
                            title: 'Keyframe Properties',
                            type: 'component'
                        }
                    ],
                    type: 'column',
                    width: 18
                }
            ],
            type: 'row'
        }
    ],
    dimensions: {
        borderWidth: 5,
        dragProxyHeight: 200,
        dragProxyWidth: 300,
        headerHeight: 20,
        minItemHeight: 10,
        minItemWidth: 10,
    },
    labels: {
        close: 'close',
        maximise: 'maximise',
        minimise: 'minimise',
        popout: 'open in new window'
    },
    settings: {
        hasHeaders: true,
        constrainDragToContainer: true,
        reorderEnabled: true,
        selectionEnabled: false,
        closePopoutsOnUnload: false,
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
    }
};
