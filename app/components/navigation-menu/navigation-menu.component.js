"use strict";
var NavigationMenuComponent = (function () {
    function NavigationMenuComponent() {
        this.controller = NavigationMenuController;
        this.templateUrl = './app/components/navigation-menu/navigation-menu.component.html';
    }
    return NavigationMenuComponent;
}());
exports.NavigationMenuComponent = NavigationMenuComponent;
var NavigationMenuController = (function () {
    function NavigationMenuController($timeout, $element) {
        $timeout(function () {
            angular.element($element).find('.nav-menu').kendoMenu();
        });
    }
    NavigationMenuController.$inject = ['$timeout', '$element'];
    return NavigationMenuController;
}());
exports.NavigationMenuController = NavigationMenuController;
//# sourceMappingURL=navigation-menu.component.js.map