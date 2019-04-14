import { observable } from 'mobx';

export class UsersStore {
    constructor() {
        this.data = observable([]);
    }

    getData() {
        return this.data;
    }
}

export default UsersStore;
