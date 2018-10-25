declare let reactComponentService: any;
declare namespace app.ngHost {
    interface IReactComponents {
    }
    class ReactComponentService implements IReactComponents {
        constructor();
        getComponents(componentName: string): any;
    }
}
