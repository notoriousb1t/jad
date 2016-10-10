export class NavigationMenuComponent {
    public controller: Function = NavigationMenuController;
    public templateUrl: string = './app/components/navigation-menu/navigation-menu.component.html';
}

export class NavigationMenuController {
    public static $inject: string[] = ['$timeout', '$element'];

    constructor($timeout: ng.ITimeoutService, $element: JQuery) {
        $timeout(() => {
            angular.element($element).find('.nav-menu').kendoMenu();
        });            
    }
}
