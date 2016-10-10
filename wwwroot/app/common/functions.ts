export function debounce(func: Function, wait: number): Function {
    let timeoutHandle: number;
    return function (): void {
        const later = function(): void {
            timeoutHandle = undefined;
            func.apply(this, arguments);
        };

        clearTimeout(timeoutHandle);
        timeoutHandle = setTimeout(later, wait);
    };
}
