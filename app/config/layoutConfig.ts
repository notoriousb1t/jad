declare const GoldenLayout: any;

export const config: any = {
    content: [
        {
            content: [
                {
                    componentName: 'project-explorer',
                    componentState: { label: 'A' },
                    title: 'Navigator',
                    type: 'component',
                    width: 15
                },
                {
                    content: [
                        {
                            componentName: 'animation-viewer',
                            componentState: { label: 'A' },
                            height: 60,
                            title: 'Animation Player',
                            type: 'component'
                        },
                        // FIXME: Hidden because I think it causing a lot of state changes
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
                            componentName: 'object-inspector',
                            componentState: { label: 'B' },
                            title: 'Inspector',
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
