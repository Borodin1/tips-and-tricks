import { makeAutoObservable } from 'mobx';

class SettingsStore {
    open = false;

    constructor() {
        makeAutoObservable(this, { rootStore: false }, {
            autoBind: true,
        });
    }

    toggleSettingsIsOpen(state) {
        this.open = state;
    }

    get isSettingsOpen() {
        return this.open;
    }
}

export { SettingsStore };
