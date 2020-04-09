export type SomeModule = {

};

declare global {

    interface Window {
        SomeModule: SomeModule
    }

}