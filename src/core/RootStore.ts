import * as React from 'react';
import MainStore from '../store/MainStore';

export class RootStore {
    mainStore: MainStore;

    constructor() {
        this.mainStore = new MainStore();
    }

    sync = async () => {
        await Promise.all(
            Object.values(this).map(store => {
                return store?.sync ? store.sync() : Promise.resolve();
            }),
        );
    }
}

const rootStore = new RootStore();
export const storesContext = React.createContext(rootStore);
