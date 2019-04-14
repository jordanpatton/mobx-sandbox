import { observable } from 'mobx';

export function fetchResource(resourceName = '', params) {
    return (
        (typeof window !== 'undefined' && typeof window.fetch !== 'undefined')
        ? window
            .fetch(`http://localhost:3000/api/${resourceName}`, { method: 'GET', params })
            .then(r => r.status === 200 ? r.json() : Promise.reject(r))
        : Promise.reject('window.fetch unavailable')
    );
}

export class UsersStore {
    constructor() {
        this.users = observable([]);
    }

    indexUsers() {
        return fetchResource('users').then(responseJson => {
            this.users.replace(responseJson.users);
            return responseJson;
        });
    }
}

export default UsersStore;
