import { observable } from 'mobx';

export class UsersStore {
    constructor(...args) {
        console.log('UsersStore.constructor', args);
    }

    getData() {
        return this.data;
    }
}

UsersStore.data = observable([]);

export default UsersStore;
