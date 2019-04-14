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

export class AppStore {
    constructor() {
        this.uiSelectedUserId = observable.box(undefined);
        this.user = observable.box(undefined);
        this.users = observable([]);
    }

    getUser(userId) {
        return fetchResource(`users/${userId}`).then(responseJson => {
            this.user.set(responseJson.user);
            return responseJson;
        });
    }

    indexUsers() {
        return fetchResource('users').then(responseJson => {
            this.users.replace(responseJson.users);
            return responseJson;
        });
    }

    uiSelectUserId(userId) {
        this.uiSelectedUserId.set(userId);
    }
}

export default AppStore;
