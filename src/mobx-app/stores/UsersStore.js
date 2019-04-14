import { observable } from 'mobx';

export class UsersStore {
    constructor() {
        this.data = observable([]);
    }

    indexUsers(params) {
        return (
            (typeof window !== 'undefined' && typeof window.fetch !== 'undefined')
            ? window
                .fetch('http://localhost:3000/api/users', { method: 'GET', params })
                .then(r => r.status === 200 ? r.json() : Promise.reject(r))
                .then(rj => {this.data.replace(rj.users); return rj;})
            : Promise.reject('window.fetch unavailable')
        );
    }
}

export default UsersStore;
